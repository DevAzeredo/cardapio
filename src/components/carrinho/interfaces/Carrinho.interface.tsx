export interface ItemSelecionado {
  id: number;
  valor: number;
  quantidade: number;
}

export interface CarrinhoRodapeProps {
  itensSelecionados: ItemSelecionado[];
  onClick: () => void;
}
