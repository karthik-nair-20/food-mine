import { Component } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {

  food!:Food;
  constructor(private activateRoute: ActivatedRoute, private foodService: FoodService){

    activateRoute.params.subscribe((params) =>{
      if(params['id']){
        this.food = foodService.getFoodById(params['id']);
      }
    })
  }

}
