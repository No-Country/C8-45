import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function NavResButton(props: Props) {
  const { open, callback } = props;
  // This component is the responsive button for navbar
  return (
    <button
      className="md:hidden text-3xl p-2 bg-blue-100 rounded-full"
      onClick={callback}
      type="button"
    >
      {open ? <FiX /> : <FiMenu />}
    </button>
  );
}

type Props = {
  open: boolean;
  callback: () => void;
};

export default NavResButton;
