import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'reviews'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('travel_package_id')
        .unsigned()
        .references('id')
        .inTable('travel_packages')
        .onDelete('CASCADE')

      table.string('customer_name').notNullable()
      table.string('customer_photo').nullable()
      table.text('comment').notNullable()
      table.integer('rating').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}