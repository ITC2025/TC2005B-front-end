import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import TableStyle from '../../styles/TableStyle.css'

export const TableTravelAllowance = () => {
  // Configurar hooks
  const [travelAllowance, setTravelAllowance] = useState( [] )

  // Funcion para mostrar datos con fetch
  const URL = 'https://gorest.co.in/public/v2/users'
  const getTravelAllowance = async () => {
    const res = await fetch(URL)
    const data = await res.json()
    setTravelAllowance(data)
    console.log(data)
    
  }
  useEffect(() => {
    getTravelAllowance()
  }
  , [])

  // configuracion de columnas
  const columns = [
    {
      name: 'ID',
      selector: row => row.id
    },
    {
      name: 'NAME',
      selector: row => row.name
    },
    {
      name: 'Project',
      selector: row => row.email
    },
  ]
  // mostrar la tabla
  return (
    <DataTable
      columns={columns} 
      data={travelAllowance}
      pagination
      />
  )
}
