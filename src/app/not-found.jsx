'use client'
import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Page = () => {
    return ( 
        <div className="min-h-screen max-w-xl mx-auto flex justify-center">
            <div className="flex justify-center items-center gap-4 flex-col">
                <FileSearch size={44} className="text-accent"/>
                <h3 className="text-4xl text-accent font-bold">Tidak Ditemukan</h3>
                <Link href={'/'} className="text-primary hover:text-accent transition-all underline" > kembali </Link>
            </div>
        </div>
     );
}
 
export default Page;
