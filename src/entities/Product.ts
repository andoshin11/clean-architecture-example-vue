export interface IProduct {
  id: number;
  thumbnail: string;
  name: string;
  designer: string;
  price: number;
}

export interface IProductsCriteria {
  designer?: string;
}
