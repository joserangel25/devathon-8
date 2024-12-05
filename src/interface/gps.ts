export interface ILocation {
  lat: number;
  lng: number;
}

export interface IAddress {
  name: string,
  address: string,
  latitude: number,
  longitude: number
}

export interface IAddressResponse {
  name: string,
  address: string,
  latitude: string,
  longitude: string
}