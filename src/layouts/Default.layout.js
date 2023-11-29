import React, { Component } from 'react'
import Navbar from "../components/Navbar/navbar.component"

const DefaultLayoutHoc =
(Component)=>
({...props})=>{
    return (
        <div>
            <Navbar />
            <Component {...props} />
            <div>Footer</div>
        </div>
    )
}

export default DefaultLayoutHoc
