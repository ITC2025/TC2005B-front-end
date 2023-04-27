import {Outlet, Navigate} from 'react-router-dom'
import { tokenValidation } from './getApiData'

const PrivateRoutes = ({rol}) => {
    tokenValidation().then((andrecasmac)=>{
        return(
            andrecasmac.role===rol ? <Outlet/> : <Navigate to="/"/>
        )
    })
    
}

export default PrivateRoutes