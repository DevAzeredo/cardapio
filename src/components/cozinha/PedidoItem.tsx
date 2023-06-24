import { Order } from '@/components/cozinha/interfaces/Order.interface';
import React from 'react';

interface PedidoItemProps {
  order: Order;
  abrirDetalhesPedido: (order: any) => void;
  moverParaProximoStatus: (orderId: String) => void;
}

const PedidoItem: React.FC<PedidoItemProps> = ({
  order,
  abrirDetalhesPedido,
  moverParaProximoStatus,
}) => {
  let statusText: string;
  if (order.status === 1) {
    statusText = 'Pendente';
  } else if (order.status === 2) {
    statusText = 'Em Preparo';
  } else if (order.status === 3) {
    statusText = 'Pronto';
  } else {
    statusText = 'Enviado';
  }
  return (
    <li key={order.id} className="border p-2 mb-2 flex flex-col">
      <div>
        <p className="font-semibold">{order.number}</p>
        <p>Itens: {order.items.map((item) => item.nome).join(', ')}</p>
        {order.specialInstructions && (
          <div className="flex items-center mt-2">
            <svg
              className="w-4 h-4 text-red-500 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-6a2 2 0 110-4 2 2 0 010 4zm0-3a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-red-500">Instruções Especiais</p>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="bg-blue-500 mt-2 hover:bg-blue-600 text-white font-semibold py-3 px-2 rounded mb-2"
          onClick={() => abrirDetalhesPedido(order)}
        >
          Detalhes
        </button>
        <button
          className="bg-blue-500 hover:bg-green-600 text-white font-semibold py-3 px-2 rounded"
          onClick={() => moverParaProximoStatus(order.id)}
        >
          {statusText}
        </button>
      </div>
    </li>
  );
};

export default PedidoItem;
