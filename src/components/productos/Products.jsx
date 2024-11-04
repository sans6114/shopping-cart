import { Cart } from '../cart/Cart';
import { CardProduct } from './CardProduct';
import { Filters } from './Filters';

export const Products = ({productos}) => {
  return (
    <main className='max-w-6xl mx-auto flex flex-col items-center justify-center'>
    <h1 className='text-4xl text-center font-extrabold p-5 mt-16 mb-5'>Products</h1>
      <Filters/>
     <Cart />
    <div className='grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4'>
      {
        productos?.map(producto => (
          <CardProduct key={producto.id} producto={producto}/>
        ))
      }
    </div>
  </main>
  )
}
