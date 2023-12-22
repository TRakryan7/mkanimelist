import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionButton = async () => {
    const user = await authUserSession();
    const actionLabel = user ? 'Sign Out' : 'Sign In';
    const actionUrl = user ? '/api/auth/signout' : '/api/auth/signin';
    
    const Dashboard = () => {
        return (
                user ? 
                        <Link href='/users/dashboard'>Dashboard</Link> 
                    :  
                        null
                )
    }
    
    return ( 
        <>
            <Dashboard/>            
            <Link href={actionUrl} className="">{actionLabel}</Link>
        </>
     );
}
 
export default UserActionButton;