import { CardapioItem } from "@/components/card/interfaces/CardapioCartao.interface";

export interface Order {
  id: string;
  number: string;
  items: CardapioItem[];
  status: 1 | 2 | 3;
  specialInstructions: string;
}