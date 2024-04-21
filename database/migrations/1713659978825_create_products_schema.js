'use strict'

const Schema = use('Schema')

class CreateSalesTableSchema extends Schema {
  up() {
    this.create('sales', (table) => {
      table.increments()
      table.integer('client_id').unsigned().references('id').inTable('clients').onDelete('CASCADE')
      table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE')
      table.integer('quantity').notNullable()
      table.decimal('unit_price', 10, 2).notNullable()
      table.decimal('total_price', 10, 2).notNullable()
      table.timestamp('sold_at').defaultTo(this.fn.now())
      table.timestamps()
    })
  }

  down() {
    this.drop('sales')
  }
}

module.exports = CreateSalesTableSchema

