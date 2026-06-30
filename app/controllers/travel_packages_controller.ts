// import type { HttpContext } from '@adonisjs/core/http'

import type { HttpContext } from '@adonisjs/core/http'
import TravelPackage from '#models/travel_package'

export default class TravelPackagesController {
  // GET /admin/travel-packages
  async index() {
    return await TravelPackage.all()
  }

  // GET /admin/travel-packages/:id
  async show({ params, response }: HttpContext) {
    const travelPackage = await TravelPackage.find(params.id)

    if (!travelPackage) {
      return response.notFound({
        message: 'Paket traveling tidak ditemukan',
      })
    }

    return travelPackage
  }

  // POST /admin/travel-packages
  async store({ request, response }: HttpContext) {
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

    const travelPackage = await TravelPackage.create(data)

    return response.created({
      message: 'Paket traveling berhasil ditambahkan',
      data: travelPackage,
    })
  }

  // PUT /admin/travel-packages/:id
  async update({ params, request, response }: HttpContext) {
    const travelPackage = await TravelPackage.find(params.id)

    if (!travelPackage) {
      return response.notFound({
        message: 'Paket traveling tidak ditemukan',
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
      message: 'Paket traveling berhasil diperbarui',
      data: travelPackage,
    })
  }

  // DELETE /admin/travel-packages/:id
  async destroy({ params, response }: HttpContext) {
    const travelPackage = await TravelPackage.find(params.id)

    if (!travelPackage) {
      return response.notFound({
        message: 'Paket traveling tidak ditemukan',
      })
    }

    await travelPackage.delete()

    return response.ok({
      message: 'Paket traveling berhasil dihapus',
    })
  }
}