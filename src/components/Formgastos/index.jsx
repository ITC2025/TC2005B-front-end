import React, { forwardRef } from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";
import '../../styles/gastos.css'

function Separator(stringToSep) {
    const myString = stringToSep;
    const startIndex = 5;
    const result = myString.substring(startIndex);
  
    return (result)
  }

export default function Gastos() {
    const [ShowComponent, SetShowComponent] = useState(true);
    const [product, setProduct] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState('');
    const handleFileUpload = (event) => {
        const file = event.target.files[0]; // Obtiene el primer archivo cargado
        const reader = new FileReader(); // Crea una instancia de FileReader

        // Cuando el archivo se carga, convierte el archivo a Blob
        reader.onload = () => {
            const blob = new Blob([reader.result], { type: file.type });
            // Usa el objeto Blob como sea necesario, por ejemplo, puedes enviarlo a un servidor
            setImage(blob)
        };


        reader.readAsArrayBuffer(file); // Lee el archivo como un ArrayBuffer
    };
    const DeleteLine = () => {//Esta funcion sirve como Renderiacion condicional
        SetShowComponent(false);//Aqui se declara el booleano como falso
    };

    //Se usa parse para convertir en integer los valores que necesitamos
    let typeInt = parseInt(type, 10)
    let amountInt = parseInt(amount, 10)

    //Aqui se almacena los valores en el localstorage para llamarlos mas adelante
    localStorage.setItem('producto', product)
    localStorage.setItem('type', typeInt)
    localStorage.setItem('amount', amountInt)
    localStorage.setItem('image', image)
    localStorage.setItem('date', date)


    return (
        <>
            {ShowComponent ? (/*En caso de que el booleano sea verdadero, se mostrara el Forms a continuacion*/
                <div className="mt-3">
                    <Form>
                        <div >
                            <div className="row" >

                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Producto</label>{/*Aqui se encuentra el input para el producto que se uso el gasto*/}
                                        <input type="text" className="form-control" placeholder="Producto" onChange={e => setProduct(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Tipo</label>{/*Aqui se encuentra el input para el tipo de producto que se uso el gasto*/}
                                        <select className="form-select" aria-label="Default select example" onChange={e => setType(e.target.value)}>
                                            <option selected disabled value="">Elige una opcion</option>
                                            <option value="1">Comida</option>
                                            <option value="2">Hospedaje</option>
                                            <option value="3">Transporte</option>
                                            <option value="4">Personal</option>
                                            <option value="5">Materiales</option>
                                            <option value="6">Otros</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Monto</label>{/*Aqui se encuentra el input para el monto del gasto que se realizo*/}
                                        <input type="integer" className="form-control" placeholder="Monto" onChange={e => setAmount(e.target.value)} />
                                    </div>
                                </div>
                            </div>

                            <div className="my-4"></div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="asda">Ticker de compra (PNG)</label>{/*Aqui se sube una imagen en formato png de la factura*/}
                                    <div className="input-group mb-3">
                                        <input class="form-control" type="file" onChange={handleFileUpload} required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="asda">Factura digital (XML)</label>{/*Aqui se sube un archivo en formato xml de la factura*/}
                                    <div className="input-group mb-3">
                                        <input className="form-control" type="file" required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="asda">Fecha de Compra</label>{/* Aqui se ingresa la fecha del gasto que se realizo*/}
                                    <div className="input-group mb-3">
                                        <input type="date" className="form-control" placeholder="Fecha de Compra" aria-label="Fecha de Compra" aria-describedby="basic-addon2" onChange={e => setDate(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-danger" onClick={DeleteLine}>Borrar</button>
                        </div>
                        <hr />
                    </Form>
                </div>
                /*En caso de que sea falso el booleano, no se mostrara nada, lo que seria igual a eliminar el Form*/
            ) : null}
        </>
    );
}  