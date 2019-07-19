'use strict'

const History = use('App/Models/History')

class HistoryController {
  create = async ({request, response}) => {
    const time = new Date().toISOString().slice(0, 19).replace('T', ' ');
    console.log(time)
    const members = request.only(['members']).members
    const resortId = request.only(['resortId']).resortId
    console.log(resortId)
    //const members = request.all()
    console.log(members)
    const membersList = [...members]
    for(let i=0; i<membersList.length; i++){
      const history = new History()
        history.memberName = membersList[i].memberName;
        history.memberAge = membersList[i].memberAge;
        history.resortId = resortId;
        history.createdBy = 2;
        history.creationTime = time
        await history.save();
    }
    return true;
  }

  show =  async ({request, response}) => {
    
  }
}

module.exports = HistoryController
