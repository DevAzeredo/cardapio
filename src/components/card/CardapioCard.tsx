import { CardapioCardProps } from './interfaces/CardapioCard.interface';

export const CardapioCard: React.FC<CardapioCardProps> = ({
  item,
  quantidade,
  onIncrementar,
  onDecrementar,
}) => {
  return (
    <div className="flex border p-4 mb-4 max-w-md">
      <div className="mr-4">
        <img src={item.imagem} alt={item.nome} className="w-50 h-40 object-cover rounded-md" />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <div className="mb-auto">
          <h3 className="text-lg font-semibold">{item.nome}</h3>
          <p className="text-sm break-words" style={{ maxHeight: '5rem' }}>
            {item.descricao}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold mr-2">R${item.valor.toFixed(2)}</span>
          {quantidade > 0 ? (
            <div className="flex items-center">
              <button
                className="bg-gray-200 text-gray-700 py-1 px-2 rounded-l"
                onClick={onDecrementar}
              >
                -
              </button>
              <span className="bg-gray-200 text-gray-700 py-1 px-2">{quantidade}</span>
              <button
                className="bg-gray-200 text-gray-700 py-1 px-2 rounded-r"
                onClick={onIncrementar}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="bg-gray-200 text-gray-700 py-1 px-2 rounded"
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