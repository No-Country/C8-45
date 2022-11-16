import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  value: string;
  path: string;
};
function NavigationLink(props: Props) {
  const { value, path } = props;
  // Todo fix this code
  const activeClassName = 'text-blue-700 text-xl';
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? activeClassName
          : 'text-xl font-roboto font-roboto text-gray-700 hover:text-blue-600'
      }
    >
      {value}
    </NavLink>
  );
}

export default NavigationLink;
