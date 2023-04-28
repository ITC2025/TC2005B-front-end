import React, { forwardRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import '../../styles/gastos.css';
import { HiPlus } from "react-icons/hi";
import { BiMoney } from "react-icons/bi";
import { getFormData } from "../../utils/getApiData";

function saveButton(){
    getFormData();
}

function Gastos({onAddInput}) {
    /* Se declaran las constantes y los elementos del form*/
    const [formGasto, setFormGasto] = useState([{
        producto: "",
        tipo: "",
        monto: "",
        imagen: {},
        xml: {},
        fecha: ""

    }]);

    const handleFileUpload = (event, index) => {
        const file = event.target.files[0]; // Obtiene el primer archivo cargado
        const reader = new FileReader(); // Crea una instancia de FileReader

        // Esta funcion es para cuando el archivo se carga, este se convierte en Blob
        reader.onload = () => {
            const blob = new Blob([reader.result], { type: file.type });

            if (file.type === 'text/xml') {/*Si el archivo es de tipo xml se escribira sobre el atributo xml del formGasto */
                setFormGasto(
                    formGasto.map((v, i) =>
                        i === index ? { ...v, xml: blob } : v,
                    )
                )
            }
            else {
                setFormGasto(
                    formGasto.map((v, i) =>
                        i === index ? { ...v, imagen: blob } : v,

                    )
                )
            }
        };


        reader.readAsArrayBuffer(file); // Lee el archivo como un ArrayBuffer
    };
    const DeleteLine = (_, index) => {//Esta funcion sirve como Renderiacion condicional

        setFormGasto(formGasto.filter((_, i) => i !== index))

    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formGasto);
    };

    const handleaddForm = () => {
        const values = [...formGasto];
        values.push({
            producto: "",
            tipo: "",
            monto: "",
            imagen: {},
            xml: {},
            fecha: ""
        })
        setFormGasto(values)
    }

    const sendValuesToParent = () => {
        onAddInput(formGasto);
    };

    return (
        <>
            <div className="mt-3">
                <Form>
                    {formGasto.map((form, index) => {
                        return (<div key={index}>
                            <div className="row" >
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Producto</label>{/*Aqui se encuentra el input para el producto que se uso el gasto*/}
                                        <input type="text" name="producto" className="form-control" placeholder="Producto" value={formGasto.producto} onChange={(e) =>
                                            setFormGasto(
                                                formGasto.map((v, i) =>
                                                    i === index ? { ...v, producto: e.target.value } : v
                                                )
                                            )
                                        } required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Tipo</label>{/*Aqui se encuentra el input para el tipo de producto que se uso el gasto*/}
                                        <select className="form-select" name='tipo' aria-label="Default select example" onChange={(e) =>
                                            setFormGasto(
                                                formGasto.map((v, i) =>
                                                    i === index ? { ...v, tipo: e.target.value } : v
                                                )
                                            )} required>
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
                                        <input type="number" name="monto" className="form-control" placeholder="Monto" value={formGasto.monto} onChange={(e) =>
                                            setFormGasto(
                                                formGasto.map((v, i) =>
                                                    i === index ? { ...v, monto: e.target.value } : v
                                                )
                                            )
                                        } required />
                                    </div>
                                </div>
                            </div>

                            <div className="my-4"></div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="asda">Ticker de compra (PNG)</label>{/*Aqui se sube una imagen en formato png de la factura*/}
                                    <div className="input-group mb-3">
                                        <input class="form-control" name="imagen" type="file" onChange={e => handleFileUpload(e, index)} required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="asda">Factura digital (XML)</label>{/*Aqui se sube un archivo en formato xml de la factura*/}
                                    <div className="input-group mb-3">
                                        <input className="form-control" type="file" required onChange={e => handleFileUpload(e, index)} />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="asda">Fecha de Compra</label>{/* Aqui se ingresa la fecha del gasto que se realizo*/}
                                    <div className="input-group mb-3">
                                        <input type="date" name="fecha" className="form-control" placeholder="Fecha de Compra" aria-label="Fecha de Compra" aria-describedby="basic-addon2" onChange={(e) =>
                                            setFormGasto(
                                                formGasto.map((v, i) =>
                                                    i === index ? { ...v, fecha: e.target.value } : v
                                                )
                                            )
                                        } onBlur={sendValuesToParent} required />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <Button type="submit" className="btn btn-danger" onClick={handleSubmit}>Guardar</Button>{/*Aqui esta puesto el boton que usara la funcion handelSubmit*/}
                                <Button type="reset" className="btn btn-danger" onClick={e => DeleteLine(e, index)}>Borrar</Button>{/*Aqui esta puesto el boton que usara la funcion DeleteLine*/}
                            </div>
                            <hr />
                        </div>)
                        
                    })}
                    
                    <div className="d-flex justify-content-center" >
                        <Button variant="danger" id="button" onClick={handleaddForm}>
                            <BiMoney id="iconMoney"/>
                            <label> AGREGAR GASTO </label>
                            {/*Este boton sirve para usar la funcion addForm*/}
                            <HiPlus />
                        </Button>
                    </div>
                </Form>
            </div>

        </>
    );
}

export default React.memo(Gastos);