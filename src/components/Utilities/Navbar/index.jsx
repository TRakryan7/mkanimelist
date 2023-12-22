import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
    return ( 
        <header className="bg-accent">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
                <Link href="/" className="font-bold  text-2xl">MAnimeList</Link>
                <div className="flex flex-row items-center gap-2">
                    <InputSearch/>
                    <UserActionButton/>
                </div>
            </div>
        </header>
     );
}
 
export default Navbar;