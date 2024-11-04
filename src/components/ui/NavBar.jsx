import {
  Button,
  Navbar,
} from 'flowbite-react';
import { FaGithub } from 'react-icons/fa';
//icons
import { FcShop } from 'react-icons/fc';

export const NavBar = () => {
    return (
        <Navbar className='fixed w-full z-50' fluid rounded border>
            <Navbar.Brand>
                <FcShop size={50} className='mr-2' />
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Shopping cart</span>
            </Navbar.Brand>
            <div className="flex md:order-2 items-center">
                <Button color='dark' href='https://github.com/sans6114'>
                    <FaGithub size={20} className='mr-2' />
                    Go github
                </Button>
            </div>
        </Navbar>
    );
}
