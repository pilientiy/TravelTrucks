export type FiltersState = {
  location?: string;
  AC?: boolean;
  TV?: boolean;
  water?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  radio?: boolean;
  transmission?: string;
  form?: string;
};

export type FormValues = {
  location: string;
  AC: boolean;
  TV: boolean;
  water: boolean;
  bathroom: boolean;
  kitchen: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  radio: boolean;
  transmission: string[];
  form: string;
};
