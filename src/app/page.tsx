import Link from 'next/link';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Seja Bem-vindo!</h1>
      <Link className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" id="cardapio" href={'/cardapio'}>Fazer Pedido</Link>
    </div>
  );
};       


export default Index;
