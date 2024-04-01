import React, { useState } from 'react';
import { Overlay } from './overlay';
import { BurgerMenu } from './burger-menu';

export const NavigationOverlay = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="flex items-center text-blue-500 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <span className="sr-only">Open navigation menu</span>
        <BurgerMenu openDialog={() => setOpen(true)} />
      </div>
      <Overlay open={open} setOpen={setOpen}>
        Test
      </Overlay>
    </>
  );
};
