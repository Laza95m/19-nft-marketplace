import { createContext, useContext } from 'react';

const Context = createContext();

export const myContext = () => {
  return useContext(Context);
};

export const ContextProvider = ({ children }) => {
  const links = [
    {
      to: '/marketplace',
      name: 'Marketplace',
    },
    {
      to: '/rankings',
      name: 'Rankings',
    },
    {
      to: '/connect-a-wallet',
      name: 'Connect a wallet',
    },
  ];

  //   ---------------------------------------------------------------------------

  const publicPages = [
    {
      path: '*',
      element: '',
    },
    {
      path: '/',
      element: '',
    },
    {
      path: '/marketplace',
      element: '',
    },
    {
      path: '/rankings',
      element: '',
    },
    {
      path: '/connect-a-wallet',
      element: '',
    },
    {
      path: '/sign-up',
      element: '',
    },
  ];

  return (
    <Context.Provider value={{ links, publicPages }}>
      {children}
    </Context.Provider>
  );
};
