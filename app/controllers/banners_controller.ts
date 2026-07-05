import type { HttpContext } from '@adonisjs/core/http'
import Banner from '#models/banner'
import app from '@adonisjs/core/services/app'
import crypto from 'node:crypto'

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
  async store({
    request,
    response,
  }: HttpContext) {
    const image =
      request.file('image', {
        size: '5mb',
        extnames: [
          'jpg',
          'jpeg',
          'png',
          'webp',
        ],
      })

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

    const banner =
      await Banner.create({
        title:
          request.input('title'),
        subtitle:
          request.input('subtitle'),
        description:
          request.input('description'),
        travelPackageId:
          request.input(
            'travel_package_id'
          ),
        isActive:
          request.input(
            'is_active'
          ),
        image: imagePath,
      })

    return response.created({
      message:
        'Banner berhasil ditambahkan',
      data: banner,
    })
  }

  // PUT /admin/banners/:id
  async update({
    params,
    request,
    response,
  }: HttpContext) {
    const banner =
      await Banner.find(
        params.id
      )

    if (!banner) {
      return response.notFound({
        message:
          'Banner tidak ditemukan',
      })
    }

    const image =
      request.file('image', {
        size: '5mb',
        extnames: [
          'jpg',
          'jpeg',
          'png',
          'webp',
        ],
      })

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

      banner.image =
        `uploads/${fileName}`
    }

    banner.merge({
      title:
        request.input('title'),
      subtitle:
        request.input('subtitle'),
      description:
        request.input('description'),
      travelPackageId:
        request.input(
          'travel_package_id'
        ),
      isActive:
        request.input(
          'is_active'
        ),
    })

    await banner.save()

    return response.ok({
      message:
        'Banner berhasil diperbarui',
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
