import React, { useEffect, useState } from 'react';

import { CarrinhoRodapeProps } from './interfaces/Carrinho.interface';

export const Carrinho: React.FC<CarrinhoRodapeProps> = ({
  itensSelecionados,
  onClick,
}) => {
  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
    const calcularValorTotal = () => {
      let total = 0;
      for (const itemSelecionado of itensSelecionados) {
        total += itemSelecionado.valor * itemSelecionado.quantidade;
      }

      setValorTotal(total);
    };

    calcularValorTotal();
  }, [itensSelecionados]);

  return (
    <div className='fixed bottom-0 left-0 right-0 flex items-center justify-center bg-gray-100 p-4'>
      <div className='flex items-center'>
        <div className='mr-2'>Total: R${valorTotal.toFixed(2)}</div>
        <button
          className='rounded bg-gray-200 px-2 py-1 text-gray-700'
          onClick={onClick}
        >
          Abrir Carrinho
        </button>
      </div>
    </div>
  );
};

export default Carrinho;
