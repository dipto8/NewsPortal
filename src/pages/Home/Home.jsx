import React from 'react'
import Navbar from '../shared/Navbar/Navbar'
import Header from '../shared/Header/Header'
import LeftNav from '../shared/LeftNav/LeftNav'
import RightNav from '../shared/RightNav/RightNav'
import BreakingNews from './BreakingNews'


export default function Home() {
  return (
    <div className=''>
        <Header></Header>  
        <BreakingNews></BreakingNews>
        <Navbar></Navbar>
        
        <div className=" grid grid-cols-1  md:grid-cols-4 gap-6">
            <div><LeftNav></LeftNav></div>
            <div className='md:col-span-2'> Comming Soon!</div>
            <div><RightNav></RightNav></div>
        </div>
      
    </div>
  )
}
