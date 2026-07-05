import type { HttpContext } from '@adonisjs/core/http'
import TravelPackage from '#models/travel_package'
import app from '@adonisjs/core/services/app'
import crypto from 'node:crypto'

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
    const image =
      request.file('image', {
        size: '10mb',
        extnames: [
          'jpg',
          'jpeg',
          'png',
          'webp',
        ],
      }
      )

    let imagePath = ''

    if (
      image &&
      image.isValid
    ) {
      const fileName =
        `${crypto.randomUUID()}.${image.extname}`

      await image.move(
        app.makePath(
          'public/uploads'
        ),
        {
          name: fileName,
        }
      )

      imagePath =
        `uploads/${fileName}`
    }

    const travelPackage =
      await TravelPackage.create({
        title:
          request.input('title'),
        destination:
          request.input('destination'),
        description:
          request.input('description'),
        price:
          request.input('price'),
        duration:
          request.input('duration'),
        quota:
          request.input('quota'),
        facilities:
          request.input('facilities'),
        image: imagePath,
      })

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

    const image =
      request.file('image', {
        size: '10mb',
        extnames: [
          'jpg',
          'jpeg',
          'png',
          'webp',
        ],
      }
      )

    if (
      image &&
      image.isValid
    ) {
      const fileName =
       `${crypto.randomUUID()}.${image.extname}`

      await image.move(
        app.makePath(
          'public/uploads'
        ),
        {
          name: fileName,
        }
      )

      travelPackage.image =
        `uploads/${fileName}`
    }

    travelPackage.merge({
      title:
        request.input('title'),
      destination:
        request.input('destination'),
      description:
        request.input('description'),
      price:
        request.input('price'),
      duration:
        request.input('duration'),
      quota:
        request.input('quota'),
      facilities:
        request.input('facilities'),
    })

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