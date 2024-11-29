export type gallery = {
  original: string;
  thumb: string;
};

export type reviews = {
  comment: string;
  reviewer_name: string;
  reviewer_rating: number;
};

export type Vehicle = {
  id: string;
  name: string;
  description: string;
  location: string;
  form: string;
  engine: string;
  AC: boolean;
  TV: boolean;
  water: boolean;
  bathroom: boolean;
  kitchen: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  radio: boolean;
  consumption: string;
  transmission: string;
  tank: string;
  width: string;
  height: string;
  length: string;
  price: number;
  rating: number;
  gallery: gallery[];
  reviews: reviews[];
};

export type CampersState = {
  itemById: Vehicle | null;
  limit: number;
  page: number;
  total: number;
  items: Vehicle[];
  loading: boolean;
  error: string | null;
};

export type CampersSelectorType = {
  campers: CampersState;
};

export type FetchAllResponse = {
  items: Vehicle[];
  total: number;
};

export type ItemProps = {
  item: Vehicle | null;
}