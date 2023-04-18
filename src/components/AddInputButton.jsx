import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { MdAdd, MdOutlineCreditCard } from "react-icons/md";
import '../syles/AddInputButton.css';

function AddInputButton(props) {
    const add = <MdAdd />
    const CreditCard = <MdOutlineCreditCard />
    const [inputs, setInputs] = useState([]);

    const agregarInput = () => {
        setInputs([...inputs, <props.InputComponent key={inputs.length} />]);
    };

    return (
        <>
            <Button onClick={agregarInput}>
                {CreditCard}AGREGAR GASTO{add}
            </Button> 
            {inputs}
        </>
    );
}

export default AddInputButton;