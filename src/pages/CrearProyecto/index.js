import React, {useState, useEffect} from 'react';
import FormProject from '../../components/FormProject';
import { getProjectManagers } from '../../utils/projectData';

function CrearProyecto() {
    const [PmData, setPmData] = useState([]);

    const getPmData = async () => {
        const data = await getProjectManagers();
        setPmData(data);
    }

    useEffect(() => {
        getPmData();
    }, []);

    return (
        <>
        <FormProject PmData={PmData}/>
        </>
    );
}
export default CrearProyecto;
  