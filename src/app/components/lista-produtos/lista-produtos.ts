import { Component } from '@angular/core';
import { Produto } from '../produto/produto';
@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = [
    {nome:'Fone Gamer', preco: 99.90},
    {nome:'Teclado Gamer', preco: 149.90},
    {nome:'Monitor Gamer', preco: 499.99},
    {nome:'Mouse Gamer', preco: 59.90}
  ];
  

}
