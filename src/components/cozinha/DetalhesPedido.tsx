import { CardapioCartaoDetalhes } from '@/components/card/CardapioDetalhesCartao';
import { Pedido } from '@/components/cozinha/interfaces/Pedido.interface';
import React from 'react';

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
    <div key={item.id} className="mb-2 w-full">
      <div className="h-50">
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 bg-blur">
      <div className="bg-white p-8 max-w-md mx-auto rounded">
        <div className="flex flex-col h-64 w-96 overflow-y-scroll">
          {renderItems(pedidoSelecionado)}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold mb-2">Detalhes do Pedido</h3>
          <p className="mb-2">
            <span className="font-semibold">Número:</span> {pedidoSelecionado.numero}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Status: </span> {getStatusText(pedidoSelecionado.status)}
          </p>
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
    </div>
  );
};

export default DetalhesPedido;
