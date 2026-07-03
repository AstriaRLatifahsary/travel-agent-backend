import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'banners'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .integer('travel_package_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('travel_packages')
        .onDelete('SET NULL')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('travel_package_id')
    })
  }
}
