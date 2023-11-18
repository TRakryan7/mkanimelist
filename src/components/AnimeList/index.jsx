import Image from "next/image"
import Link from "next/link"

const AnimeList = ({api}) =>{
    // console.log(api?.data)
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {api?.data?.map((item)=>{
                return(
                <Link key={item.mal_id} href={`/anime/${item.mal_id}`} className="cursor-pointer text-primary hover:text-accent transition-all">
                    <Image src={item.images.webp.image_url} alt="..." width={350} height={350} className="w-full max-h-64 object-cover"/>
                    <h3 className="font-bold md:text-xl text-md p-4 ">{item.title}</h3>
                </Link>        
                )
            })}
        </div>

    )
}

export default AnimeList