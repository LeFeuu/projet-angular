import { Component } from '@angular/core';
import { Headerone } from "./headerone/headerone";
import { Promo } from "./promo/promo";



@Component({
  selector: 'app-root',
  imports: [Headerone, Promo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Projet-Angular-Groupe';
}
