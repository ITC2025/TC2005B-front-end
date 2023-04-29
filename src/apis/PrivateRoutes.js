import {Outlet, Navigate} from 'react-router-dom'
import { tokenValidation } from './getApiData'
import { useEffect, useState } from 'react';

const PrivateRouteComponent = ({ has_permission, rol }) => {
    if (has_permission === null) {
      return
    } else if (has_permission === rol) {
      return <Outlet />;
    } else {
      return <Navigate to="/" />;
    }
  };

  const PrivateRoutes = ({ rol }) => {
    const [has_permission, set_permission] = useState(null);
  
    useEffect(() => {
      const get_data = async () => {
        const response = await tokenValidation();
        set_permission(response.role);
      };
      get_data();
    }, []);
  
    return <PrivateRouteComponent has_permission={has_permission} rol={rol} />;
  };

export default PrivateRoutes
