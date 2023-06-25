import { CardapioItem } from "@/components/card/interfaces/CardapioCartao.interface";

export interface Pedido {
  id: string;
  numero: string;
  items: CardapioItem[];
  status: 1 | 2 | 3 | 4;
  instrucoesEspeciais: string;
}