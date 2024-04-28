import { http, HttpResponse } from "msw";
import { Restaurant } from "../types";

export const handlers = [
  http.get("/fakeApi/restaurants", () => {
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
        menu: {
          food: [
            {
              id: 1,
              name: "Cheeseburger",
              description: "Nice grilled burger with cheese",
              price: 8.5,
            },
            {
              id: 2,
              name: "Fries",
              description: "Fried french fries",
              price: 2.5,
            },
          ],
          dessert: [
            {
              id: 3,
              name: "Vanilla ice cream",
              description: "Ice cream",
              price: 2,
            },
          ],
          drinks: [
            {
              id: 4,
              name: "Coca-Cola",
              price: 1.75,
            },
            {
              id: 5,
              name: "Fanta",
              price: 1.5,
            },
            {
              id: 6,
              name: "Sprite",
              price: 1.5,
            },
          ],
        },
      },
    ];
    return HttpResponse.json(restaurants);
  }),
];
