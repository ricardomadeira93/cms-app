import { Button } from './ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

const Navbar = () => {
  return (
    <div className='flex items-center p-4'>
      <Button>
        <HamburgerMenuIcon  className='text-white md:hidden' />
      </Button>
    </div>
  );
};

export default Navbar;
