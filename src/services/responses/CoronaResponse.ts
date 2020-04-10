interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Latest {
  confirmed: number;
  deaths: number;
  recovered: number;
}

interface Timelines {}

interface Location {
  id: number;
  country: string;
  country_code: string;
  country_population: number;
  province: string;
  county: string;
  last_updated: Date;
  coordinates: Coordinates;
  latest: Latest;
  timelines: Timelines;
}

export interface CoronaResponse {
  location: Location;
}
