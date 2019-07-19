'use strict'

const User = use('App/Models/User')

class UserController {
  register = async ({request, response}) => {
    const user = new User()
    user.email = request.only(['email']).email
    user.password = request.only(['password']).password
    return await user.save()
  }

  login = async ({request, response}) => {
    const user = await User.findBy('email', request.only(['email']).email)
    if(user.password === request.only(['password']).password){
      return true
    }else{
      return false
    }
  }
}

module.exports = UserController
