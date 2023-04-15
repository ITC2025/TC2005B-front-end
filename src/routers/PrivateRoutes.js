import {Outlet, Navigate} from 'react-router-dom'

const PrivateRoutes = ({rol}) => {
    /*Placeholder de autenticacion
    Este codigo checa si el token es valido y
    el rol es el mismo que el solicitado
    por el prop*/
    let auth = {'token':true, 'rol':'user'}
    return(
        auth.token&&auth.rol===rol ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes