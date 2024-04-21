'use strict'

const Schema = use('Schema')

class CreateClientsTableSchema extends Schema {
  up() {
    this.create('clients', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('documents').notNullable().unique()
      table.timestamps()
    })
  }

  down() {
    this.drop('clients')
  }
}

module.exports = CreateClientsTableSchema

