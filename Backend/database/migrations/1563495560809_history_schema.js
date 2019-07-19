'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HistorySchema extends Schema {
  up () {
    this.table('histories', (table) => {
      // alter table
      table.dropColumn('creationTime')
    })
  }

  down () {
    this.table('histories', (table) => {
      // reverse alternations
      table.timestamp('creationTime').notNullable().defaultTo(this.fn.now())
    })
  }
}

module.exports = HistorySchema
