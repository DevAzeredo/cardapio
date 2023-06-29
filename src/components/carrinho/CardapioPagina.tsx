import React, { useState } from 'react';
import { ItemSelecionado } from './interfaces/Carrinho.interface';
import { CardapioItem } from '../card/interfaces/CardapioCartao.interface';
import { CardapioCartao } from '../card/CardapioCartao';
import Link from 'next/link';

const CartPage: React.FC<{
  itensSelecionados: ItemSelecionado[];
  cardapio: CardapioItem[];
  Incrementar: (itemId: number, AdicionadoValor: number) => void;
  Decrementar: (itemId: number) => void;
  setExibir: (value: React.SetStateAction<boolean>) => void
}> = ({ itensSelecionados, cardapio, Incrementar, Decrementar, setExibir }) => {

  const getItensSelecionados = (itensSelecionados: ItemSelecionado[], cardapio: CardapioItem[]) => {
    return itensSelecionados.map((itemSelecionado) => {
      const item = cardapio.find((cardapioItem) => cardapioItem.id === itemSelecionado.id);
      return { ...itemSelecionado, item };
    });
  };

  const getValorTotal = (itensSelecionados: ItemSelecionado[]) => {
    let total = 0;
    for (const itemSelecionado of itensSelecionados) {
      total += itemSelecionado.valor * itemSelecionado.quantidade;
    }
    return total.toFixed(2);
  };


  const ConfirmarPedido = () => {
    setExibir(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 bg-blur">
      <div className="bg-white p-4 rounded flex flex-col items-center">
        <div className="flex flex-col h-96 w-96 overflow-y-scroll">
          {getItensSelecionados(itensSelecionados, cardapio).map((itemSelecionado) => (
            <CardapioCartao
              key={itemSelecionado.item?.id}
              item={itemSelecionado.item!}
              quantidade={itemSelecionado.quantidade}
              onIncrementar={() => Incrementar(itemSelecionado.id, itemSelecionado.valor)}
              onDecrementar={() => Decrementar(itemSelecionado.id)}
            />
          ))}
        </div>
        <div className="mt-4 font-bold">Total: R${getValorTotal(itensSelecionados)}</div>
        <Link className="bg-gray-200 text-gray-700 mt-4 py-1 px-2 rounded mb-4" id="pedidos" href={'/pedidos'}>
          Confirmar
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
