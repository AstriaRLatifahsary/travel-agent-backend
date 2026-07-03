// import type { HttpContext } from '@adonisjs/core/http'

import type { HttpContext } from '@adonisjs/core/http'
import Review from '#models/review'

export default class ReviewsController {
  // GET /admin/reviews
  async index() {
    return await Review.query().preload('travelPackage')
  }

  // GET /reviews/latest
  async latest() {
    return await Review.query()
      .preload('travelPackage')
      .orderBy('id', 'desc')
      .limit(3)
  }

  // GET /admin/reviews/:id
  async show({ params, response }: HttpContext) {
    const review = await Review.query().where('id', params.id).preload('travelPackage').first()

    if (!review) {
      return response.notFound({
        message: 'Review tidak ditemukan',
      })
    }

    return review
  }

  // POST /admin/reviews
  async store({ request, response }: HttpContext) {
    const data = request.only([
      'travel_package_id',
      'customer_name',
      'customer_photo',
      'comment',
      'rating',
    ])

    const review = await Review.create(data)

    return response.created({
      message: 'Review berhasil ditambahkan',
      data: review,
    })
  }

  // PUT /admin/reviews/:id
  async update({ params, request, response }: HttpContext) {
    const review = await Review.find(params.id)

    if (!review) {
      return response.notFound({
        message: 'Review tidak ditemukan',
      })
    }

    const data = request.only([
      'travel_package_id',
      'customer_name',
      'customer_photo',
      'comment',
      'rating',
    ])

    review.merge(data)
    await review.save()

    return response.ok({
      message: 'Review berhasil diperbarui',
      data: review,
    })
  }

  // DELETE /admin/reviews/:id
  async destroy({ params, response }: HttpContext) {
    const review = await Review.find(params.id)

    if (!review) {
      return response.notFound({
        message: 'Review tidak ditemukan',
      })
    }

    await review.delete()

    return response.ok({
      message: 'Review berhasil dihapus',
    })
  }
}
