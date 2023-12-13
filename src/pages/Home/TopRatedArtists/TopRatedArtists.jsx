import ArtistCards from './ArtistCards/ArtistCards';
import HeadlineSection from './HeadlineSection/HeadlineSection';
import s from './TopRatedArtists.module.css';

const TopRatedArtists = () => {
  return (
    <>
      <section className={s.section}>
        <HeadlineSection />
        <ArtistCards />
      </section>
    </>
  );
};

export default TopRatedArtists;
