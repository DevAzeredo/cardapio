import React, { useEffect, useState } from 'react';
import { CarrinhoRodapeProps } from './interfaces/Carrinho.interface';

export const Carrinho: React.FC<CarrinhoRodapeProps> = ({ itensSelecionados, onClick }) => {
    const [valorTotal, setValorTotal] = useState(0);
    const [botaoTexto, setBotaoTexto] = useState('Abrir Carrinho');

    useEffect(() => {
        calcularValorTotal();
    }, [itensSelecionados]);

    const calcularValorTotal = () => {
        let total = 0;

        for (const itemSelecionado of itensSelecionados) {
            total += itemSelecionado.valor * itemSelecionado.quantidade;
        }

        setValorTotal(total);
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center bg-gray-100 p-4">
            <div className="flex items-center">
                <div className="mr-2">Total: R${valorTotal.toFixed(2)}</div>
                <button className="bg-gray-200 text-gray-700 py-1 px-2 rounded" onClick={onClick}>
                    {botaoTexto}
                </button>
            </div>
        </div>
    );
};

export default Carrinho;
