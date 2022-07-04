import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id: 1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried musala paneer",
      foodPrice: 200,
      foodImg: "../../assets/images/pic2.jpg"
    },
    {
      id: 2,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried musala paneer",
      foodPrice: 300,
      foodImg: "../../assets/images/pic3.jpg"
    },
    {
      id: 3,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried musala paneer",
      foodPrice: 250,
      foodImg: "../../assets/images/pic4.jpg",
    },
    {
      id: 4,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried musala paneer",
      foodPrice: 500,
      foodImg: "../../assets/images/pic2.jpg"
    },
    {
      id: 5,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried musala paneer",
      foodPrice: 800,
      foodImg: "../../assets/images/pic2.jpg"
    },
    {
      id: 6,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried musala paneer",
      foodPrice: 600,
      foodImg: "../../assets/images/pic2.jpg"
    },
    {
      id: 7,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried musala paneer",
      foodPrice: 550,
      foodImg: "../../assets/images/pic2.jpg"
    }
  ]
}
