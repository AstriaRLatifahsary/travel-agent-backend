import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'auth.login': { paramsTuple?: []; params?: {} }
    'banners.index': { paramsTuple?: []; params?: {} }
    'banners.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'banners.store': { paramsTuple?: []; params?: {} }
    'banners.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'banners.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'travel_packages.index': { paramsTuple?: []; params?: {} }
    'travel_packages.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'travel_packages.store': { paramsTuple?: []; params?: {} }
    'travel_packages.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'travel_packages.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'reviews.latest': { paramsTuple?: []; params?: {} }
    'reviews.index': { paramsTuple?: []; params?: {} }
    'reviews.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'reviews.store': { paramsTuple?: []; params?: {} }
    'reviews.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'reviews.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'banners.index': { paramsTuple?: []; params?: {} }
    'banners.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'travel_packages.index': { paramsTuple?: []; params?: {} }
    'travel_packages.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'reviews.latest': { paramsTuple?: []; params?: {} }
    'reviews.index': { paramsTuple?: []; params?: {} }
    'reviews.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'banners.index': { paramsTuple?: []; params?: {} }
    'banners.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'travel_packages.index': { paramsTuple?: []; params?: {} }
    'travel_packages.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'reviews.latest': { paramsTuple?: []; params?: {} }
    'reviews.index': { paramsTuple?: []; params?: {} }
    'reviews.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'auth.login': { paramsTuple?: []; params?: {} }
    'banners.store': { paramsTuple?: []; params?: {} }
    'travel_packages.store': { paramsTuple?: []; params?: {} }
    'reviews.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'banners.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'travel_packages.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'reviews.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'banners.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'travel_packages.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'reviews.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}