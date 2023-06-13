import React, { useState } from 'react';

interface Order {
  id: number;
  number: string;
  items: string[];
  status: 'pendente' | 'em preparo' | 'pronto';
  specialInstructions?: string;
}

const PedidoListagem: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      number: 'ORD001',
      items: ['Pizza', 'Salada'],
      status: 'pendente',
      specialInstructions: 'Sem cebola',
    },
    {
      id: 2,
      number: 'ORD002',
      items: ['Hambúrguer', 'Batata Frita'],
      status: 'pendente',
      specialInstructions: '',
    },
    {
      id: 3,
      number: 'ORD003',
      items: ['Macarrão', 'Pão de Alho'],
      status: 'pendente',
      specialInstructions: '',
    },
  ]);

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [sentOrders, setSentOrders] = useState<Order[]>([]);

  const abrirDetalhesPedido = (order: Order) => {
    setSelectedOrder(order);
  };

  const fecharDetalhesPedido = () => {
    setSelectedOrder(null);
  };

  const moverParaEmPreparo = (orderId: number) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: 'em preparo' } : order
      )
    );
  };

  const moverParaPronto = (orderId: number) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: 'pronto' } : order
      )
    );
  };

  const moverParaEnviado = (orderId: number) => {
    const orderToSend = orders.find((order) => order.id === orderId);
    if (orderToSend) {
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
      setSentOrders((prevSentOrders) => [...prevSentOrders, orderToSend]);
    }
  };

  const rowPendente = orders.filter((order) => order.status === 'pendente');
  const rowEmPreparo = orders.filter((order) => order.status === 'em preparo');
  const rowPronto = orders.filter((order) => order.status === 'pronto');

  return (
    <div className="flex justify-center mt-4">
      <div className="max-w-screen-lg w-full">
        <div className="border rounded p-8">
          <h3 className="text-lg font-semibold mb-2">Pendente</h3>
          <ul>
            {rowPendente.map((order) => (
              <li key={order.id} className="border p-2 mb-2 flex flex-col">
                <div>
                  <p className="font-semibold">{order.number}</p>
                  <p>Itens: {order.items.join(', ')}</p>
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
                    onClick={() => moverParaEmPreparo(order.id)}
                  >
                    Em Preparo
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border rounded p-8">
          <h3 className="text-lg font-semibold mb-2">Em Preparo</h3>
          <ul>
            {rowEmPreparo.map((order) => (
              <li key={order.id} className="border p-2 mb-2 flex flex-col">
                <div>
                  <p className="font-semibold">{order.number}</p>
                  <p>Itens: {order.items.join(', ')}</p>
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
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-3 rounded"
                    onClick={() => moverParaPronto(order.id)}
                  >
                    Pronto
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border rounded p-8">
          <h3 className="text-lg font-semibold mb-2">Pronto</h3>
          <ul>
            {rowPronto.map((order) => (
              <li key={order.id} className="border p-2 mb-2 flex flex-col">
                <div>
                  <p className="font-semibold">{order.number}</p>
                  <p>Itens: {order.items.join(', ')}</p>
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
                    className="bg-green-500 hover:bg-blue-600 text-white font-semibold py-3 px-2 rounded"
                    onClick={() => moverParaEnviado(order.id)}
                  >
                    Enviar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border rounded p-8 opacity-50">
          <h3 className="text-lg font-semibold mb-2">Pedidos Enviados</h3>
          <ul>
            {sentOrders.map((order) => (
              <li key={order.id} className="border p-2 mb-2 flex flex-col">
                <div>
                  <p className="font-semibold">{order.number}</p>
                  <p>Itens: {order.items.join(', ')}</p>
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
                <div className="flex items-center mt-2 space-x-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-2 rounded mb-2"
                    onClick={() => abrirDetalhesPedido(order)}
                  >
                    Detalhes
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {selectedOrder && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 max-w-md mx-auto rounded">
        <h3 className="text-lg font-semibold mb-2">Detalhes do Pedido</h3>
        <p className="mb-2">
          <span className="font-semibold">Número:</span> {selectedOrder.number}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Itens:</span> {selectedOrder.items.join(', ')}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Status:</span> {selectedOrder.status}
        </p>
        {selectedOrder.specialInstructions && (
          <p className="mb-2">
            <span className="font-semibold">Instruções Especiais:</span>{' '}
            {selectedOrder.specialInstructions}
          </p>
        )}
        <div className="mt-4">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded"
            onClick={fecharDetalhesPedido}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
    
     
      )}
    </div>
  );
};

export default PedidoListagem;
