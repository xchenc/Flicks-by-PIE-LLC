import { getTvDetail } from '../index';
import Layout from '../../components/Layout';
import styles from '../../styles/components/Detail.module.scss';
import Rate from '../../assets/rate.svg';
import Calendar from '../../assets/calendar.svg';

export default function Tv ({ data }) {
  console.log(data);
  return <Layout>
    <div className={styles.container}>
      <div className={styles.img} style={{backgroundImage: `url(https://image.tmdb.org/t/p/w780${data.poster_path})`}}/>
      <div className={styles.info}>
        <h1 className={styles.title}>{data.name}</h1>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <Rate/>
            <div className={styles.iconText}>{data.vote_average}/10</div>
          </div>
          <div className={styles.icon}>
            <Calendar/>
            <div className={styles.iconText}>{data.first_air_date.substr(0, 4)}</div>
          </div>
        </div>
        <div className={styles.desc}>{data.overview}</div>
      </div>
    </div>
  </Layout>;
}

export async function getStaticProps ({ params }) {
  const { id } = params;
  const data = await getTvDetail(id);
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