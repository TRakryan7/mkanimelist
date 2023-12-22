import Link from "next/link";
import Image from "next/image";

const Page = () => {
    return (
        <section className="mt-4">
            <h3 className="text-2xl text-primary">My Collection</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Link href="/" className="border-2 border-accent">
                    <Image src={""} alt="..." width={350} height={350}/>
                    <div className="w-full">
                        <h5>Judul Anime Judul Anime</h5>
                    </div>
                </Link>
                <Link href="/" className="border-2 border-accent">
                    <Image src={""} alt="..." width={350} height={350}/>
                </Link>
                <Link href="/" className="border-2 border-accent">
                    <Image src={""} alt="..." width={350} height={350}/>
                </Link>
                <Link href="/" className="border-2 border-accent">
                    <Image src={""} alt="..." width={350} height={350}/>
                </Link>
            </div>
        </section>
    )
};

export default Page;