import React from 'react';

import { CardapioCartaoDetalhes } from '@/components/card/CardapioDetalhesCartao';
import { Pedido } from '@/components/cozinha/interfaces/Pedido.interface';

interface DetalhesPedidoProps {
  pedidoSelecionado: Pedido;
  fecharDetalhesPedido: () => void;
}

const getStatusText = (status: Pedido['status']): string => {
  switch (status) {
    case 1:
      return 'Pendente';
    case 2:
      return 'Em preparo';
    case 3:
      return 'Pronto';
    default:
      return 'Enviado';
  }
};
// Método para mapear os itens do pedido
const renderItems = (pedidoSelecionado: Pedido) => {
  return pedidoSelecionado.items.map((item) => (
    <div key={item.id} className='mb-2 w-full'>
      <div className='h-50'>
        <CardapioCartaoDetalhes
          key={item.id}
          item={item}
          observacoes={pedidoSelecionado.instrucoesEspeciais}
        />
      </div>
    </div>
  ));
};

const DetalhesPedido: React.FC<DetalhesPedidoProps> = ({
  pedidoSelecionado,
  fecharDetalhesPedido,
}) => {
  return (
    <div className='bg-blur fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='mx-auto max-w-md rounded bg-white p-8'>
        <div className='flex h-64 w-96 flex-col overflow-y-scroll'>
          {renderItems(pedidoSelecionado)}
        </div>
        <div className='ml-4'>
          <h3 className='mb-2 text-lg font-semibold'>Detalhes do Pedido</h3>
          <p className='mb-2'>
            <span className='font-semibold'>Número:</span>{' '}
            {pedidoSelecionado.numero}
          </p>
          <p className='mb-2'>
            <span className='font-semibold'>Status: </span>{' '}
            {getStatusText(pedidoSelecionado.status)}
          </p>
          <div className='mt-4'>
            <button
              className='rounded bg-red-500 px-3 py-2 font-semibold text-white hover:bg-red-600'
              onClick={fecharDetalhesPedido}
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalhesPedido;
