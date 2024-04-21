'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateSalesSchema extends Schema {
  up () {
    this.create('create_sales', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('create_sales')
  }
}

module.exports = CreateSalesSchema
