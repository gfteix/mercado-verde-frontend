export interface Product {
  id: string;
  name: string;
  categoryId: string;
  price: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  category: {
    id: string;
    name: string;
    createdAt: string;
    imageUrl: string;
  };
  rating?: number;
  image: string;
}
