import { useId } from 'react';

import {
  Label,
  RangeSlider,
  Select,
} from 'flowbite-react';

import { useFilter } from '../../hooks/useFilter';

export const Filters = () => {
    const { setFilters: changeState, filters } = useFilter()
    const minPriceId = useId()
    const categoryId = useId()

    const handleChangePrice = (e) => {
      
        changeState(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }
    const handleChangeCategory = (e) => {
        changeState(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }
    return (
        <section className='flex flex-row justify-between items-center w-full px-4 md:px-0 md:w-3/4 mx-auto mb-4'>
            <div className='flex flex-col md:flex-row items-center gap-x-3'>
                <Label htmlFor={minPriceId} value="Price" />
                <RangeSlider
                    id={minPriceId}
                    min='0'
                    max='1000'
                    onChange={handleChangePrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <Label htmlFor={categoryId} value="Select your category" />
                <Select onChange={handleChangeCategory} id={categoryId}>
                    <option value="all">All</option>
                    <option value="men's clothing">Men</option>
                    <option value="women's clothing">Women</option>
                    <option value="jewelery">Accessories</option>
                    <option value="electronics">Electronics</option>
                </Select>
            </div>
        </section>
    )
}