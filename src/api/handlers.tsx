import { http, HttpResponse } from "msw";

type Product = {
  id: number;
  name: string;
  price: number;
};

type Restaurant = {
  id: string;
  name: string;
  mapsUrl: string;
  url: string;
  address: string;
  specialty: string;
  photoUrl: string;
  rating: number;
  categories: string[];
};

export const handlers = [
  http.get("/api/products", () => {
    // Mock product data
    const products: Product[] = [
      { id: 1, name: "Product 1", price: 10 },
      { id: 2, name: "Product 2", price: 20 },
    ];

    return HttpResponse.json(products);
  }),

  http.get("/api/restaurants", () => {
    // Mock restaurant data
    const restaurants: Restaurant[] = [
      {
        id: "1",
        name: "Burger Kingdom",
        mapsUrl: "https://goo.gl/maps/EnyNcNJtvC3QkFgJ6",
        url: "https://www.sterkstaaltje.com/",
        address: "Staalstraat 12 1011 JL Amsterdam",
        specialty: "Nicest place for burgers",
        photoUrl:
          "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1003&q=20",
        rating: 4.2,
        categories: ["burgers", "comfort food"],
      },
    ];
    return HttpResponse.json(restaurants);
  }),
];
