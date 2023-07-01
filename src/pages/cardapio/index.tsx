import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useState } from 'react';

import { CardapioCartao } from '../../components/card/CardapioCartao';
import CardapioPagina from '../../components/carrinho/CardapioPagina';
import Carrinho from '../../components/carrinho/CardapioRodape';
import { ItemSelecionado } from '../../components/carrinho/interfaces/Carrinho.interface';

export default function Page() {
  const [exibirPopup, setExibirPopup] = useState(false);
  const [itensSelecionados, setItensSelecionados] = useState<ItemSelecionado[]>(
    []
  );
  const [isMounted] = useState(false);

  const router = useRouter();

  const Incrementar = (AdicionadoId: number, AdicionadoValor: number) => {
    const itemSelecionado = itensSelecionados.find(
      (item) => item.id === AdicionadoId
    );

    if (itemSelecionado) {
      const novoItemSelecionado = {
        ...itemSelecionado,
        quantidade: itemSelecionado.quantidade + 1,
      };
      const novosItensSelecionados = itensSelecionados.map((item) =>
        item.id === AdicionadoId ? novoItemSelecionado : item
      );
      setItensSelecionados(novosItensSelecionados);
    } else {
      const novoItemSelecionado = {
        id: AdicionadoId,
        valor: AdicionadoValor,
        quantidade: 1,
      };
      setItensSelecionados([...itensSelecionados, novoItemSelecionado]);
    }
  };

  const Decrementar = (itemId: number) => {
    const itemSelecionado = itensSelecionados.find(
      (item) => item.id === itemId
    );

    if (itemSelecionado) {
      if (itemSelecionado.quantidade > 1) {
        const novoItemSelecionado = {
          ...itemSelecionado,
          quantidade: itemSelecionado.quantidade - 1,
        };
        const novosItensSelecionados = itensSelecionados.map((item) =>
          item.id === itemId ? novoItemSelecionado : item
        );
        setItensSelecionados(novosItensSelecionados);
      } else {
        const novosItensSelecionados = itensSelecionados.filter(
          (item) => item.id !== itemId
        );
        setItensSelecionados(novosItensSelecionados);
      }
    }
  };

  const cardapio = [
    {
      id: 1,
      nome: 'Hambúrguer',
      descricao: 'Delicioso hambúrguer artesanal com ingredientes frescos.',
      imagem:
        'https://www.estadao.com.br/resizer/dixyOItHmPSgiedCSBL1iIT5lGo=/arc-anglerfish-arc2-prod-estadao/public/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg',
      valor: 5.5,
    },
    {
      id: 2,
      nome: 'Pizza',
      descricao: 'Pizza quentinha e saborosa com diversas opções de sabores.',
      imagem:
        'https://www.estadao.com.br/resizer/dixyOItHmPSgiedCSBL1iIT5lGo=/arc-anglerfish-arc2-prod-estadao/public/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg',
      valor: 2.5,
    },
    {
      id: 3,
      nome: 'Hambúrguer',
      descricao: 'Delicioso hambúrguer artesanal com ingredientes frescos.',
      imagem:
        'https://www.estadao.com.br/resizer/dixyOItHmPSgiedCSBL1iIT5lGo=/arc-anglerfish-arc2-prod-estadao/public/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg',
      valor: 6.5,
    },
  ];

  const RevisarPedido = () => {
    setExibirPopup(true);
  };

  useEffect(() => {
    if (isMounted) {
      setExibirPopup(false);
    }
  }, [router.asPath, isMounted]);

  return (
    <div>
      {exibirPopup && (
        <CardapioPagina
          itensSelecionados={itensSelecionados}
          cardapio={cardapio}
          Incrementar={Incrementar}
          Decrementar={Decrementar}
          setExibir={setExibirPopup}
        />
      )}
      <div className='mb-8 flex min-h-screen flex-col items-center justify-center'>
        <h1 className='mb-8 text-center text-4xl font-bold'>Cardápio</h1>
        <div className='flex w-full max-w-4xl flex-col items-center justify-center'>
          {cardapio.map((item) => (
            <CardapioCartao
              key={item.id}
              item={item}
              quantidade={
                itensSelecionados.find(
                  (selecionado) => selecionado.id === item.id
                )?.quantidade || 0
              }
              onIncrementar={() => Incrementar(item.id, item.valor)}
              onDecrementar={() => Decrementar(item.id)}
            />
          ))}
        </div>
      </div>
      {!exibirPopup && (
        <Carrinho
          itensSelecionados={itensSelecionados}
          onClick={RevisarPedido}
        />
      )}
    </div>
  );
}
