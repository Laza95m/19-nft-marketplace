import { myContext } from '../../../context/Context';
import ArtistCards from './ArtistCards/ArtistCards';
import HeadlineSection from './HeadlineSection/HeadlineSection';
import s from './TopRatedArtists.module.css';

const TopRatedArtists = () => {
  const { TopRatedArtistsData } = myContext();
  return (
    <>
      {!!TopRatedArtistsData && (
        <section className={s.section}>
          <HeadlineSection />
          <ArtistCards />
        </section>
      )}
    </>
  );
};

export default TopRatedArtists;
