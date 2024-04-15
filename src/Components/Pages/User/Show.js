import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {Trash ,PencilSquare } from 'react-bootstrap-icons'


function Show() {
  const [users, setUser] = useState([])

  async function fetchdata(){
    const result = await axios.get('http://localhost:5000/users')
    setUser(result.data)
  }
  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div className='container border border-4 mt-3 p-3'>
        <table className='col-12'>
          <thead>
            <tr className='bg-dark text-white'>
              <th>DISH ID</th>
              <th>DISH NAME</th>
              <th>DISH TYPE</th>
              <th>REASTAURANT</th>
              <th>CITY</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody className='bg-warning'>
            {
              users.map((obj)=>{
                return(
                  <tr>
                    <td>{obj.dishid}</td>
                    <td>{obj.dish}</td>
                    <td>{obj.type}</td>
                    <td>{obj.restaurant}</td>
                    <td>{obj.city}</td>
                    <td>{obj.price}</td>
                    <td>
                      <NavLink to={`/Update/${obj.id}`}><button className='btn-sm btn btn-danger'>Update<Trash/></button>&nbsp;</NavLink>
                      <NavLink to={`/Delete/${obj.id}`}><button className='btn-sm btn btn-danger'>Delete<PencilSquare/></button></NavLink>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default Show