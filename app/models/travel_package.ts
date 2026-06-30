import { TravelPackageSchema } from '#database/schema'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Review from '#models/review'

export default class TravelPackage extends TravelPackageSchema {
  @hasMany(() => Review)
  declare reviews: HasMany<typeof Review>
}