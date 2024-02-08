import { useAuth } from "../../Context/AuthContext";
import capturaprofile from "../../assets/img/CapturaProfile.png";

function ProfileComponent() {
  const { logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className=" min-h-screen bg-cover bg-center" style={{ 
      backgroundImage: `url(${capturaprofile})`,
      backgroundSize: '85%',
    }}>
     
      {/* <p className="text-white">Welcome {user.email}</p> */}
       <button onClick={handleLogout} className="absolute left-[20rem] -bottom-[12rem] bg-navbar2 hover:bg-navbar text-texto font-bold py-2 px-11 rounded">Logout</button>
      </div>
      
    
  );
}

export default ProfileComponent;

