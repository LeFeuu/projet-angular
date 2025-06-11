import { Component } from '@angular/core';
import { Headerone } from "./headerone/headerone";


@Component({
  selector: 'app-root',
  imports: [Headerone],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Projet-Angular-Groupe';
}
