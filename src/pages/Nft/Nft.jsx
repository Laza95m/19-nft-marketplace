import { useParams } from 'react-router-dom';
import { myContext } from '../../context/Context';
import s from './Nft.module.css';
import { useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import ImagePlaceHolder from './ImagePlaceHolder/ImagePlaceHolder';
import NFTInfo from './NFTInfo/NFTInfo';

const Nft = () => {
  const { isLoadingUserDataById, userDataById, getUserDataById } = myContext();

  const { id } = useParams();

  useEffect(() => {
    getUserDataById(id);
  }, [id]);

  return (
    <>
      {isLoadingUserDataById && <Loader />}
      {!!userDataById && <ImagePlaceHolder userData={userDataById} />}
      {!!userDataById && <NFTInfo userData={userDataById} />}
    </>
  );
};

export default Nft;
