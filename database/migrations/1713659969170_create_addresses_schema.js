'use strict'

const Schema = use('Schema')

class CreateAddressesTableSchema extends Schema {
  up() {
    this.create('addresses', (table) => {
      table.increments()
      table.integer('client_id').unsigned().references('id').inTable('clients').onDelete('CASCADE')
      table.string('street').notNullable()
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.string('zipcode').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('addresses')
  }
}

module.exports = CreateAddressesTableSchema

