'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserAlterSchema extends Schema {
  up () {
    this.alter('users', (table) => {
      // alter table
      table.timestamp('creationTime').defaultTo(this.fn.now())
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
      table.dropColumn('creationTime')
    })
  }
}

module.exports = UserAlterSchema
