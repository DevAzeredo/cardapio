import { CardapioCartaoProps } from './interfaces/CardapioCartao.interface';

export const CardapioCartao: React.FC<CardapioCartaoProps> = ({
  item,
  quantidade,
  onIncrementar,
  onDecrementar,
}) => {
  return (
    <div className='mb-4 flex max-w-md border p-4'>
      <div className='mr-4'>
        <img
          src={item.imagem}
          alt={item.nome}
          className='w-50 h-40 rounded-md object-cover'
        />
      </div>
      <div className='flex flex-grow flex-col justify-between'>
        <div className='mb-auto'>
          <h3 className='text-lg font-semibold'>{item.nome}</h3>
          <p className='break-words text-sm' style={{ maxHeight: '5rem' }}>
            {item.descricao}
          </p>
        </div>
        <div className='flex items-center justify-between'>
          <span className='mr-2 text-lg font-semibold'>
            R${item.valor.toFixed(2)}
          </span>
          {quantidade > 0 ? (
            <div className='flex items-center'>
              <button
                className='rounded-l bg-gray-200 px-2 py-1 text-gray-700'
                onClick={onDecrementar}
              >
                -
              </button>
              <span className='bg-gray-200 px-2 py-1 text-gray-700'>
                {quantidade}
              </span>
              <button
                className='rounded-r bg-gray-200 px-2 py-1 text-gray-700'
                onClick={onIncrementar}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className='rounded bg-gray-200 px-2 py-1 text-gray-700'
              onClick={onIncrementar}
            >
              Adicionar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
