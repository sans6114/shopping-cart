import { useContext } from 'react';

import { filterContext } from '../context/filterContext';

export const useFilter = () => {
  const {filters, setFilters} = useContext(filterContext)
  const filterProducts = (products) => {
    return products.filter(producto => {
      return producto.price >= filters.minPrice &&
      (
        filters.category === 'all' || 
        producto.category === filters.category
      )
    })
  }
    return {
      filterProducts,
      filters,
      setFilters
    }
  }