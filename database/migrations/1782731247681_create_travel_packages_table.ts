import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'travel_packages'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('title').notNullable()
      table.string('destination').notNullable()
      table.text('description').notNullable()
      table.decimal('price', 10, 2).notNullable()
      table.string('duration').nullable()
      table.integer('quota').nullable()
      table.text('facilities').nullable()
      table.string('image').notNullable()
      table.boolean('is_active').defaultTo(true)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}