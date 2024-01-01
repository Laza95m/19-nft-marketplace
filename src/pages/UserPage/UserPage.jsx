import { useParams } from 'react-router-dom';
import s from './UserPage.module.css';
import { myContext } from '../../context/Context';
import { useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import ProfileImage from './ProfileImage/ProfileImage';

const UserPage = () => {
  const { isLoadingUserDataById, userDataById, getUserDataById } = myContext();

  const { id } = useParams();

  useEffect(() => {
    getUserDataById(id);
  }, [id]);

  return (
    <>
      {isLoadingUserDataById && !userDataById ? (
        <Loader />
      ) : (
        <ProfileImage userData={userDataById} />
      )}
    </>
  );
};

export default UserPage;
