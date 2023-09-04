/* eslint-disable max-len */
import React, { useMemo } from 'react';
import { NavBarRoute } from 'types/NavBarRoute';
import { MainContext } from 'context/MainContext';
import { CartContext } from 'context';
import { Link } from './Link';
import { ReactComponent as FavoritesIcon } from '../../assets/icons/heart_dark.svg';
import { ReactComponent as FavoritesIconLight } from '../../assets/icons/heart-light.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';
import { ReactComponent as CartIconLight } from '../../assets/icons/cart-light.svg';
import { Search } from '../Search';

type Props = {
  className?: string;
  onClick?: () => void;
};

export const NavBarIcons: React.FC<Props> = ({
  className,
  onClick = () => {},
}) => {
  const { cart } = React.useContext(CartContext);

  const cartCounter = useMemo(() => {
    return cart.reduce((acc, { count }) => acc + count, 0);
  }, [cart]);

  const { products, darkTheme } = React.useContext(MainContext);

  const favoritesCounter = products.length;

  return (
    <div
      className={className}
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={0}
      role="button"
    >
      <Search />
      <Link
        to={NavBarRoute.Favorites}
        icon={darkTheme ? <FavoritesIconLight /> : <FavoritesIcon />}
        counter={favoritesCounter}
      />
      <Link
        to={NavBarRoute.Cart}
        icon={darkTheme ? <CartIconLight /> : <CartIcon />}
        counter={cartCounter}
      />
    </div>
  );
};
