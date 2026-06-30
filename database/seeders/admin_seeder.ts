import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Admin from '#models/admin'
import hash from '@adonisjs/core/services/hash'

export default class extends BaseSeeder {
  async run() {
    const adminExists = await Admin.findBy('email', 'admin@gmail.com')

    if (!adminExists) {
      await Admin.create({
        name: 'Administrator',
        username: 'admin',
        email: 'admin@gmail.com',
        password: await hash.make('admin123'),
      })
    }
  }
}
