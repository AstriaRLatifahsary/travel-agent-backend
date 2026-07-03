/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    login: typeof routes['auth.login']
  }
  banners: {
    index: typeof routes['banners.index']
    show: typeof routes['banners.show']
    store: typeof routes['banners.store']
    update: typeof routes['banners.update']
    destroy: typeof routes['banners.destroy']
  }
  travelPackages: {
    index: typeof routes['travel_packages.index']
    show: typeof routes['travel_packages.show']
    store: typeof routes['travel_packages.store']
    update: typeof routes['travel_packages.update']
    destroy: typeof routes['travel_packages.destroy']
  }
  reviews: {
    latest: typeof routes['reviews.latest']
    index: typeof routes['reviews.index']
    show: typeof routes['reviews.show']
    store: typeof routes['reviews.store']
    update: typeof routes['reviews.update']
    destroy: typeof routes['reviews.destroy']
  }
}
