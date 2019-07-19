'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Resort extends Model {
  users () {
    return this.belongsToMany('App/Models/User')
      .pivotModel('App/Models/History')
      .withTimestamps()
  }
}

module.exports = Resort
