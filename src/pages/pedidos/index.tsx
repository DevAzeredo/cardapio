import { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { Pedido } from '@/components/cozinha/interfaces/Pedido.interface';
import PedidoItem from '@/components/cozinha/PedidoItem';
import DetalhesPedido from '@/components/cozinha/DetalhesPedido';
import Link from 'next/link';

const VisaoGeralPedidos = () => {
  const [pedidoSelecionado, setPedidoSelecionado] = useState<Pedido | null>(null);
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
  const abrirDetalhesPedido = (pedido: Pedido) => {
    setPedidoSelecionado(pedido);
    setMostrarDetalhes(true);
  };
  const fecharDetalhesPedido = () => {
    setMostrarDetalhes(false);
  };

  const [orders, setOrders] = useState<Pedido[]>([
    {
      id: '1',
      numero: 'ORD001',
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
      instrucoesEspeciais: 'Sem cebola',
    },
    {
      id: '2',
      numero: 'ORD002',
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
      instrucoesEspeciais: 'Sem cebola',
    },
    {
      id: '3',
      numero: 'ORD003',
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
      instrucoesEspeciais: 'Sem cebola',
    },
  ]);
  const [gorjeta, setGorjeta] = useState<number>(0);
  const [total, setTotal] = useState<number>(() => {
    const initialValue = 0;
    const totalValor = orders.reduce((accumulator, order) => {
      return accumulator + order.items.reduce((itemAccumulator, item) => {
        return itemAccumulator + item.valor;
      }, 0);
    }, initialValue);
    return totalValor;
  });

  const calcularTotal = () => {
    const gorjetaValor = total * (gorjeta / 100);
    return total + gorjetaValor;
  };

  const realizarPagamento = () => {
    // Lógica para fazer o request ao servidor e obter o QR Code e os dados da transação
  };


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto p-4 flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-4">Pedidos</h2>

        {orders.length > 0 ? (
          <div>
            <div className="border rounded p-8 w-96">
              <ul>
                {orders.map((order) => (
                  <PedidoItem
                    key={order.id}
                    pedido={order}
                    abrirDetalhesPedido={abrirDetalhesPedido}
                    mostrarValor={true}
                  />
                ))}
              </ul>
              <div className="flex justify-center">
                <Link
                  className="mt-2 bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded mb-4"
                  id="cardapio"
                  href={'/cardapio'}
                >
                  Novo Pedido
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <p>Nenhum pedido anterior encontrado.</p>
        )}

        <div className="flex items-center flex-col">
          <div><span>Gorjeta</span></div>
          <div className="flex justify-center w-72 mx-auto">
            <input
              type="range"
              min={0}
              max={100}
              value={gorjeta}
              onChange={(e) => setGorjeta(Number(e.target.value))}
              className="w-full ml-6"
            />
            <div className="w-1/4">
              <span className="text-gray-600">{gorjeta}%</span>
            </div>
          </div>

        </div>
        <div className='flex justify-center'>
          <div className="w-1/2">
            <input
              type="text"
              value={`R$ ${calcularTotal().toFixed(2)}`}
              className="py-2 px-2 border border-gray-400 rounded w-full"
              disabled
            />
          </div>
          <button
            className="font-bold py-2 px-4 rounded ml-2"
            onClick={realizarPagamento}
          >
            Pagar
          </button>
        </div>
        {mostrarDetalhes && pedidoSelecionado && (
          <DetalhesPedido pedidoSelecionado={pedidoSelecionado} fecharDetalhesPedido={fecharDetalhesPedido} />
        )}
      </div>
    </div>
  );
};

export default VisaoGeralPedidos;
