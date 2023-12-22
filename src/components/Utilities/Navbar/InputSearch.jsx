'use client'

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const InputSearch = () => {
    const [show,setShow] = useState(false)

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

    const showInput = () =>{
        setShow(!show);
    }


    return ( 
        <div className="relative">
            <input 
                placeholder="cari anime..."
                className={`p-2 rounded w-full transition-all duration-700 opacity-0  ${show ? 'visible opacity-100' : 'invisible'}`}
                ref={searchRef}
                onKeyDown={handlerSearch}
            ></input>
            <button className="absolute top-2 end-3" onClick={showInput}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
     );
}
 
export default InputSearch;