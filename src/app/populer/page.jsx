'use client'

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { getAnimeResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

const Page = async () => {

    const [page, setPage] = useState(1);
    const [dataAnime, setDataAnime] = useState()

    const fetchData = async () =>{
        const data = await getAnimeResponse('top/anime',`page=${page}`)
        setDataAnime(data);
    }

    useEffect(() => {
        fetchData()
    },[page])
    return ( 
        <>
            <HeaderMenu title={`ANIME TERPOPULER #${page}`}/>
            <AnimeList api={dataAnime}/>       
            <Pagination 
                page={page} 
                lastPage={dataAnime?.pagination?.last_visible_page}
                setPage={setPage}
                setDataAnime={setDataAnime}
                />
        </>
     );
}
 
export default Page;