export interface Product {
  id: number | string;   
  title: string;
  description: string;
  image: string;
  price: number;
  category?: string;    
}

export interface ProductDetail {
  id: number|string;
  title: string|number;
  description: string;
  category: string;
  image: string;
  price: number;
  rating:{
    count:string
  }
}
