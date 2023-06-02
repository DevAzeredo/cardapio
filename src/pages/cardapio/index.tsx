import React from 'react';
import { useState, useEffect } from 'react';
import { ItemSelecionado } from '../../components/carrinho/interfaces/Cart.interface';
import { CardapioCard } from '../../components/card/CardapioCard';
import Carrinho from '../../components/carrinho/CartFooter';
import CartPage from '../../components/carrinho/CartPage';
import { useRouter } from 'next/router';

export default function Page() {
  const [exibirPopup, setExibirPopup] = useState(false);
  const [itensSelecionados, setItensSelecionados] = useState<ItemSelecionado[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  const handleIncrementar = (AdicionadoId: number, AdicionadoValor: number) => {
    const itemSelecionado = itensSelecionados.find((item) => item.id === AdicionadoId);

    if (itemSelecionado) {
      const novoItemSelecionado = { ...itemSelecionado, quantidade: itemSelecionado.quantidade + 1 };
      const novosItensSelecionados = itensSelecionados.map((item) =>
        item.id === AdicionadoId ? novoItemSelecionado : item
      );
      setItensSelecionados(novosItensSelecionados);
    } else {
      const novoItemSelecionado = { id: AdicionadoId, valor: AdicionadoValor, quantidade: 1 };
      setItensSelecionados([...itensSelecionados, novoItemSelecionado]);
    }
  };


  const handleDecrementar = (itemId: number) => {
    const itemSelecionado = itensSelecionados.find((item) => item.id === itemId);

    if (itemSelecionado && itemSelecionado.quantidade > 0) {
      const novoItemSelecionado = { ...itemSelecionado, quantidade: itemSelecionado.quantidade - 1 };
      const novosItensSelecionados = itensSelecionados.map((item) =>
        item.id === itemId ? novoItemSelecionado : item
      );
      setItensSelecionados(novosItensSelecionados);
    }
  };


  const cardapio = [
    {
      id: 1,
      nome: 'Hambúrguer',
      descricao: 'Delicioso hambúrguer artesanal com ingredientes frescos.',
      imagem: 'https://www.estadao.com.br/resizer/dixyOItHmPSgiedCSBL1iIT5lGo=/arc-anglerfish-arc2-prod-estadao/public/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg',
      valor: 5.50,

    },
    {
      id: 2,
      nome: 'Pizza',
      descricao: 'Pizza quentinha e saborosa com diversas opções de sabores.',
      imagem: 'https://www.estadao.com.br/resizer/dixyOItHmPSgiedCSBL1iIT5lGo=/arc-anglerfish-arc2-prod-estadao/public/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg',
      valor: 2.50,
    },
    {
      id: 3,
      nome: 'Hambúrguer',
      descricao: 'Delicioso hambúrguer artesanal com ingredientes frescos.',
      imagem: 'https://www.estadao.com.br/resizer/dixyOItHmPSgiedCSBL1iIT5lGo=/arc-anglerfish-arc2-prod-estadao/public/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg',
      valor: 6.50,
    },
  ];

  const handleRevisarPedido = () => {
    setExibirPopup(true);
  };

  useEffect(() => {
    if (isMounted) {
      setExibirPopup(false);
    }
  }, [router.asPath]);

  return (
    <div>
      {exibirPopup && (
        <CartPage
          itensSelecionados={itensSelecionados}
          cardapio={cardapio}
          handleIncrementar={handleIncrementar}
          handleDecrementar={handleDecrementar}
          setExibir={setExibirPopup}
        />
      )}
      <div className="flex flex-col justify-center items-center min-h-screen mb-8">
        <h1 className="text-4xl font-bold text-center mb-8">Cardápio</h1>
        <div className="max-w-4xl w-full flex flex-col justify-center items-center">
          {cardapio.map((item) => (
            <CardapioCard
              key={item.id}
              item={item}
              quantidade={itensSelecionados.find((selecionado) => selecionado.id === item.id)?.quantidade || 0}
              onIncrementar={() => handleIncrementar(item.id, item.valor)}
              onDecrementar={() => handleDecrementar(item.id)}
            />
          ))}
        </div>
      </div>
      <Carrinho itensSelecionados={itensSelecionados} onClick={handleRevisarPedido} />
    </div>
  );
}