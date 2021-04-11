import Tiles from 'components/Tiles';
import Layout from '../components/Layout';

const Home = ({ upcoming, mvt, tvt }) => {

  return (
    <Layout>
      <Tiles data={upcoming.results} title={'upcoming'} type={'movie'}/>
      <Tiles data={mvt.results} title={'MOVIES'} type={'movie'}/>
      <Tiles data={tvt.results} title={'tv shows'} type={'tv'}/>
    </Layout>
  );
};

const KEY = '241f3377f8533fde1ca3df1543c681aa';

export async function getUpcoming () {
  return await (await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}`)).json();
}

export async function getMovieTrending () {
  return await (await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`)).json();
}

export async function getTvTrending () {
  return await (await fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${KEY}`)).json();
}

export async function getMovieDetail (id) {
  return await (await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`)).json();
}

export async function getTvDetail (id) {
  return await (await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${KEY}`)).json();
}




export default Home;

export async function getStaticProps (context) {
  const [upcoming, mvt, tvt] = await Promise.all([
    getUpcoming(),
    getMovieTrending(),
    getTvTrending()
  ]);

  return {
    props: { upcoming, mvt, tvt }
  };
}