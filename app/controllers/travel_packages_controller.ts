import type { HttpContext } from '@adonisjs/core/http'
import TravelPackage from '#models/travel_package'
import Review from '#models/review'

export default class TravelPackagesController {
  // GET /admin/travel-packages
  async index() {
    const packages =
      await TravelPackage.all()

    const result = []

    for (const pkg of packages) {
      const reviews =
        await Review.query().where(
          'travel_package_id',
          pkg.id
        )

      const count =
        reviews.length

      const avg =
        count > 0
          ? reviews.reduce(
              (sum, review) =>
                sum +
                review.rating,
              0
            ) / count
          : 0

      result.push({
        ...pkg.serialize(),
        rating: Number(
          avg.toFixed(1)
        ),
        reviewCount: count,
      })
    }

    return result
  }

  // GET /admin/travel-packages/:id
  async show({
    params,
    response,
  }: HttpContext) {
    const travelPackage =
      await TravelPackage.find(
        params.id
      )

    if (!travelPackage) {
      return response.notFound({
        message:
          'Paket traveling tidak ditemukan',
      })
    }

    return travelPackage
  }

  // POST /admin/travel-packages
  async store({
    request,
    response,
  }: HttpContext) {
    const data = request.only([
      'title',
      'destination',
      'description',
      'price',
      'duration',
      'quota',
      'facilities',
      'image',
      'is_active',
    ])

    const travelPackage =
      await TravelPackage.create(
        data
      )

    return response.created({
      message:
        'Paket traveling berhasil ditambahkan',
      data: travelPackage,
    })
  }

  // PUT /admin/travel-packages/:id
  async update({
    params,
    request,
    response,
  }: HttpContext) {
    const travelPackage =
      await TravelPackage.find(
        params.id
      )

    if (!travelPackage) {
      return response.notFound({
        message:
          'Paket traveling tidak ditemukan',
      })
    }

    const data = request.only([
      'title',
      'destination',
      'description',
      'price',
      'duration',
      'quota',
      'facilities',
      'image',
      'is_active',
    ])

    travelPackage.merge(data)

    await travelPackage.save()

    return response.ok({
      message:
        'Paket traveling berhasil diperbarui',
      data: travelPackage,
    })
  }

  // DELETE /admin/travel-packages/:id
  async destroy({
    params,
    response,
  }: HttpContext) {
    const travelPackage =
      await TravelPackage.find(
        params.id
      )

    if (!travelPackage) {
      return response.notFound({
        message:
          'Paket traveling tidak ditemukan',
      })
    }

    await travelPackage.delete()

    return response.ok({
      message:
        'Paket traveling berhasil dihapus',
    })
  }
}