interface ILayoutProps{
    children: React.ReactNode
}

interface Iproduct{
    id: number;
    title: string;
    description: string;
    price: number;
    images: string;
    thumbnail:string;
    category: string;
    discountPercentage: number
}

interface IdummyJsonResponse {
  products: Iproduct[];
  total: number;
  skip: number;
  limit: number;
}