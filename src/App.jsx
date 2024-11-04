import { Products } from './components/productos/Products';
import {
  FooterApp,
  Loading,
  NavBar,
} from './components/ui';
import { CartProvider } from './context/CartProvider';
import { mapper } from './helpers/productMapper';
import { useFetch } from './hooks/useFetch';
import { useFilter } from './hooks/useFilter';

export const App = () => {
  const { data: productos, loading, hasError, error } = useFetch(import.meta.env.VITE_PRODUCT_URL)
  const mappedProducts = productos ? mapper(productos) : []
  const { filterProducts } = useFilter()
  const productFilter = filterProducts(mappedProducts)
  

  return (
    <CartProvider>
      <NavBar />
      {loading ?
        (<Loading />) : (
          hasError ? <span>{error}</span> : (
          <Products productos={productFilter} />)
        )}
      <FooterApp />
    </CartProvider>
  );
};