import { CardapioCartaoDetalhes } from '@/components/card/CardapioDetalhesCartao';
import { Order } from '@/components/cozinha/interfaces/Order.interface';
import React from 'react';

interface DetalhesPedidoProps {
  selectedOrder: Order;
  fecharDetalhesPedido: () => void;
}

const getStatusText = (status: Order['status']): string => {
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

const DetalhesPedido: React.FC<DetalhesPedidoProps> = ({
  selectedOrder,
  fecharDetalhesPedido,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 max-w-md mx-auto rounded">
        <div className="flex flex-col h-64 w-96 overflow-y-scroll">
          {selectedOrder.items.map((item, index) => (
            <div key={item.id} className="mb-2 w-full">
              <div className="h-50">
                <CardapioCartaoDetalhes
                  key={item.id}
                  item={item}
                  observacoes={selectedOrder.specialInstructions}
                />
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-lg font-semibold mb-2">Detalhes do Pedido</h3>
        <p className="mb-2">
          <span className="font-semibold">Número:</span> {selectedOrder.number}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Status: </span> {getStatusText(selectedOrder.status)}
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
  );
};

export default DetalhesPedido;
