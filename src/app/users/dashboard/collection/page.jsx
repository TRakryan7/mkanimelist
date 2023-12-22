import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Dashboard/Header";

const Page = () => {
    return (
        <section className="mt-4 px-4 w-full">
            <Header title={"My Collection"}/>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Link href="/" className="border-2 border-accent relative">
                    <Image src={""} alt="..." width={350} height={350} className="w-full"/>
                    <div className="w-full absolute bottom-0 h-16 flex justify-center items-center bg-accent">
                        <h5 className="text-xl text-center">Judul Anime Judul Anime</h5>
                    </div>
                </Link>
                <Link href="/" className="border-2 border-accent relative">
                    <Image src={""} alt="..." width={350} height={350} className="w-full"/>
                    <div className="w-full absolute bottom-0 h-16 flex justify-center items-center bg-accent">
                        <h5 className="text-xl text-center">Judul Anime Judul Anime</h5>
                    </div>
                </Link>
                <Link href="/" className="border-2 border-accent relative">
                    <Image src={""} alt="..." width={350} height={350} className="w-full"/>
                    <div className="w-full absolute bottom-0 h-16 flex justify-center items-center bg-accent">
                        <h5 className="text-xl text-center">Judul Anime Judul Anime</h5>
                    </div>
                </Link>
                <Link href="/" className="border-2 border-accent relative">
                    <Image src={""} alt="..." width={350} height={350} className="w-full"/>
                    <div className="w-full absolute bottom-0 h-16 flex justify-center items-center bg-accent">
                        <h5 className="text-xl text-center">Judul Anime Judul Anime</h5>
                    </div>
                </Link>
            </div>
        </section>
    )
};

export default Page;