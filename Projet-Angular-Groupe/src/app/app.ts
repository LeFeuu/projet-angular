import { Component } from '@angular/core';
import { Headerone } from "./headerone/headerone";
import { Promo } from "./promo/promo";
import { Review } from './review/review';



@Component({
  selector: 'app-root',
  imports: [Headerone, Promo,Review],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Projet-Angular-Groupe';
}
