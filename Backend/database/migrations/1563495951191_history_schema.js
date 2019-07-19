'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HistorySchema extends Schema {
  up () {
    this.table('histories', (table) => {
      // alter table
      table.datetime('creationTime')
    })
  }

  down () {
    this.table('histories', (table) => {
      // reverse alternations
      table.dropColumn('creationTime')
    })
  }
}

module.exports = HistorySchema
