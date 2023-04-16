import React from "react";
import { Table, Button, Badge } from "react-bootstrap";
import "../../styles/ItemTableAllowance.css"

function ItemTravelAllowance(props) {

  return (
    <tr>
      <td>id</td> 
      <td>date</td>
      <td>project</td>
      <td>description</td>
      <td>amount</td>
      <td>
        <Badge variant="success">state</Badge>
      </td>
      <td>
        <Button variant="outline-primary">Edit</Button>
      </td>
    </tr>
  );
}

export default ItemTravelAllowance;
