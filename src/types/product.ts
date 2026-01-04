export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}
export interface ProductDetail {
  id: number;
  title: string|number;
  description: string;
  category: string;
  image: string;
  price: number;
  rating:{
    count:string
  }
}
