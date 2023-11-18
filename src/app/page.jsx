import Link from "next/link";
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

 const Page = async () => { 
  const topAnime = await getAnimeResponse('top/anime','limit=8');
  let recomAnime = await getNestedAnimeResponse('recommendations/anime','entry')
  recomAnime = reproduce(recomAnime,8);

  return (
    <>
      <section>
        <Header title={'Paling Populer'} linkTitle={'lihat semua'} linkHref='/populer'/>
        <AnimeList api={topAnime}/>
      </section>
      <section>
        <Header title={'Rekomendasi'} />
        <AnimeList api={recomAnime}/>
      </section>
    </>
  )
};

export default Page