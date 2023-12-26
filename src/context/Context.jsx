import { createContext, useContext, useEffect, useState } from 'react';
import Home from '../pages/Home/Home';
import CreateAccount from '../pages/CreateAccount/CreateAccount';
import ConnectWallet from '../pages/ConnectWallet/ConnectWallet';
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
      element: <ConnectWallet />,
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
      value: /^[A-Z]{1}[a-z]{1,20}$/gm,
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

  const validFullname = {
    required: 'The fullname is required',
    pattern: {
      value: /(^[A-Z]{1})([a-z]{1,16})([ ]{1})([A-Z]{1})([a-z]{1,16})$/,
      message: 'Enter valid fullname like: Jeff Johnson',
    },
    minLength: {
      value: 9,
      message: 'minimum length is 9',
    },
    maxLength: {
      value: 35,
      message: 'Maximum length is 35',
    },
  };

  const validEmail = {
    required: 'The email is required',
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: 'Enter valid email like: bob7.h@gmail.com',
    },
  };

  const validPassword = {
    required: 'The password is required',
    minLength: {
      value: 6,
      message: 'minimum length is 6',
    },
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

  //   ---------------------------------------------------------------------------

  const [isLoadingCreateAccount, setIsLoadingCreateAccount] = useState(false);
  const [createAccountData, setCreateAccountData] = useState([]);

  const createAccountURL = 'http://localhost:3003/createAccount';

  const getCreateAccountData = async () => {
    setIsLoadingCreateAccount(true);

    try {
      const response = await axios.get(createAccountURL);

      setCreateAccountData(response.data);
      setIsLoadingCreateAccount(false);
    } catch (error) {
      console.log(error);
      alert('В функции - "getCreateAccountData", произошла ошибка');
    } finally {
      setIsLoadingCreateAccount(false);
    }
  };

  //   ---------------------------------------------------------------------------

  const [isLoadingConnectWallet, setIsLoadingConnectWallet] = useState(false);
  const [connectWalletData, setConnectWalletData] = useState([]);

  const connectWalletURL = 'http://localhost:3004/connectWallet';

  const getConnectWalletData = async () => {
    setIsLoadingConnectWallet(true);

    try {
      const response = await axios.get(connectWalletURL);

      setConnectWalletData(response.data);
      setIsLoadingConnectWallet(false);
    } catch (error) {
      console.log(error);
      alert('В функции - "getConnectWalletData", произошла ошибка');
    } finally {
      setIsLoadingConnectWallet(false);
    }
  };

  //   ---------------------------------------------------------------------------

  const [usersData, setUsersData] = useState([]);

  const getUsersData = async () => {
    try {
      const response = await axios.get(usersURL);

      setUsersData(response.data);
    } catch (error) {
      console.log(error);
      alert('В функции - "getUsersData", произошла ошибка');
    }
  };

  const addNewUser = async (data) => {
    const newUser = {
      id: usersData.length + 1,
      primarySrc: '',
      primaryAlt: 'broken',
      fullName: data.fullName,
      nickName: '',
      password: data.password,
      totalSale: 0,
      totalsSold: 0,
      followers: 0,
      bio: '',
      change: '0%',
      links: [
        {
          id: 1,
          globalLink: '',
        },
        {
          id: 2,
          discordLink: 'https://discord.com/',
        },
        {
          id: 3,
          youtubeLink: 'https://www.youtube.com/',
        },
        {
          id: 4,
          twitterLink: 'https://twitter.com/',
        },
        {
          id: 5,
          instagramLink: 'https://www.instagram.com/',
        },
      ],
      nfts: [],
    };

    try {
      await axios.post(usersURL, {
        ...newUser,
      });

      alert('Аккаунт создан успешно');
    } catch (error) {
      console.log(error);
      alert('В функции - "addNewUser", произошла ошибка');
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
        validFullname,
        validEmail,
        validPassword,
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
        isLoadingCreateAccount,
        createAccountData,
        getCreateAccountData,
        isLoadingConnectWallet,
        connectWalletData,
        getConnectWalletData,
        ms,
        calculateTimeRemaining,
        getUsersData,
        addNewUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
