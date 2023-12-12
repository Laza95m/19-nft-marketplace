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

  //   ---------------------------------------------------------------------------

  const [isLoadingHeroSection, setIsLoadingHeroSection] = useState(null);
  const [heroSectionData, setHeroSectionData] = useState([]);

  const heroSectionURL = 'http://localhost:3001/heroSection/';

  const getHeroSectionData = async () => {
    try {
      setIsLoadingHeroSection(true);
      const response = await axios.get(heroSectionURL);

      setHeroSectionData(response.data);
      setIsLoadingHeroSection(null);
    } catch (error) {
      console.log(error);
      alert('В функции - "getHeroSectionData", произошла ошибка');
      setIsLoadingHeroSection(null);
    } finally {
      setIsLoadingHeroSection(null);
    }
  };

  //   ---------------------------------------------------------------------------

  const [isLoadingTrendingCollection, setIsLoadingTrendingCollection] =
    useState(null);
  const [trendingCollectionData, setTrendingCollectionData] = useState([]);

  const trendingCollectionURL = 'http://localhost:3001/trendingCollection/';

  const getTrendingCollectionData = async () => {
    try {
      setIsLoadingTrendingCollection(true);
      const response = await axios.get(trendingCollectionURL);

      setTrendingCollectionData(response.data);
      setIsLoadingTrendingCollection(null);
    } catch (error) {
      console.log(error);
      alert('В функции - "getTrendingCollectionData", произошла ошибка');
      setIsLoadingTrendingCollection(null);
    } finally {
      setIsLoadingTrendingCollection(null);
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
        isLoadingHeroSection,
        heroSectionData,
        getHeroSectionData,
        isLoadingTrendingCollection,
        trendingCollectionData,
        getTrendingCollectionData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
