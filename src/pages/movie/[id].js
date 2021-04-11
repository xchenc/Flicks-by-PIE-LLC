import { getMovieDetail } from '../index';
import Layout from '../../components/Layout';
import styles from '../../styles/components/Detail.module.scss';
import Calendar from '../../assets/calendar.svg';
import Duration from '../../assets/duration.svg';
import Rate from '../../assets/rate.svg';

export default function Movie ({ data }) {
  return <Layout>
    <div className={styles.container}>
      <div className={styles.img} style={{backgroundImage: `url(https://image.tmdb.org/t/p/w780${data.poster_path})`}}/>
      <div className={styles.info}>
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <Rate/>
            <div className={styles.iconText}>{data.vote_average}/10</div>
          </div>
          <div className={styles.icon}>
            <Duration/>
            <div className={styles.iconText}>{data.runtime} Mins</div>
          </div>
          <div className={styles.icon}>
            <Calendar/>
            <div className={styles.iconText}>{data.release_date.substr(0, 4)}</div>
          </div>
        </div>
        <div className={styles.desc}>{data.overview}</div>
      </div>
    </div>
  </Layout>;
}

export async function getStaticProps ({ params }) {
  const { id } = params;
  const data = await getMovieDetail(id);
  return {
    props: { data }
  };
}

export const getStaticPaths = async () => {

  return {
    paths: [],
    fallback: 'blocking'
  };
};