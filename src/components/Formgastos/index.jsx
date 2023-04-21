import React from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";

import '../../styles/gastos.css'

export default function Gastos() {
    const [SetShowComponent] = useState(true);
    const DeleteLine = () => {
        SetShowComponent(false);
      };

    return (
        <>
            <div className="mt-3">
                <Form>
                    <div >
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Producto</label>
                                    <input type="text" className="form-control" placeholder="Producto" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Tipo</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected disabled value="">Elige una opcion</option>
                                        <option value="1">Hospedaje</option>
                                        <option value="2">Alimentos</option>
                                        <option value="3">Transporte</option>
                                        <option value="4">Personal</option>
                                        <option value="5">Material</option>
                                        <option value="6">Otros</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Monto</label>
                                    <input type="integer" className="form-control" placeholder="Monto" />
                                </div>
                            </div>
                        </div>

                        <div className="my-4"></div>

                        <div className="row">
                            <div className="col-md-4">
                                <label htmlFor="asda">Ticker de compra (PDF)</label>
                                <div className="input-group mb-3">
                                    <input class="form-control" type="file" onChange={e=> (e.target.files[0])} required/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="asda">Factura digital (XML)</label>
                                <div className="input-group mb-3">
                                    <input class="form-control" type="file" required/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="asda">Fecha de Compra</label>
                                <div className="input-group mb-3">
                                    <input type="date" className="form-control" placeholder="Fecha de Compra" aria-label="Fecha de Compra" aria-describedby="basic-addon2" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary" onClick={DeleteLine}>Borar</button>
                    </div>

                </Form>
            </div>
            <hr />

        </>
    );
}  