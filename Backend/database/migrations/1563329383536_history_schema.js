'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HistorySchema extends Schema {
  up () {
    this.create('histories', (table) => {
      table.increments()
      table.integer('resortId').unsigned().references('id').inTable('resorts')
      table.string('memberName',255).notNullable()
      table.integer('memberAge').notNullable()
      table.integer('createdBy').unsigned().references('id').inTable('users')
      table.timestamp('creationTime').notNullable().defaultTo(this.fn.now())
      table.timestamps()
    })
  }

  down () {
    this.drop('histories')
  }
}

module.exports = HistorySchema
