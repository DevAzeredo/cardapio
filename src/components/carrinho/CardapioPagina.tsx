import Link from 'next/link';
import React from 'react';

import { ItemSelecionado } from './interfaces/Carrinho.interface';
import { CardapioCartao } from '../card/CardapioCartao';
import { CardapioItem } from '../card/interfaces/CardapioCartao.interface';

const CartPage: React.FC<{
  itensSelecionados: ItemSelecionado[];
  cardapio: CardapioItem[];
  Incrementar: (itemId: number, AdicionadoValor: number) => void;
  Decrementar: (itemId: number) => void;
  setExibir: (value: React.SetStateAction<boolean>) => void;
}> = ({ itensSelecionados, cardapio, Incrementar, Decrementar }) => {
  const getItensSelecionados = (
    itensSelecionados: ItemSelecionado[],
    cardapio: CardapioItem[]
  ) => {
    return itensSelecionados.map((itemSelecionado) => {
      const item = cardapio.find(
        (cardapioItem) => cardapioItem.id === itemSelecionado.id
      );
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

  return (
    <div className='bg-blur fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
      <div className='flex flex-col items-center rounded bg-white p-4'>
        <div className='flex h-96 w-96 flex-col overflow-y-scroll'>
          {getItensSelecionados(itensSelecionados, cardapio).map(
            (itemSelecionado) => {
              if (itemSelecionado.item) {
                return (
                  <CardapioCartao
                    key={itemSelecionado.item.id}
                    item={itemSelecionado.item}
                    quantidade={itemSelecionado.quantidade}
                    onIncrementar={() =>
                      Incrementar(itemSelecionado.id, itemSelecionado.valor)
                    }
                    onDecrementar={() => Decrementar(itemSelecionado.id)}
                  />
                );
              }
              return null;
            }
          )}
        </div>
        <div className='mt-4 font-bold'>
          Total: R${getValorTotal(itensSelecionados)}
        </div>
        <Link
          className='mb-4 mt-4 rounded bg-gray-200 px-2 py-1 text-gray-700'
          id='pedidos'
          href='/pedidos'
        >
          Confirmar
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
