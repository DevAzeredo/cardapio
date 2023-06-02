import React, { useState } from 'react';
import { ItemSelecionado } from './interfaces/Cart.interface';
import { CardapioItem } from '../card/interfaces/CardapioCard.interface';
import { CardapioCard } from '../card/CardapioCard';

const CartPage: React.FC<{
  itensSelecionados: ItemSelecionado[];
  cardapio: CardapioItem[];
  handleIncrementar: (itemId: number, AdicionadoValor: number) => void;
  handleDecrementar: (itemId: number) => void;
  setExibir: (value: React.SetStateAction<boolean>) => void
}> = ({ itensSelecionados, cardapio, handleIncrementar, handleDecrementar, setExibir }) => {

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


  const handleConfirmarPedido = () => {
    setExibir(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-4 rounded flex flex-col items-center">
        {getItensSelecionados(itensSelecionados, cardapio).map((itemSelecionado) => (
          <CardapioCard
            key={itemSelecionado.item?.id}
            item={itemSelecionado.item!}
            quantidade={itemSelecionado.quantidade}
            onIncrementar={() => handleIncrementar(itemSelecionado.id, itemSelecionado.valor)}
            onDecrementar={() => handleDecrementar(itemSelecionado.id)}
          />
        ))}
        <div className="mt-4 font-bold">Total: R${getValorTotal(itensSelecionados)}</div>
        <button className="bg-gray-200 text-gray-700 py-1 px-2 rounded mt-4" onClick={handleConfirmarPedido}>
          Confirmar Pedido
        </button>
      </div>
    </div>
  );
};

export default CartPage;
