/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

// import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
// import { controllers } from '#generated/controllers'
import AuthController from '#controllers/auth_controller'
import BannersController from '#controllers/banners_controller'
import TravelPackagesController from '#controllers/travel_packages_controller'
import ReviewsController from '#controllers/reviews_controller'

router.get('/', () => {
  return { hello: 'world' }
})

router.post('/admin/login', [AuthController, 'login'])

router.get('/admin/banners', [BannersController, 'index'])
router.get('/admin/banners/:id', [BannersController, 'show'])
router.post('/admin/banners', [BannersController, 'store'])
router.put('/admin/banners/:id', [BannersController, 'update'])
router.delete('/admin/banners/:id', [BannersController, 'destroy'])

router.get('/admin/travel-packages', [TravelPackagesController, 'index'])
router.get('/admin/travel-packages/:id', [TravelPackagesController, 'show'])
router.post('/admin/travel-packages', [TravelPackagesController, 'store'])
router.put('/admin/travel-packages/:id', [TravelPackagesController, 'update'])
router.delete('/admin/travel-packages/:id', [TravelPackagesController, 'destroy'])

router.get('/admin/reviews', [ReviewsController, 'index'])
router.get('/admin/reviews/:id', [ReviewsController, 'show'])
router.post('/admin/reviews', [ReviewsController, 'store'])
router.put('/admin/reviews/:id', [ReviewsController, 'update'])
router.delete('/admin/reviews/:id', [ReviewsController, 'destroy'])

// router
//   .group(() => {
//     router
//       .group(() => {
//         router.post('signup', [controllers.NewAccount, 'store'])
//         router.post('login', [controllers.AccessTokens, 'store'])
//       })
//       .prefix('auth')
//       .as('auth')

//     router
//       .group(() => {
//         router.get('profile', [controllers.Profile, 'show'])
//         router.post('logout', [controllers.AccessTokens, 'destroy'])
//       })
//       .prefix('account')
//       .as('profile')
//       .use(middleware.auth())
//   })
//   .prefix('/api/v1')
