'use strict'

const Resort = use('App/Models/Resort')

class ResortController {
  getAll = async ({request,response}) => {
    // const resorts = await Resort.all()
    // response.status(200).send(resorts)
    // response.json(resorts)
    return await Resort.all()
  }

  create = async ({request, respose}) => {
    const resortName = request.only(['name'])
    const resort = new Resort()
    resort.resortName = resortName.name
    //await resort.save()
    return await resort.save()
  }
}

module.exports = ResortController
