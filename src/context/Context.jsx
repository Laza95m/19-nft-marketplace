import { createContext, useContext, useState } from 'react';
import Home from '../pages/Home/Home';
import CreateAccount from '../pages/CreateAccount/CreateAccount';
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
      element: <CreateAccount />,
    },
  ];

  //   ---------------------------------------------------------------------------

  const validName = {
    required: 'The name is required',
    pattern: {
      value: /^[A-ZА-Я]{1}[a-zа-я]{1,20}$/gm,
      message: 'Enter valid name like: Dominik',
    },
    maxLength: {
      value: 20,
      message: 'Maximum length is 20',
    },
  };

  const validPhone = {
    required: 'The phone is required',
    pattern: {
      value: /[+](998)[3-9]{1}[0-9]{1}[0-9]{7}$/gm,
      message: 'Enter valid phone like: +998331112233',
    },
    maxLength: {
      value: 13,
      message: 'Maximum length is 13',
    },
  };

  const validMessage = {
    required: 'The message is required',
  };

  //   ---------------------------------------------------------------------------

  const sendTelegramMessage = async (data) => {
    const message = `Name: ${data.name}
Phone: ${data.phone}
Message: ${data.message}`;

    const token = '6629321266:AAGBx6mSrJ8wI0DxYPAxYE6MC3Ckk1iH9vc';
    const chatId = '-4098685554';
    const urlApi = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      await axios.post(urlApi, {
        chat_id: chatId,
        text: message,
      });

      console.log('sendTelegramMessage Good');
    } catch (error) {
      console.log('sendTelegramMessage Bad');
    }
  };

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

  const genereteRandomNum = (userLength) => {
    return Math.round(Math.random() * userLength);
  };

  //   ---------------------------------------------------------------------------

  const ms = 3600000;

  const calculateTimeRemaining = (days, deadline, setTimeRemaining) => {
    const time = Date.parse(deadline) - Date.now();

    setTimeRemaining({
      days: Math.floor(time / (1000 * 60 * 60 * 24)),
      hours: Math.floor((time / (1000 * 60 * 60)) % 24) + days * 24,
      minutes: Math.floor((time / 1000 / 60) % 60),
      seconds: Math.floor((time / 1000) % 60),
    });
  };

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

  //   ---------------------------------------------------------------------------

  const [isLoadingInfoNft, setIsLoadingInfoNft] = useState(false);
  const [infoNftData, setInfoNftData] = useState([]);
  const [infoNftUsers, setInfoNftUsers] = useState([]);

  const infoNftURL = 'http://localhost:3001/infoNft';

  const getInfoNftData = async () => {
    setIsLoadingInfoNft(true);

    try {
      const responseData = await axios.get(infoNftURL);
      const responseUsers = await axios.get(usersURL);

      setInfoNftData(responseData.data);
      setInfoNftUsers(responseUsers.data);
      setIsLoadingInfoNft(false);
    } catch (error) {
      console.log(error);
      alert('В функции - "getInfoNftData", произошла ошибка');
    } finally {
      setIsLoadingInfoNft(false);
    }
  };

  //   ---------------------------------------------------------------------------

  const [isLoadingHowItWorks, setIsLoadingHowItWorks] = useState(false);
  const [howItWorksData, setHowItWorksData] = useState([]);

  const howItWorksURL = 'http://localhost:3001/howItWorks';

  const getHowItWorksData = async () => {
    setIsLoadingHowItWorks(true);

    try {
      const response = await axios.get(howItWorksURL);

      setHowItWorksData(response.data);
      setIsLoadingHowItWorks(false);
    } catch (error) {
      console.log(error);
      alert('В функции - "getHowItWorksData", произошла ошибка');
    } finally {
      setIsLoadingHowItWorks(false);
    }
  };

  //   ---------------------------------------------------------------------------

  const [isLoadingSubscribeWidget, setIsLoadingSubscribeWidget] =
    useState(false);
  const [subscribeWidgetData, setSubscribeWidgetData] = useState([]);

  const subscribeWidgetURL = 'http://localhost:3001/subscribeWidget';

  const getSubscribeWidgetData = async () => {
    setIsLoadingSubscribeWidget(true);

    try {
      const response = await axios.get(subscribeWidgetURL);

      setSubscribeWidgetData(response.data);
      setIsLoadingSubscribeWidget(false);
    } catch (error) {
      console.log(error);
      alert('В функции - "getSubscribeWidgetData", произошла ошибка');
    } finally {
      setIsLoadingSubscribeWidget(false);
    }
  };

  return (
    <Context.Provider
      value={{
        validMessage,
        links,
        publicPages,
        validName,
        validPhone,
        sendTelegramMessage,
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
        genereteRandomNum,
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
        isLoadingInfoNft,
        infoNftData,
        infoNftUsers,
        getInfoNftData,
        isLoadingHowItWorks,
        howItWorksData,
        getHowItWorksData,
        isLoadingSubscribeWidget,
        subscribeWidgetData,
        getSubscribeWidgetData,
        ms,
        calculateTimeRemaining,
      }}
    >
      {children}
    </Context.Provider>
  );
};
