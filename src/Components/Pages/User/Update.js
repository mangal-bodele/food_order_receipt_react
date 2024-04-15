import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


function Update() {
  const {register,handleSubmit,setValue} = useForm()
  const {userId}= useParams()
  const navi = useNavigate()

  async function fetchdata(){
    const result = await axios.get(`http://localhost:5000/users/${userId}`)
    setValue('dishid',result.data.dishid)
    setValue('dish',result.data.dish)
    setValue('type',result.data.type)
    setValue('restaurant',result.data.restaurant)
    setValue('city',result.data.city)
    setValue('price',result.data.price)
  }
  function saveData(data){
    axios.put(`http://localhost:5000/users/${userId}`,data)
    navi('/Show')
  }
  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div className='container border border-4 col-5 bg-info'>
      <center><h1><u>Food order Receipt</u></h1></center>
        <form onSubmit={handleSubmit(saveData)} className =' m-auto p-3 col-5 '>
          <label htmlFor='i'>Enter food id:</label>
          <input type='number' id='i' {...register('dishid')}/>
          <br />
          <label htmlFor='n'>Enter dish name</label>
          <input type='text' id='n' {...register('dish')}/>
          <br />
          <label htmlFor='t'>Enter food type:</label>
          <input type='text' id='t' {...register('type')}/>
          <br />
          <label htmlFor='r'>Enter Restaurant Name: </label>
          <input type='text' id='r' {...register('restaurant')}/>
          <br />
          <label htmlFor='c'>Enter City</label>
          <input type='text' id='c' {...register('city')}/>
          <br />
          <label htmlFor='p'>Enter Price:</label>
          <input type='number' id='p' {...register('price')}/>
          <br />
          <input type='submit' className='btn btn-success'/>
          <input type='reset' className='btn btn-warning float-end'/>
        </form>
    </div>
  )
}

export default Update