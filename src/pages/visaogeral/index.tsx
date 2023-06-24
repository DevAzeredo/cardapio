import { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';

const VisaoGeralPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const valorTotal = pedidos.reduce((total, pedido) => total + pedido.valor, 0);
  const valorEquipe = valorTotal * 0.1;
  const [valorSelecionado, setValorSelecionado] = useState(0);
  const valorEmReais = ((valorTotal * valorSelecionado) / 100).toFixed(2);

  const realizarNovoPedido = () => {
    const novoPedido = { id: pedidos.length + 1, valor: 20.0 };
    setPedidos([...pedidos, novoPedido]);
  };

  const realizarPagamento = () => {
    // Lógica para fazer o request ao servidor e obter o QR Code e os dados da transação
  };

  const handleValorChange = (value) => {
    const formattedValue = value ? parseFloat(value.replace(',', '.')) : 0;
    const percent = (formattedValue / valorTotal) * 100;
    setValorSelecionado(percent);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto p-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Visão Geral de Pedidos</h2>

        {pedidos.length > 0 ? (
          <div>
            <h3 className="text-xl font-bold mb-2">Pedidos Anteriores:</h3>
            <ul>
              {pedidos.map((pedido) => (
                <li key={pedido.id} className="mb-1">
                  Pedido ID: {pedido.id} - Valor: R$ {pedido.valor.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Nenhum pedido anterior encontrado.</p>
        )}

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={realizarNovoPedido}
        >
          Realizar Novo Pedido
        </button>

        <div className="flex items-center">
          <input
            type="range"
            min={0}
            max={100}
            value={valorSelecionado}
            onChange={(e) => setValorSelecionado(Number(e.target.value))}
            className="w-1/2"
          />
          <div className="w-1/4">
            <span className="text-gray-600">{valorSelecionado.toFixed(2)}%</span>
          </div>
          <div className="w-1/4">
            <CurrencyInput
              prefix="R$"
              allowDecimals={true}
              decimalSeparator=","
              groupSeparator="."
              value={valorEmReais}
              onValueChange={handleValorChange}
              className="py-2 px-2 border border-gray-400 rounded w-full"
            />
          </div>
        </div>

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={realizarPagamento}
        >
          Realizar Pagamento
        </button>
      </div>
    </div>
  );
};

export default VisaoGeralPedidos;