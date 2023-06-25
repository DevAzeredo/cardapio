import { CardapioCartaoDetalhes } from '@/components/card/CardapioDetalhesCartao';
import DetalhesPedido from '@/components/cozinha/DetalhesPedido';
import PedidoItem from '@/components/cozinha/PedidoItem';
import { Pedido } from '@/components/cozinha/interfaces/Pedido.interface';
import { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';

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
  const realizarPagamento = () => {
    // Lógica para fazer o request ao servidor e obter o QR Code e os dados da transação
  };


  function realizarNovoPedido(): void {
    throw new Error('Function not implemented.');
  }

  function setValorSelecionado(arg0: number): void {
    throw new Error('Function not implemented.');
  }

  function handleValorChange(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto p-4 flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-4">Visão Geral de Pedidos</h2>

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
              <button
                className="mx-auto flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                onClick={realizarNovoPedido}
              >
                Realizar Novo Pedido
              </button>
            </div>
          </div>
        ) : (
          <p>Nenhum pedido anterior encontrado.</p>
        )}

        <div className="flex items-center flex-col">
          <div><span>Gorjeta</span></div>
          <div className="flex items-center w-96">
            <input
              type="range"
              min={0}
              max={100}
              value={120}
              onChange={(e) => setValorSelecionado(Number(e.target.value))}
              className="w-full"
            />
            <div className="w-1/4">
              <span className="text-gray-600">{102}%</span>
            </div>
            <div className="w-1/1 ml-auto">
              <CurrencyInput
                prefix="R$"
                allowDecimals={true}
                decimalSeparator=","
                groupSeparator="."
                value={100}
                onValueChange={handleValorChange}
                className="py-2 px-2 border border-gray-400 rounded w-full"
              />
            </div>
          </div>
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={realizarPagamento}
        >
          Realizar Pagamento
        </button>
      </div>

      {pedidoSelecionado && mostrarDetalhes && (
        <DetalhesPedido pedidoSelecionado={pedidoSelecionado} fecharDetalhesPedido={fecharDetalhesPedido} />
      )}
    </div>
  );
};

export default VisaoGeralPedidos;