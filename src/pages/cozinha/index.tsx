import DetalhesPedido from '@/components/cozinha/DetalhesPedido';
import PedidoItem from '@/components/cozinha/PedidoItem';
import { Order } from '@/components/cozinha/interfaces/Order.interface';
import React, { useState } from 'react';



const PedidoListagem: React.FC = () => {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
  const abrirDetalhesPedido = (order: Order) => {
    setSelectedOrder(order);
    setMostrarDetalhes(true);
  };
  const fecharDetalhesPedido = () => {
    setMostrarDetalhes(false);
  };


  const [orders, setOrders] = useState<Order[]>([
    {
      id: '1',
      number: 'ORD001',
      items: [
        {
          id: 1,
          nome: 'Item 1',
          valor: 10.99,
          descricao: "o mai god",
          imagem: "https://www.estadao.com.br/resizer/YNqjimCryDR09ryOpKIAZbPFCv4=/500x600/filters:format(jpg):quality(80):focal(-5x-5:5x5)/cloudfront-us-east-1.images.arcpublishing.com/estadao/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg"
        },
        {
          id: 2,
          nome: 'Item 2',
          valor: 10.99,
          descricao: "o mai god",
          imagem: "https://www.estadao.com.br/resizer/YNqjimCryDR09ryOpKIAZbPFCv4=/500x600/filters:format(jpg):quality(80):focal(-5x-5:5x5)/cloudfront-us-east-1.images.arcpublishing.com/estadao/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg"
        },
      ],
      status: 1,
      specialInstructions: 'Sem cebola',
    },
    {
      id: '2',
      number: 'ORD002',
      items: [
        {
          id: 1,
          nome: 'Item 1',
          valor: 18.99,
          descricao: "o hamburguer eu quero sem batata palha, o cachorro-quente eu quero com muita pimenta bem ardida tendeu? eu quero com muita pimenta bem",
          imagem: "https://www.estadao.com.br/resizer/YNqjimCryDR09ryOpKIAZbPFCv4=/500x600/filters:format(jpg):quality(80):focal(-5x-5:5x5)/cloudfront-us-east-1.images.arcpublishing.com/estadao/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg"
        },
        {
          id: 2,
          nome: 'Item 2',
          valor: 10.99,
          descricao: "o mai godo mai godo mai godo mai godo mai godo mai godo mai godo mai godo mai godo mai godo mai godo mai godo mai godo mai godo mai  mai godo mai godo mai godo mai",
          imagem: "https://www.estadao.com.br/resizer/YNqjimCryDR09ryOpKIAZbPFCv4=/500x600/filters:format(jpg):quality(80):focal(-5x-5:5x5)/cloudfront-us-east-1.images.arcpublishing.com/estadao/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg"
        },
      ],
      status: 1,
      specialInstructions: 'Sem cebola',
    },
    {
      id: '3',
      number: 'ORD003',
      items: [
        {
          id: 1,
          nome: 'Item 1',
          valor: 10.99,
          descricao: "o hamburguer eu quero sem batata palha, o cachorro-quente eu quero com muita pimenta bem ardida tendeu? eu quero com muita",
          imagem: "https://www.estadao.com.br/resizer/YNqjimCryDR09ryOpKIAZbPFCv4=/500x600/filters:format(jpg):quality(80):focal(-5x-5:5x5)/cloudfront-us-east-1.images.arcpublishing.com/estadao/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg"
        },
        {
          id: 2,
          nome: 'Item 2',
          valor: 10.99,
          descricao: "o mai god",
          imagem: "https://www.estadao.com.br/resizer/YNqjimCryDR09ryOpKIAZbPFCv4=/500x600/filters:format(jpg):quality(80):focal(-5x-5:5x5)/cloudfront-us-east-1.images.arcpublishing.com/estadao/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg"
        },
      ],
      status: 1,
      specialInstructions: 'Sem cebola',
    },
  ]);

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [sentOrders, setSentOrders] = useState<Order[]>([]);

  const moverParaEmPreparo = (orderId: String) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: 2 } : order
      )
    );
  };

  const moverParaPronto = (orderId: String) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: 3 } : order
      )
    );
  };

  const moverParaEnviado = (orderId: String) => {
    const orderToSend = orders.find((order) => order.id === orderId);
    if (orderToSend) {
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
      setSentOrders((prevSentOrders) => [...prevSentOrders, orderToSend]);
    }
  };

  const rowPendente = orders.filter((order) => order.status === 1);
  const rowEmPreparo = orders.filter((order) => order.status === 2);
  const rowPronto = orders.filter((order) => order.status === 3);

  return (
    <div className="flex justify-center mt-4">
      <div className="max-w-screen-lg w-full">
        <div className="border rounded p-8">
          <h3 className="text-lg font-semibold mb-2">Pendente</h3>
          <ul>
            {rowPendente.map((order) => (
              <PedidoItem
                key={order.id}
                order={order}
                abrirDetalhesPedido={abrirDetalhesPedido}
                moverParaProximoStatus={moverParaEmPreparo}
              />
            ))}
          </ul>
        </div>

        <div className="border rounded p-8">
          <h3 className="text-lg font-semibold mb-2">Em Preparo</h3>
          <ul>
            {rowEmPreparo.map((order) => (
              <PedidoItem
                key={order.id}
                order={order}
                abrirDetalhesPedido={abrirDetalhesPedido}
                moverParaProximoStatus={moverParaPronto}
              />
            ))}
          </ul>
        </div>

        <div className="border rounded p-8">
          <h3 className="text-lg font-semibold mb-2">Pronto</h3>
          <ul>
            {rowPronto.map((order) => (
              <PedidoItem
                key={order.id}
                order={order}
                abrirDetalhesPedido={abrirDetalhesPedido}
                moverParaProximoStatus={moverParaEnviado}
              />
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

      {selectedOrder && mostrarDetalhes && (
        <DetalhesPedido selectedOrder={selectedOrder} fecharDetalhesPedido={fecharDetalhesPedido} />
      )}
    </div>
  );
};

export default PedidoListagem;
