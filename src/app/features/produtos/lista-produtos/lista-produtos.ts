import { Component } from '@angular/core';
import { Produto } from '../produto/produto';
import { signal } from '@angular/core'; //!importe do signal na pasta lista-produto.ts
import { computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
//!Lista com dados - Array  
  produtos = signal([
    {nome:'Fone Gamer', preco: 170.90},
    {nome:'Teclado Gamer', preco: 275.90},
    {nome:'Monitor Gamer', preco: 1499.99},
    {nome:'Mouse Gamer', preco: 99.90}
  ]);
  //!funçao para exibir produtos selecionados pelo usuario no console
  exibirProduto(nome: string){
    console.log('Produto Selecionado: ', nome);
  }
  adicionarProduto(){
    //!funçao que adiciona produto usando metodo update
    this.produtos.update(listaAtual => [
      ...listaAtual,
      {nome:'Playstation 5', preco: 3000},
    ]); 
  }
  //!funçao que contabiliza a quantidade de itens na lista 
  totalProdutos = computed (()=>this.produtos().length);
  //!funçao que calcule o valor total de produtos 
  valorTotal = computed(() =>
  {return this.produtos().reduce((total, item) =>
  total + item.preco,0
  )}
  );
}
