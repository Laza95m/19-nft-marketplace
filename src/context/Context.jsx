import { createContext, useContext, useState } from 'react';
import Home from '../pages/Home/Home';
import axios from 'axios';

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

  const publicPages = [
    {
      path: '*',
      element: '404',
    },
    {
      path: '/',
      element: <Home />,
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
    {
      path: '/create-account',
      element: '',
    },
  ];

  //   ---------------------------------------------------------------------------

  const [isPopup, setIsPopup] = useState(false);

  const openPopup = () => {
    setIsPopup(true);
  };

  const closePopup = () => {
    setIsPopup(false);
  };

  //   ---------------------------------------------------------------------------

  const [heroSectionData, setHeroSectionData] = useState([]);

  const heroSectionURL = 'http://localhost:3001/heroSection/';

  const getHeroSectionData = async () => {
    try {
      const response = await axios.get(heroSectionURL);

      setHeroSectionData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Context.Provider
      value={{
        links,
        publicPages,
        isPopup,
        openPopup,
        closePopup,
        heroSectionData,
        getHeroSectionData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
