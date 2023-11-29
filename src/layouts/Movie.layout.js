import React, { Component } from 'react'
import MovieNavbar from '../components/Navbar/movieNavbar.component'

const MovieLayoutHoc =
(Component) =>
({...props}) => {
    return (
        <div>
            <MovieNavbar />
            <Component {...props} />
            <div>Footer</div>
        </div>
    )
}

export default MovieLayoutHoc
