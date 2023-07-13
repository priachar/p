import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  
  
  foodDetails = [
    {
      id:1,
      foodName:"Vanilla Icecream",
      foodDetails:"Fresh vanilla icecream",
      foodPrice:200,
      foodImg:"https://images.pexels.com/photos/4109784/pexels-photo-4109784.jpeg"
    },
    {
      id:2,
      foodName:"Chocolate Icecream",
      foodDetails:"Chocolate dipped icecream",
      foodPrice:369,
      foodImg:"https://images.pexels.com/photos/2846337/pexels-photo-2846337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id:3,
      foodName:"Strawberry Icecream",
      foodDetails:"Fresh strawberies",
      foodPrice:149,
      foodImg:"https://images.pexels.com/photos/2161649/pexels-photo-2161649.jpeg"
    },
    {
      id:4,
      foodName:"Mixed Icecream",
      foodDetails:"Mixed fruits icecream",
      foodPrice:140,
      foodImg:"https://images.pexels.com/photos/7474240/pexels-photo-7474240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate.",
      foodPrice:105,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo ice cream",
      foodPrice:219,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]


  

}