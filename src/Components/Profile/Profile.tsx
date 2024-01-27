import { useAuth } from "../../Context/AuthContext";

function ProfileComponent () {
   
    const { user, logout, loading} = useAuth();

    const handleLogout = async () => {
        
        await logout();
        
         
    };
    
    if (loading) return <h1>Loading...</h1>
   


    return (
        <div>
            <h1>Profile {user.displayName}</h1>
            <p>Welcome {user.email}</p>

            <button onClick={handleLogout}>Logout</button>
        </div>
    );

}

export default ProfileComponent