import { CurrencyPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export interface Pizza {
  name: string,
  info: string,
  price: number,
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('user');

  public isSelected: boolean = false;
  public selectedPizza: Pizza | null = null;

  public selectPizza(pizza: Pizza) {
    console.log(`i used to have ${pizza.name} dreams until i found out there were other ways to score`);
    this.selectedPizza = pizza;
    this.isSelected = true;

  }

  pizzas = [
    {
      name: 'Mozzarella',
      info: 'Tomato sauce, Basil, Mozzarella',
      price: 10
    },
    {
      name: 'Pepperoni',
      info: 'Tomato sauce, Basil, Mozarella, Pepperoni',
      price: 12
    },
    {
      name: 'Hawaiian',
      info: 'Tomato sauce, Basil, Mozarella, Pineapple, Ham',
      price: 12
    },
    {
      name: 'Meat feast',
      info: 'Tomato sauce, Basil, Mozarella, Pepperoni, Ham, Italian sausage, Ground beef',
      price: 13
    },
    {
      name: 'Veggie Supreme',
      info: 'Tomato sauce, Basil, Mozarella, Black olives, Green pepper, Mushroom, Onion, Sweet corn',
      price: 13
    },
    {
      name: 'Vegan',
      info: 'Tomato sauce, Basil, Vegan cheese, Creamed Spinach, Sun-Dried Tomatoes, Red Onion, and Olives',
      price: 14
    },
  ]
}

