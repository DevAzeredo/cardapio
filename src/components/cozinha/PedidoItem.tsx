import React from 'react';

import { Pedido } from '@/components/cozinha/interfaces/Pedido.interface';

interface PedidoItemProps {
  pedido: Pedido;
  abrirDetalhesPedido: (order: Pedido) => void;
  mostrarValor?: boolean;
  moverParaProximoStatus?: (orderId: string) => void;
}

const PedidoItem: React.FC<PedidoItemProps> = ({
  pedido,
  abrirDetalhesPedido,
  moverParaProximoStatus,
  mostrarValor,
}) => {
  let statusText: string;
  if (pedido.status === 1) {
    statusText = 'Preparar';
  } else if (pedido.status === 2) {
    statusText = 'Concluir';
  } else if (pedido.status === 3) {
    statusText = 'Enviar';
  } else {
    statusText = 'Enviado';
  }
  return (
    <li key={pedido.id} className='mb-2 flex flex-col border p-2'>
      <div>
        <p>{pedido.numero}</p>
        <p>Itens: {pedido.items.map((item) => item.nome).join(', ')}</p>
        {pedido.instrucoesEspeciais && (
          <div className='mt-2 flex items-center'>
            <svg
              className='mr-1 h-4 w-4 text-red-500'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm0-6a2 2 0 110-4 2 2 0 010 4zm0-3a1 1 0 100-2 1 1 0 000 2z'
                clipRule='evenodd'
              />
            </svg>
            <p className='text-red-500'>Instruções Especiais</p>
          </div>
        )}
      </div>
      <div className='flex items-center'>
        <button
          className='mb-2 mt-2 rounded px-2 py-1'
          onClick={() => abrirDetalhesPedido(pedido)}
        >
          Detalhes
        </button>
        {moverParaProximoStatus && (
          <button
            className=' ml-2 rounded px-2 py-1 font-semibold'
            onClick={() => moverParaProximoStatus(pedido.id)}
          >
            {statusText}
          </button>
        )}
        {mostrarValor && (
          <span className='ml-auto text-lg font-semibold'>
            R$
            {pedido.items
              .reduce((total, item) => total + item.valor, 0)
              .toFixed(2)}
          </span>
        )}
      </div>
    </li>
  );
};

export default PedidoItem;
