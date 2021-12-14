import React from 'react'
import { useEffect, useState } from 'react'
import CartWidget from './Widget/CartWidget'
import { getCategories } from './Productos'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categories => {
          setCategories(categories)
        })
      },[])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to={'/'}><h1 className="navbar-brand" href="/#">AllBlack</h1></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                {categories.map(cat => <Link key={cat.id} className='Option' to={`/category/${cat.id}`}>{cat.description}</Link>)}
                <CartWidget/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar

