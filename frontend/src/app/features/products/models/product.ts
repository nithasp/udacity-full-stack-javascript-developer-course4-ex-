export interface ProductType {
  product_id: number;
  color: string;
  quantity: number;
  price: number;
  stock: number;
  image: string;
  _id?: string;
}

export interface Review {
  star: number;
  comment: string;
  userId?: string;
  userName?: string;
  date?: Date;
  _id?: string;
}

export interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  preview_img: string[];
  types: ProductType[];
  reviews: Review[];
  overall_rating: number;
  stock?: number;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  shopId?: string;
  shopName?: string;
}


export interface CartItem {
  cartItemId?: number;
  product: Product;
  quantity: number;
  selectedType?: ProductType;
  shopId: string;
  shopName: string;
}
