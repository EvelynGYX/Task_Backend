'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResortSchema extends Schema {
  up () {
    this.create('resorts', (table) => {
      table.increments()
      table.string('resortName', 255).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('resorts')
  }
}

module.exports = ResortSchema
