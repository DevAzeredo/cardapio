export interface CardapioItem {
  id: number;
  nome: string;
  descricao: string;
  valor: number;
  imagem: string;
}

export interface CardapioCartaoProps {
  item: CardapioItem;
  quantidade: number;
  onIncrementar: () => void;
  onDecrementar: () => void;
}