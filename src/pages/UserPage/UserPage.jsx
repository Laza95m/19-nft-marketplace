import { useParams } from 'react-router-dom';
import s from './UserPage.module.css';
import { myContext } from '../../context/Context';
import { useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import ProfileImage from './ProfileImage/ProfileImage';
import UserInfo from './UserInfo/UserInfo';

const UserPage = () => {
  const {
    isLoadingUserDataById,
    userDataById,
    getUserDataById,
    userPage,
    getUserPage,
  } = myContext();

  const { id } = useParams();

  useEffect(() => {
    getUserDataById(id);
    getUserPage();
  }, [id]);

  return (
    <>
      {isLoadingUserDataById && <Loader />}
      {!!userDataById && <ProfileImage userData={userDataById} />}
      {!!userDataById && !!userPage && <UserInfo userData={userDataById} />}
    </>
  );
};

export default UserPage;
