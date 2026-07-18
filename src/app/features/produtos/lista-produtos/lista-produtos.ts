import { Component } from '@angular/core';
import { Produto } from '../produto/produto';
import { signal } from '@angular/core'; //!importe do signal na pasta lista-produto.ts
import { computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { effect } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe, UpperCasePipe],
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
    this.produtoSelecionado.set(nome);
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
  )});
  //!funçao que substitui a lista atual usando o metodo set()
  substituirProdutos(){
    this.produtos.set([
      { nome:'Teclado', preco: 50 },
      { nome: 'Mouse', preco: 15 },
      { nome: 'Monitor', preco: 500 },
      { nome: 'Desktop', preco: 1500 },
      { nome: 'Headset', preco: 30},
    ]);
  }
  //!metodo para monitorar alteraçoes em tempo real usando metodo effect.
  constructor() {
    effect(() =>{
      console.log('Lista de Produtos Alterados: ', this.produtos());
    });
     effect(() =>{
      console.log('Valor atualizado: ', this.valorTotal());
     });
      effect(() =>{
        if(typeof document !== 'undefined'){
          document.title = `(${this.totalProdutos()})- Loja`;
        }
      });
    }
    produtoSelecionado = signal <string | null> (null);
}
