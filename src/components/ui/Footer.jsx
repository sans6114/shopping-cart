import { Footer } from 'flowbite-react';

import { useFilter } from '../../hooks/useFilter';

export const FooterApp = () => {
  const {filters} = useFilter()
  return (
    <Footer container className='border border-t mt-5'>
      <Footer.Copyright href="https://github.com/sans6114" by="sans6114™" year={2024} />
      <Footer.LinkGroup>
        <div className='flex flex-col'>
          <h3 className='font-bold'>Filters</h3>
          {Object.entries(filters).map(([key, value]) => (<span key={key}>{key}: {value}</span>))}
        </div>
      </Footer.LinkGroup>
    </Footer>
  );
}
