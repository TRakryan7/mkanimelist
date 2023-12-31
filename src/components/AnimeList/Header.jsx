import Link from "next/link";
const Header = ({title, linkHref, linkTitle}) => {
    return ( 
     <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">{title}</h1>
        {linkHref && linkTitle ? 
                <Link href={linkHref} className="md:text-xl text-lg text-primary underline hover:text-accent transition-all">{linkTitle}</Link>
            :
                null
        }
      </div>
     );
}
 
export default Header;