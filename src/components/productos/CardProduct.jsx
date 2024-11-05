import { useMemo } from 'react';

import { Button } from 'flowbite-react';

import { useCart } from '../../hooks/useCart';

export const CardProduct = ({ producto }) => {
  const { state: cart, addToCart, removeFromCart } = useCart()

  //verificar si el producto ya esta en el carrito
  const isProductInCard = useMemo(() =>
    cart?.some(item => item.product.id === producto.id)
    , [cart, producto.id]);

  //funcion que hace la logica de que ocurre al hacer click, elimar o añadir al carrito
  const handleButtonClick = () => {
    if (isProductInCard) {
      removeFromCart(producto)
    } else {
      addToCart(producto)
    }
  }
  
  return (
    <div className="w-full max-w-sm h-full md:h-[700px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-around">
      <a href="#">
        <img
          className="p-8 rounded-t-lg w-full h-[500px] object-cover"
          src={producto.img}
          alt="product image"
        />
      </a>
      <div className="flex flex-col gap-y-4 px-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {producto.title}
          </h5>
        </a>
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col gap-y-2">
            <span className="text-md font-medium text-gray-900 dark:text-white">
              Category: {producto.category}
            </span>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${producto.price}
            </span>
          </div>
          <Button
            color={isProductInCard ? "red" : "dark"}
            onClick={handleButtonClick}
          >
            {isProductInCard ? "Remove" : "Add to cart"}
          </Button>
        </div>
      </div>
    </div >
  );
}
