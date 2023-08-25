import React from 'react'
import { register_get } from '../Store/registerSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function Home() {
const dispatch = useDispatch();

  useEffect(() => {
    console.log(window.location.origin)
    // We will add this in the Home page as Home page is rendered first so teh data will be fetched first
    dispatch(register_get());

  } ,[] )

  return (<>

    <div>Home</div>
    <br/>
    <br/>

    <h1> {'{ Default Credentials }'}</h1>
    <h3>Name:"Ahsan Bilal"</h3>
    <h3>Password:"test"</h3>
    <br/>
    <br/>
    <br/>
    <h4>Please Follow this link to Check all Registered User</h4>
    <Link target='_blank' to="https://my-json-server.typicode.com/AhsanBilal7/login-json-server-Redux/user">This Link</Link>
    <h4>This App is used to Practice REDUX with React Persist</h4>


  </>
  )
}

export default Home