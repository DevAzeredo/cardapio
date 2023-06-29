import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CardapioCartaoDetalhesProps } from './interfaces/CardapioCartao.interface';

export const CardapioCartaoDetalhes: React.FC<CardapioCartaoDetalhesProps> = ({
  item,
  observacoes
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='flex flex-col border p-4 flex-grow'>
      <div className="flex mb-4 max-w-md">
        <div className="mr-4">
          <img src={item.imagem} alt={item.nome} className="w-50 h-40 object-cover rounded-md" />
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <div className="mb-auto">
            <h3 className="text-lg font-semibold">{item.nome}</h3>
            <p className="text-sm break-words md:max-h-32 w-48">
              {item.descricao}
            </p>
          </div>
        </div>
      </div>
      <div className="container instrucao" style={{ maxWidth: '20rem' }}>
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
        <p className="text-sm break-words" style={{ maxHeight: '5rem', maxWidth: '20rem' }}>
          o hamburguer eu quero sem batata palha, o cachorro-quente eu quero com muita pimenta bem ardida tendeu? eu quero com muita pimenta bem
        </p>
      </div>
    </div>

  );
};
