import { useParams } from 'react-router-dom';
import s from './UserPage.module.css';
import { myContext } from '../../context/Context';
import { useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import ProfileImage from './ProfileImage/ProfileImage';
import UserInfo from './UserInfo/UserInfo';
import UserTab from './UserTab/UserTab';
import CardsSection from './CardsSection/CardsSection';

const UserPage = () => {
  const { isLoadingUserDataById, userDataById, getUserDataById, getUserPage } =
    myContext();

  const { id } = useParams();

  useEffect(() => {
    getUserDataById(id);
    getUserPage();
  }, [id]);

  return (
    <>
      {isLoadingUserDataById && <Loader />}
      {!!userDataById && <ProfileImage userData={userDataById} />}
      {!!userDataById && <UserInfo userData={userDataById} />}
      {!!userDataById && <UserTab userData={userDataById} />}
      {!!userDataById && <CardsSection userData={userDataById} />}
    </>
  );
};

export default UserPage;
