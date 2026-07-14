import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';//remove a importaçao de outlet para esse componente pois nao é necessario para esse componente
import {Produto} from './components/produto/produto';//importando o arquivo produto do arquivo produto.ts para ser usado no componente app
@Component({
  selector: 'app-root',
  imports: [Produto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
