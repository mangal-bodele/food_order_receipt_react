import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Delete() {
  const [user, setUser] = useState({})
  const navi= useNavigate()
  const {userId} = useParams()

  function fetchdata(){
    const result = axios.get(`http://localhost:5000/users/${userId}/`)
    setUser(result.data)
  }
  function deleteUser(){
    axios.delete(`http://localhost:5000/users/${userId}/`)
    navi('/Show')
  }
  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div className='container col-6 border border-3 p-3 mt-5'>
        <center><h1>DELETE CONFIRMATION</h1>
        <h3>do you really want to delete <span></span>record?</h3>
        <button onClick={deleteUser}>YES</button>&nbsp;
        <NavLink to='/Show'>
          <button>NO</button>
        </NavLink>
        </center>
    </div>
  )
}

export default Delete