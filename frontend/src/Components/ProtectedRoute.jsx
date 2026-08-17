import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async (req, res) => {
      try {
        const getData = await axios.get("http://localhost:9000/api/auth/profile",
          {
          withCredentials: true,
        });
        // if(getData.data.success == true){
        //   setAuthenticated(true);
        // }
      } catch (error) {
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return authenticated ? <Outlet /> : <Navigate to="/user-login" replace />;
};

export default ProtectedRoute;