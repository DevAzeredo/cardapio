import Image from 'next/image';
import React from 'react';

import { CardapioCartaoDetalhesProps } from './interfaces/CardapioCartao.interface';
export const CardapioCartaoDetalhes: React.FC<CardapioCartaoDetalhesProps> = ({
  item,
}) => {
  return (
    <div className='flex flex-grow flex-col border p-4'>
      <div className='mb-4 flex max-w-md'>
        <div className='mr-4'>
          <Image
            src={item.imagem}
            alt={item.nome}
            className='w-50 h-40 rounded-md object-cover'
          />
        </div>
        <div className='flex flex-grow flex-col justify-between'>
          <div className='mb-auto'>
            <h3 className='text-lg font-semibold'>{item.nome}</h3>
            <p className='w-48 break-words text-sm md:max-h-32'>
              {item.descricao}
            </p>
          </div>
        </div>
      </div>
      <div className='instrucao container' style={{ maxWidth: '20rem' }}>
        <div className='mt-2 flex items-center'>
          <svg
            className='mr-1 h-4 w-4 text-red-500'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm0-6a2 2 0 110-4 2 2 0 010 4zm0-3a1 1 0 100-2 1 1 0 000 2z'
              clipRule='evenodd'
            />
          </svg>
          <p className='text-red-500'>Instruções Especiais</p>
        </div>
        <p
          className='break-words text-sm'
          style={{ maxHeight: '5rem', maxWidth: '20rem' }}
        >
          o hamburguer eu quero sem batata palha, o cachorro-quente eu quero com
          muita pimenta bem ardida tendeu? eu quero com muita pimenta bem
        </p>
      </div>
    </div>
  );
};
