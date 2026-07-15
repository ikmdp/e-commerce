import { Component } from '@angular/core';
import { UpperCasePipe, CurrencyPipe } from '@angular/common';
import {PrecoFormatadoPipe} from '../../pipes/preco-formatado-pipe';
@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
//adiciona variavel "produto" com as condicionais adequadas 
export class Produto {
  produto = 'Notebook Gamer';
  preco = 5000;
   mostrarProduto = true;
   mostrarPreco = true;
  produtos = [
    {nome: 'Teclado', preco: 490.99},
    {nome: 'Mouse', preco: 360.70},
    {nome: 'Monitor', preco: 980.00}
  ];
}
