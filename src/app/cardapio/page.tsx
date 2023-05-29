  import React, { useState } from 'react';

  const Menu = () => {
 //   const [selectedProducts, setSelectedProducts] = useState([]);
  
    const products = [
      {
        id: 1,
        name: 'Hambúrguer',
        description: 'Delicioso hambúrguer artesanal com ingredientes frescos.',
        image: 'https://www.estadao.com.br/resizer/dixyOItHmPSgiedCSBL1iIT5lGo=/arc-anglerfish-arc2-prod-estadao/public/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg',
        value:'5.50',
        
      },
      {
        id: 2,
        name: 'Pizza',
        description: 'Pizza quentinha e saborosa com diversas opções de sabores.',
        image: 'https://www.estadao.com.br/resizer/dixyOItHmPSgiedCSBL1iIT5lGo=/arc-anglerfish-arc2-prod-estadao/public/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg',
        value:'5.50',
      },
      {
        id: 3,
        name: 'Hambúrguer',
        description: 'Delicioso hambúrguer artesanal com ingredientes frescos.',
        image: 'https://www.estadao.com.br/resizer/dixyOItHmPSgiedCSBL1iIT5lGo=/arc-anglerfish-arc2-prod-estadao/public/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg',
        value:'5.50',
      },
      {
        id: 4,
        name: 'Pizza',
        description: 'Pizza quentinha e saborosa com diversas opções de sabores.',
        image: 'https://www.estadao.com.br/resizer/dixyOItHmPSgiedCSBL1iIT5lGo=/arc-anglerfish-arc2-prod-estadao/public/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg',
        value:'5.50',
      },
      {
        id: 5,
        name: 'Hambúrguer',
        description: 'Delicioso hambúrguer artesanal com ingredientes frescos.',
        image: 'https://www.estadao.com.br/resizer/dixyOItHmPSgiedCSBL1iIT5lGo=/arc-anglerfish-arc2-prod-estadao/public/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg',
        value:'5.50',
      },
      {
        id: 6,
        name: 'Pizza',
        description: 'Delicioso hambúrguer artesanal com ingredientes frescos.tesanal com ingredientes frescos.tesanal com ingredientes frescos.tesanal com ingredientes frescos.tesanal com ingredientes frescos.tesanal com ingredientes frescos.tesanal com ingredientes frescos.tesanal com ingredientes frescos.ores.',
        image: 'https://www.estadao.com.br/resizer/dixyOItHmPSgiedCSBL1iIT5lGo=/arc-anglerfish-arc2-prod-estadao/public/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg',
        value:'5.50',
      },
      {
        id: 7,
        name: 'Hambúrguer',
        description: 'Delicioso hambúrguer artesanal com ingredientes frescos.tesanal com ingredientes frescos.tesanal com ingredientes frescos.tesanal com ingredientes frescos.tesanal com ingredientes frescos.tesanal com ingredientes frescos.tesanal com ingredientes frescos.tesanal com ingredientes frescos.',
        image: 'https://www.estadao.com.br/resizer/dixyOItHmPSgiedCSBL1iIT5lGo=/arc-anglerfish-arc2-prod-estadao/public/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg',
        value:'5.50',
      },
      {
        id: 8,
        name: 'Pizza',
        description: 'Pizza quentinha e saborosa com diversas opções de sabores.',
        image: 'https://www.estadao.com.br/resizer/dixyOItHmPSgiedCSBL1iIT5lGo=/arc-anglerfish-arc2-prod-estadao/public/GUOGMQ4FRJIUPAWMYLE4WNA3SY.jpg',
        value:'5.50',
      },] 
  
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-8">Cardápio</h1>
        <div className="max-w-4xl w-full">
          {products.map((product) => (
            <button
              key={product.id}
              className="flex rounded overflow-hidden shadow-lg my-4 focus:outline-none"
            >
              <img
                className="w-1/2 h-auto object-cover"
                src={product.image}
                alt={product.name}
              />
              <div className="flex flex-col justify-center p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
              </div>
            </button>
          ))}
        </div>
        <div>
          <h2>Produtos Selecionados:</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Menu;
  