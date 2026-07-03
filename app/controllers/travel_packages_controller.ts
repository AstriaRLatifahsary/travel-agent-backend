import type { HttpContext } from '@adonisjs/core/http'
import TravelPackage from '#models/travel_package'

export default class TravelPackagesController {
  // GET /admin/travel-packages
  async index() {
    const packages =
      await TravelPackage
        .query()
        .preload('reviews')

    return packages.map((pkg) => {
      const count =
        pkg.reviews.length

      const avg =
        count > 0
          ? pkg.reviews.reduce(
              (sum, review) =>
                sum + review.rating,
              0
            ) / count
          : 0

      return {
        ...pkg.serialize(),
        rating: Number(
          avg.toFixed(1)
        ),
        reviewCount: count,
      }
    })
  }

  // GET /admin/travel-packages/:id
  async show({
    params,
    response,
  }: HttpContext) {
    const travelPackage =
      await TravelPackage
        .query()
        .where(
          'id',
          params.id
        )
        .preload('reviews')
        .first()

    if (!travelPackage) {
      return response.notFound({
        message:
          'Paket traveling tidak ditemukan',
      })
    }

    const count =
      travelPackage.reviews.length

    const avg =
      count > 0
        ? travelPackage.reviews.reduce(
            (sum, review) =>
              sum + review.rating,
            0
          ) / count
        : 0

    return {
      ...travelPackage.serialize(),
      rating: Number(
        avg.toFixed(1)
      ),
      reviewCount: count,
    }
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