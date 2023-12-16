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

  const [size, setSize] = useState(0);

  const resizeHandler = () => {
    setSize(window.innerWidth);
  };

  //   ---------------------------------------------------------------------------

  const usersURL = 'http://localhost:3002/users';

  //   ---------------------------------------------------------------------------

  const [isLoadingHeroSection, setIsLoadingHeroSection] = useState(false);
  const [heroSectionData, setHeroSectionData] = useState([]);

  const heroSectionURL = 'http://localhost:3001/heroSection';

  const getHeroSectionData = async () => {
    setIsLoadingHeroSection(true);

    try {
      const response = await axios.get(heroSectionURL);

      setHeroSectionData(response.data);
      setIsLoadingHeroSection(false);
    } catch (error) {
      console.log(error);
      alert('В функции - "getHeroSectionData", произошла ошибка');
    } finally {
      setIsLoadingHeroSection(false);
    }
  };

  //   ---------------------------------------------------------------------------

  const [isLoadingTrendingCollection, setIsLoadingTrendingCollection] =
    useState(false);
  const [trendingCollectionData, setTrendingCollectionData] = useState([]);

  const trendingCollectionURL = 'http://localhost:3001/trendingCollection';

  const getTrendingCollectionData = async () => {
    setIsLoadingTrendingCollection(true);

    try {
      const response = await axios.get(trendingCollectionURL);

      setTrendingCollectionData(response.data);
      setIsLoadingTrendingCollection(false);
    } catch (error) {
      console.log(error);
      alert('В функции - "getTrendingCollectionData", произошла ошибка');
    } finally {
      setIsLoadingTrendingCollection(false);
    }
  };

  //   ---------------------------------------------------------------------------

  const [isLoadingTopRatedArtists, setIsLoadingTopRatedArtists] =
    useState(false);
  const [TopRatedArtistsData, setTopRatedArtistsData] = useState([]);
  const [TopRatedArtistsUsers, setTopRatedArtistsUsers] = useState([]);

  const headlineSectionURL = 'http://localhost:3001/topRatedArtists';

  const getTopRatedArtistsData = async () => {
    setIsLoadingTopRatedArtists(true);

    try {
      const responseData = await axios.get(headlineSectionURL);
      const responseUsers = await axios.get(usersURL);

      setTopRatedArtistsData(responseData.data);
      setTopRatedArtistsUsers(responseUsers.data);
      setIsLoadingTopRatedArtists(false);
    } catch (error) {
      console.log(error);
      alert('В функции - "getTopRatedArtistsData", произошла ошибка');
    } finally {
      setIsLoadingTopRatedArtists(false);
    }
  };

  //   ---------------------------------------------------------------------------

  const [isLoadingBrowseCategories, setIsLoadingBrowseCategories] =
    useState(false);
  const [browseCategoriesData, setBrowseCategoriesData] = useState([]);

  const browseCategoriesURL = 'http://localhost:3001/browseCategories';

  const getBrowseCategoriesData = async () => {
    setIsLoadingBrowseCategories(true);

    try {
      const response = await axios.get(browseCategoriesURL);

      setBrowseCategoriesData(response.data);
      setIsLoadingBrowseCategories(false);
    } catch (error) {
      console.log(error);
      alert('В функции - "getBrowseCategoriesData", произошла ошибка');
    } finally {
      setIsLoadingBrowseCategories(false);
    }
  };

  //   ---------------------------------------------------------------------------

  const [isLoadingDiscoverMore, setIsLoadingDiscoverMore] = useState(false);
  const [discoverMoreData, setDiscoverMoreData] = useState([]);
  const [discoverMoreUsers, setDiscoverMoreUsers] = useState([]);

  const discoverMoreURL = 'http://localhost:3001/discoverMore';

  const getDiscoverMoreData = async () => {
    setIsLoadingDiscoverMore(true);

    try {
      const responseData = await axios.get(discoverMoreURL);
      const responseUsers = await axios.get(usersURL);

      setDiscoverMoreData(responseData.data);
      setDiscoverMoreUsers(responseUsers.data);
      setIsLoadingDiscoverMore(false);
    } catch (error) {
      console.log(error);
      alert('В функции - "getDiscoverMoreData", произошла ошибка');
    } finally {
      setIsLoadingDiscoverMore(false);
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
        size,
        resizeHandler,
        isLoadingTopRatedArtists,
        TopRatedArtistsData,
        TopRatedArtistsUsers,
        getTopRatedArtistsData,
        isLoadingBrowseCategories,
        browseCategoriesData,
        getBrowseCategoriesData,
        isLoadingDiscoverMore,
        discoverMoreData,
        discoverMoreUsers,
        getDiscoverMoreData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
