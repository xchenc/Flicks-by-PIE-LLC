import PropTypes from 'prop-types';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import styles from 'styles/components/Tiles.module.scss';

SwiperCore.use([Navigation]);

const Tiles = ({ data, title, type }) => (
  <>
    <div className={styles.head}>{title}</div>
    <div className={styles.tiles}>
      <Swiper
        spaceBetween={20}
        slidesPerView={8}
        slidesPerGroup={8}
        navigation
      >
        {data.map(d => (
          <SwiperSlide key={d.id} style={{ width: 50 }}>
            <Link href={`/${type}/${d.id}`}>
              <a><img src={`https://image.tmdb.org/t/p/w300${d.backdrop_path}`} className={styles.img}/></a>
            </Link>
            <div className={styles.title}>{d.title || d.name}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </>
);

Tiles.propTypes = {
  slidesPerView: PropTypes.number,
};

export default Tiles;
