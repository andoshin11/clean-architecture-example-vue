export interface IProduct {
  thumbnail: string;
  name: string;
  designer: string;
  hirePrice: number;
  retailPrice: number;
}

export interface IProductsCriteria {
  designer?: string;
}
