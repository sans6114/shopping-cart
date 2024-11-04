import { useState } from 'react';

import { filterContext } from './filterContext';

// este es el que nos provee acceso al contexto
export const FiltersProvider = ({ children }) => {
const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
})
    return (
        <filterContext.Provider value={{ 
            filters,
            setFilters
         }}>
            {children}
        </filterContext.Provider>
    )
}