'use client'

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {

    const searchRef = useRef()
    const router = useRouter()

    const handlerSearch = (e) =>{
        // e.preventDefault()
        const keyword = searchRef.current.value;
        
        if(!keyword || keyword.trim()=="") return

        if (e.key === 'Enter' || e.type === 'click'){
            router.push(`/search/${keyword}`)
        }
    }


    return ( 
        <div className="relative">
            <input 
                placeholder="cari anime..."
                className="p-2 rounded w-full"
                ref={searchRef}
                onKeyDown={handlerSearch}
            ></input>
            <button className="absolute top-2 end-3" onClick={handlerSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
     );
}
 
export default InputSearch;