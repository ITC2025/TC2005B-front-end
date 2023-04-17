import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import TableStyle from '../../styles/TableStyle.css'

export const TableTravelAllowance = () => {
  // Configurar hooks
  const [travelAllowance, setTravelAllowance] = useState([])
  const [filtertravelAllowance, setFilterTravelAllowance] = useState([])

  // Funcion para mostrar datos con fetch
  const URL = 'https://gorest.co.in/public/v2/users'

  const getTravelAllowance = async () => {
    const res = await fetch(URL)
    const data = await res.json()
    setTravelAllowance(data)
    setFilterTravelAllowance(data)
    console.log(data)
  }

  useEffect(() => {
    getTravelAllowance()
  }
  , [])

  // Funcion para filtrar datos
  const handleFilter = (e) => {
    const newData = filtertravelAllowance.filter(row => row.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setTravelAllowance(newData);
  }
    
  // configuracion de columnas
  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true
    },
    {
      name: 'NAME',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Project',
      selector: row => row.email,
      sortable: true
    },
    // {
    //   name: 'Description',
    //   selector: row => row.gender,
    //   sortable: true
    // },
    // {
    //   name: 'Total',
    //   selector: row => row.status,
    //   sortable: true
    // },
    // {
    //   name: 'Status',
    //   selector: row => row.status,
    //   sortable: true
    // },
    // {
    //   name: 'Actions',
    //   
    //   sortable: true
    // }
  ]

  // mostrar la tabla
  return (
    <div className='Container text-center'>
      <div className='text-end'> 
      <input type="text" placeholder='Search' onChange={handleFilter}/>
      </div>

      <DataTable
      columns={columns} 
      data={travelAllowance}
      pagination
      fixedHeader
      />
    </div>
  )
}
