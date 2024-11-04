import {
  useEffect,
  useState,
} from 'react';

import {
  Button,
  Modal,
} from 'flowbite-react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdRemoveShoppingCart } from 'react-icons/md';

import { useCart } from '../../hooks/useCart';
import { CartItem } from './CartItem';

const CartContent = ({ cart }) => {
    return (
        <>
            <span className='absolute bottom-[-25px] left-0 rounded-xl bg-blue-600 border-2 text-white p-1 px-3'>{cart.length}</span>
        </>
    )
}



export const Cart = () => {
    const [openModal, setOpenModal] = useState(false);
    const { state: cart, clearCart } = useCart()

    useEffect(() => {
    if (cart.length <= 0) {
        setOpenModal(false);
    }
    }, [cart])

    return (
        <>
            <Button color='dark' className='fixed top-20 right-5 z-50' onClick={() => {
                if (cart.length <= 0) return
                setOpenModal(true)
            }}>
                <FaShoppingCart size={20} />
                {cart.length > 0 && <CartContent cart={cart} />}
            </Button>
            <Modal className='flex flex-col items-center relative' show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Cart</Modal.Header>
                <Modal.Body>
                    <ul>
                        {
                            cart?.map(itemCart => (
                                <CartItem key={itemCart.product.id} item={itemCart.product} quantity={itemCart.quantity} />
                            ))
                        }
                    </ul>
                    <Button onClick={() => {
                        clearCart()
                        setOpenModal(false)
                    }} color='dark'>
                        <MdRemoveShoppingCart size={20} />
                        Clear cart</Button>
                </Modal.Body>
            </Modal>
        </>
    );
}