import React, { useEffect, useState } from 'react'
import MainStyle from './mainCSS.module.css'

function MainIndex() {
  const [fromDetailData, setFormData] = useState({
    fullName: '',
    userID: '',
    email: '',
    pwd: '',
    phone: '',
  })

  useEffect(()=>{
    console.log(fromDetailData);
  },[fromDetailData])

  const formSubmit =(fromData)=>{
    fromData.preventDefault();
    console.log(fromData)
  }

  const changeHandler =(e)=>{
    console.log(e.target.value)
    setFormData({ ...fromDetailData, [eventFor]: e.target.value })
  }

  return (
    <div className={MainStyle.container}>
      <span className={MainStyle.title}>Create You Account for Your Usage?</span>
      <form className={MainStyle.form} onSubmit={formSubmit} >
        <label>Name</label>
        <input type="text" name='fullName' placeholder="Enter Your Name" value={fromDetailData.fullName} onChange={(e) => changeHandler('fullName')} />
        <label>User Name</label>
        <input type="text" name='userId' placeholder="New UserName" value={fromDetailData.userID} onChange={(e) => changeHandler('userId')} />
        <label>Email</label>
        <input type="email" name='email' placeholder="example@example.com" value={fromDetailData.email} onChange={(e) => changeHandler('email')}/>
        <label>Password</label>
        <input type="password" name='pwd' placeholder="Enter Your Password" value={fromDetailData.pwd} onChange={(e) => changeHandler('pwd')}/>
        <label>Mobile Number</label>
        <input type="tel" name='phone' placeholder="Enter Your Mobile Number" value={fromDetailData.phone} onChange={(e) => changeHandler('phone')}/>
        <button type="submit" className={MainStyle.sumbitButton} >Create Account ?</button>
      </form>
    </div>
  )
}

export default MainIndex
