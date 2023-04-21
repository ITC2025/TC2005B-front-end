import {Outlet, Navigate} from 'react-router-dom'
import { tokenValidation } from './getApiData'

const PrivateRoutes = ({rol}) => {
    const userRol = tokenValidation()
    return(
        userRol===rol ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes