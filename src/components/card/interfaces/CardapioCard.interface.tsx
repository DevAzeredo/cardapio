export interface CardapioItem {
    id: number;
    nome: string;
    descricao: string;
    valor: number;
    imagem: string;
  }
  
  export interface CardapioCardProps {
    item: CardapioItem;
    quantidade: number;
    onIncrementar: () => void;
    onDecrementar: () => void;
  }