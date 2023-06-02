export interface ItemSelecionado {
  id: number;
  valor: number;
  quantidade: number;
}

export interface CartFooterProps {
  itensSelecionados: ItemSelecionado[];
  onClick: () => void;
}