import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
//method 2
  getAllFoodsByTag(tag:string):Food[]{
    return tag == "All" ? 
    this.getAll() : 
    this.getAll().filter(food => food.tags?.includes(tag));

  }
  //meathod 3
  getAllTags():Tag[]{
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ]
  }
  //method 4
  getAllFoodsBySearchTerm(searchTerm:string):Food[]{
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  //method 5
  getFoodById(id:number):Food{
    return this.getAll().find(food => food.id == id)!;

  }
  
  getAll():Food[]{
    return[
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },

      

    ]

  }
}
// '/assets/images/food-1.jpg',
//       '/assets/images/food-2.jpg',
//       '/assets/images/food-3.jpg',
//       '/assets/images/food-4.jpg',
//       '/assets/images/food-5.jpg',
//       '/assets/images/food-6.jpg',
