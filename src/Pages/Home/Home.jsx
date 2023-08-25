import React from 'react'
import { register_get } from '../Store/registerSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
function Home() {
const dispatch = useDispatch();

  useEffect(() => {
    console.log(window.location.origin)
    // We will add this in the Home page as Home page is rendered first so teh data will be fetched first
    dispatch(register_get());

  } ,[] )

  return (
    <div>Home</div>
  )
}

export default Home