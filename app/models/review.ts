import { ReviewSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import TravelPackage from '#models/travel_package'

export default class Review extends ReviewSchema {
  @belongsTo(() => TravelPackage)
  declare travelPackage: BelongsTo<typeof TravelPackage>
}