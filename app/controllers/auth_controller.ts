import type { HttpContext } from '@adonisjs/core/http'
import Admin from '#models/admin'
import hash from '@adonisjs/core/services/hash'

export default class AuthController {
  async login({ request, response }: HttpContext) {
    const { email, password } = request.only([
      'email',
      'password',
    ])

    const admin = await Admin.findBy('email', email)

    if (!admin) {
      return response.badRequest({
        message: 'Email tidak ditemukan',
      })
    }

    const isValid = await hash.verify(
      admin.password,
      password
    )

    if (!isValid) {
      return response.badRequest({
        message: 'Password salah',
      })
    }

    return response.ok({
      message: 'Login berhasil',
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
      },
    })
  }
}