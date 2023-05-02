
import { useNavigate } from "react-router-dom"

export default function SolicitudesAprovadas () {
    
    const navigate = useNavigate();

    const Proyectos = () => {
        navigate('/admin/proyecto');
    }
    
    return (
        <>
            <h1>  TABLA</h1>

            <button onClick={Proyectos}> proyecto </button>
        </>
    )
}
