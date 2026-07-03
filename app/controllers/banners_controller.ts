import type { HttpContext } from '@adonisjs/core/http'
import Banner from '#models/banner'

export default class BannersController {
  // GET /admin/banners
  async index() {
    return await Banner.all()
  }

  // GET /admin/banners/:id
  async show({ params, response }: HttpContext) {
    const banner = await Banner.find(params.id)

    if (!banner) {
      return response.notFound({
        message: 'Banner tidak ditemukan',
      })
    }

    return banner
  }

  // POST /admin/banners
  async store({ request, response }: HttpContext) {
    const data = request.only([
      'title',
      'subtitle',
      'image',
      'description',
      'travel_package_id',
      'is_active',
    ])

    const banner = await Banner.create(data)

    return response.created({
      message: 'Banner berhasil ditambahkan',
      data: banner,
    })
  }

  // PUT /admin/banners/:id
  async update({ params, request, response }: HttpContext) {
    const banner = await Banner.find(params.id)

    if (!banner) {
      return response.notFound({
        message: 'Banner tidak ditemukan',
      })
    }

    const data = request.only([
      'title',
      'subtitle',
      'image',
      'description',
      'travel_package_id',
      'is_active',
    ])

    banner.merge(data)
    await banner.save()

    return response.ok({
      message: 'Banner berhasil diperbarui',
      data: banner,
    })
  }

  // DELETE /admin/banners/:id
  async destroy({ params, response }: HttpContext) {
    const banner = await Banner.find(params.id)

    if (!banner) {
      return response.notFound({
        message: 'Banner tidak ditemukan',
      })
    }

    await banner.delete()

    return response.ok({
      message: 'Banner berhasil dihapus',
    })
  }
}
