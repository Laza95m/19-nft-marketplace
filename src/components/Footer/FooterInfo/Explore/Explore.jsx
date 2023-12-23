import { Link } from 'react-router-dom';
import s from './Explore.module.css';

const Explore = () => {
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

  return (
    <>
      <div className={s.container}>
        <h5 className={s.title}>Explore</h5>
        <div className={s.block}>
          {!!links &&
            links.map((el,i) => (
              <Link key={i} className={s.link} to={el.to}>
                {el.name}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Explore;
