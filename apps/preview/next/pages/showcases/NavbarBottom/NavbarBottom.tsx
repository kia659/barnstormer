import { ShowcasePageLayout } from '../../showcases';
// #region source
import classNames from 'classnames';
import {
  BsButton,
  BsIconHome,
  BsIconMenu,
  BsIconShoppingCart,
  BsIconFavorite,
  BsIconPerson,
} from '@barnstormer/react';
import { useState } from 'react';

export default function BottomNav() {
  const items = [
    {
      label: 'Home',
      icon: <BsIconHome />,
    },
    {
      label: 'Products',
      icon: <BsIconMenu />,
    },
    {
      label: 'Cart',
      icon: <BsIconShoppingCart />,
    },
    {
      label: 'Watchlist',
      icon: <BsIconFavorite />,
    },
    {
      label: 'Account',
      icon: <BsIconPerson />,
    },
  ];

  const [selectedItem, setselectedItem] = useState('');
  function onClickHandler(itemLabel: string) {
    setselectedItem(itemLabel);
  }

  return (
    <nav className="max-w-[500px] bottom-0 w-full left-0 fixed flex flex-row items-stretch bg-white text-primary-700">
      {items.map((item) => (
        <BsButton
          key={item.label}
          variant="tertiary"
          slotPrefix={item.icon}
          className={classNames(
            'py-1 flex flex-col h-full w-full rounded-none hover:text-primary-800 hover:bg-primary-100 active:text-primary-900 active:bg-primary-200',
            { 'text-primary-900 bg-primary-200': selectedItem === item.label },
          )}
          onClick={() => onClickHandler(item.label)}
        >
          {item.label}
        </BsButton>
      ))}
    </nav>
  );
}

// #endregion source
BottomNav.getLayout = ShowcasePageLayout;
