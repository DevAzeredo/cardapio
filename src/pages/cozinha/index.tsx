import DetalhesPedido from '@/components/cozinha/DetalhesPedido';
import PedidoItem from '@/components/cozinha/PedidoItem';
import { Pedido } from '@/components/cozinha/interfaces/Pedido.interface';
import React, { useState } from 'react';



const PedidoListagem: React.FC = () => {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
  const abrirDetalhesPedido = (pedido: Pedido) => {
    setPedidoSelecionado(pedido);
    setMostrarDetalhes(true);
  };
  const fecharDetalhesPedido = () => {
    setMostrarDetalhes(false);
  };


  const [pedidos, setPedidos] = useState<Pedido[]>([
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

  const [pedidoSelecionado, setPedidoSelecionado] = useState<Pedido | null>(null);

  const moverParaEmPreparo = (orderId: String) => {
    setPedidos((prevPedidos) =>
      prevPedidos.map((pedido) =>
        pedido.id === orderId ? { ...pedido, status: 2 } : pedido
      )
    );
  };

  const moverParaPronto = (orderId: String) => {
    setPedidos((prevPedidos) =>
      prevPedidos.map((pedido) =>
        pedido.id === orderId ? { ...pedido, status: 3 } : pedido
      )
    );
  };

  const moverParaEnviado = (orderId: String) => {
    setPedidos((prevPedidos) =>
      prevPedidos.map((pedido) =>
        pedido.id === orderId ? { ...pedido, status: 4 } : pedido
      )
    );
  };

  const rowPendente = pedidos.filter((pedido) => pedido.status === 1);
  const rowEmPreparo = pedidos.filter((pedido) => pedido.status === 2);
  const rowPronto = pedidos.filter((pedido) => pedido.status === 3);
  const rowEnviado = pedidos.filter((pedido) => pedido.status === 4);



  return (
    <div className="flex justify-center mt-4">
      <div className="max-w-screen-lg w-full">
        <div className="border rounded p-8">
          <h3 className="text-lg font-semibold mb-2">Pendente</h3>
          <ul>
            {rowPendente.map((pedido) => (
              <PedidoItem
                key={pedido.id}
                pedido={pedido}
                abrirDetalhesPedido={abrirDetalhesPedido}
                moverParaProximoStatus={moverParaEmPreparo}
              />
            ))}
          </ul>
        </div>

        <div className="border rounded p-8">
          <h3 className="text-lg font-semibold mb-2">Em Preparo</h3>
          <ul>
            {rowEmPreparo.map((pedido) => (
              <PedidoItem
                key={pedido.id}
                pedido={pedido}
                abrirDetalhesPedido={abrirDetalhesPedido}
                moverParaProximoStatus={moverParaPronto}
              />
            ))}
          </ul>
        </div>

        <div className="border rounded p-8">
          <h3 className="text-lg font-semibold mb-2">Pronto</h3>
          <ul>
            {rowPronto.map((pedido) => (
              <PedidoItem
                key={pedido.id}
                pedido={pedido}
                abrirDetalhesPedido={abrirDetalhesPedido}
                moverParaProximoStatus={moverParaEnviado}
              />
            ))}
          </ul>
        </div>

        <div className="border rounded p-8 opacity-50">
          <h3 className="text-lg font-semibold mb-2">Pedidos Enviados</h3>
          <ul>
            {rowEnviado.map((pedido) => (
              <PedidoItem
                key={pedido.id}
                pedido={pedido}
                abrirDetalhesPedido={abrirDetalhesPedido}
                moverParaProximoStatus={moverParaEnviado}
                mostrarValor={false}
              />
            ))}
          </ul>
        </div>
      </div>

      {pedidoSelecionado && mostrarDetalhes && (
        <DetalhesPedido pedidoSelecionado={pedidoSelecionado} fecharDetalhesPedido={fecharDetalhesPedido} />
      )}
    </div>
  );
};

export default PedidoListagem;
