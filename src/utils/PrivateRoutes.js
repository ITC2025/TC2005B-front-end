import {Outlet, Navigate} from 'react-router-dom'
import { tokenValidation } from './getApiData'
import { useEffect, useState } from 'react';

const PrivateRoutes = ({rol}) => {
      const [has_permission, set_permission] = useState(true);

      useEffect(() => {
          const get_data = async () => {
              const response = await tokenValidation();
              set_permission(response.role);
          };

          get_data();
      }, [has_permission]);

    if (has_permission == rol) {
        return <Outlet/>;
    } else {
        return <Navigate to="/" />;
    }
}

export default PrivateRoutes
