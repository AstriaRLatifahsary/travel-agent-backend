import { ReviewSchema } from '#database/schema'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import TravelPackage from '#models/travel_package'
import { column, belongsTo } from '@adonisjs/lucid/orm'

export default class Review extends ReviewSchema {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare travelPackageId: number

  @column()
  declare customerName: string

  @column()
  declare customerPhoto: string | null

  @column()
  declare comment: string

  @column()
  declare rating: number

  @belongsTo(() => TravelPackage)
  declare travelPackage: BelongsTo<typeof TravelPackage>
}