import { Link } from 'react-router-dom';
import s from './MarketplaceInfo.module.css';

const MarketplaceInfo = () => {
  const socialNetworkIcons = [
    {
      imgSrc: '/footer/discord.svg',
      imgAlt: 'discord_broken',
      link: 'https://discord.com/',
    },
    {
      imgSrc: '/footer/youtube.svg',
      imgAlt: 'youtube_broken',
      link: 'https://www.youtube.com/',
    },
    {
      imgSrc: '/footer/twitter.svg',
      imgAlt: 'twitter',
      link: 'https://twitter.com/',
    },
    {
      imgSrc: '/footer/instagram.svg',
      imgAlt: 'instagram_broken',
      link: 'https://www.instagram.com/',
    },
  ];

  return (
    <>
      <div className={s.container}>
        <Link className={s.block_one} to={'/'}>
          <img
            className={s.logo}
            src="/header/storefront_logo.svg"
            alt="storefront_logo_broken"
          />
          <img
            className={s.logo_text}
            src="/header/nft_marketplace.svg"
            alt="nft_marketplace_broken"
          />
        </Link>
        <p className={s.text_one}>
          NFT marketplace UI created with Anima for Figma.
        </p>
        <p className={s.text_two}>Join our community</p>
        <div className={s.block_two}>
          {!!socialNetworkIcons &&
            socialNetworkIcons.map((el) => (
              <a className={s.link} href={el.link} target="_blank">
                <img src={el.imgSrc} alt={el.imgAlt} />
              </a>
            ))}
        </div>
      </div>
    </>
  );
};

export default MarketplaceInfo;
