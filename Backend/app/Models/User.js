'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {
  resorts () {
    return this.belongsToMany('App/Models/Resort')
      .pivotModel('App/Models/History')
      .withTimestamps()
  }
}

module.exports = User
