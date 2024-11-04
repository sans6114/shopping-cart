import { Button } from 'flowbite-react';

import { useCart } from '../../hooks/useCart';

export const CartItem = ({ item, quantity }) => {

    const { state: cart, addToCart, removeFromCart } = useCart()


    const handleAddQuantity = () => {
        addToCart(item)
    }
    const handleRemoveFromCart = () => {
        removeFromCart(item)
    }
    return (
        <li className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                    src={item.img}
                    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                    className="h-full w-full object-cover object-center"
                />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            {item.title}
                        </h3>
                        <p className="ml-4">${item.price}</p>
                    </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <div className='flex items-center gap-x-2'>
                        <p className="text-gray-500">Qty: {quantity}</p>
                        <Button onClick={handleAddQuantity} color='dark' size='xs'>+</Button>
                    </div>
                    <Button onClick={handleRemoveFromCart} color='dark' size='xs'>Remove</Button>
                </div>
            </div>
        </li>
    )
}