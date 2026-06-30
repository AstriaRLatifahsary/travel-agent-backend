/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.login': {
    methods: ["POST"],
    pattern: '/admin/login',
    tokens: [{"old":"/admin/login","type":0,"val":"admin","end":""},{"old":"/admin/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.login']['types'],
  },
  'banners.index': {
    methods: ["GET","HEAD"],
    pattern: '/admin/banners',
    tokens: [{"old":"/admin/banners","type":0,"val":"admin","end":""},{"old":"/admin/banners","type":0,"val":"banners","end":""}],
    types: placeholder as Registry['banners.index']['types'],
  },
  'banners.show': {
    methods: ["GET","HEAD"],
    pattern: '/admin/banners/:id',
    tokens: [{"old":"/admin/banners/:id","type":0,"val":"admin","end":""},{"old":"/admin/banners/:id","type":0,"val":"banners","end":""},{"old":"/admin/banners/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['banners.show']['types'],
  },
  'banners.store': {
    methods: ["POST"],
    pattern: '/admin/banners',
    tokens: [{"old":"/admin/banners","type":0,"val":"admin","end":""},{"old":"/admin/banners","type":0,"val":"banners","end":""}],
    types: placeholder as Registry['banners.store']['types'],
  },
  'banners.update': {
    methods: ["PUT"],
    pattern: '/admin/banners/:id',
    tokens: [{"old":"/admin/banners/:id","type":0,"val":"admin","end":""},{"old":"/admin/banners/:id","type":0,"val":"banners","end":""},{"old":"/admin/banners/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['banners.update']['types'],
  },
  'banners.destroy': {
    methods: ["DELETE"],
    pattern: '/admin/banners/:id',
    tokens: [{"old":"/admin/banners/:id","type":0,"val":"admin","end":""},{"old":"/admin/banners/:id","type":0,"val":"banners","end":""},{"old":"/admin/banners/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['banners.destroy']['types'],
  },
  'travel_packages.index': {
    methods: ["GET","HEAD"],
    pattern: '/admin/travel-packages',
    tokens: [{"old":"/admin/travel-packages","type":0,"val":"admin","end":""},{"old":"/admin/travel-packages","type":0,"val":"travel-packages","end":""}],
    types: placeholder as Registry['travel_packages.index']['types'],
  },
  'travel_packages.show': {
    methods: ["GET","HEAD"],
    pattern: '/admin/travel-packages/:id',
    tokens: [{"old":"/admin/travel-packages/:id","type":0,"val":"admin","end":""},{"old":"/admin/travel-packages/:id","type":0,"val":"travel-packages","end":""},{"old":"/admin/travel-packages/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['travel_packages.show']['types'],
  },
  'travel_packages.store': {
    methods: ["POST"],
    pattern: '/admin/travel-packages',
    tokens: [{"old":"/admin/travel-packages","type":0,"val":"admin","end":""},{"old":"/admin/travel-packages","type":0,"val":"travel-packages","end":""}],
    types: placeholder as Registry['travel_packages.store']['types'],
  },
  'travel_packages.update': {
    methods: ["PUT"],
    pattern: '/admin/travel-packages/:id',
    tokens: [{"old":"/admin/travel-packages/:id","type":0,"val":"admin","end":""},{"old":"/admin/travel-packages/:id","type":0,"val":"travel-packages","end":""},{"old":"/admin/travel-packages/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['travel_packages.update']['types'],
  },
  'travel_packages.destroy': {
    methods: ["DELETE"],
    pattern: '/admin/travel-packages/:id',
    tokens: [{"old":"/admin/travel-packages/:id","type":0,"val":"admin","end":""},{"old":"/admin/travel-packages/:id","type":0,"val":"travel-packages","end":""},{"old":"/admin/travel-packages/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['travel_packages.destroy']['types'],
  },
  'reviews.index': {
    methods: ["GET","HEAD"],
    pattern: '/admin/reviews',
    tokens: [{"old":"/admin/reviews","type":0,"val":"admin","end":""},{"old":"/admin/reviews","type":0,"val":"reviews","end":""}],
    types: placeholder as Registry['reviews.index']['types'],
  },
  'reviews.show': {
    methods: ["GET","HEAD"],
    pattern: '/admin/reviews/:id',
    tokens: [{"old":"/admin/reviews/:id","type":0,"val":"admin","end":""},{"old":"/admin/reviews/:id","type":0,"val":"reviews","end":""},{"old":"/admin/reviews/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['reviews.show']['types'],
  },
  'reviews.store': {
    methods: ["POST"],
    pattern: '/admin/reviews',
    tokens: [{"old":"/admin/reviews","type":0,"val":"admin","end":""},{"old":"/admin/reviews","type":0,"val":"reviews","end":""}],
    types: placeholder as Registry['reviews.store']['types'],
  },
  'reviews.update': {
    methods: ["PUT"],
    pattern: '/admin/reviews/:id',
    tokens: [{"old":"/admin/reviews/:id","type":0,"val":"admin","end":""},{"old":"/admin/reviews/:id","type":0,"val":"reviews","end":""},{"old":"/admin/reviews/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['reviews.update']['types'],
  },
  'reviews.destroy': {
    methods: ["DELETE"],
    pattern: '/admin/reviews/:id',
    tokens: [{"old":"/admin/reviews/:id","type":0,"val":"admin","end":""},{"old":"/admin/reviews/:id","type":0,"val":"reviews","end":""},{"old":"/admin/reviews/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['reviews.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
