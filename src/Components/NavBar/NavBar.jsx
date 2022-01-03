import React from 'react'
import { useEffect, useState } from 'react'
import CartWidget from '../Widget/CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import "./NavBar.css";
import { getCategories } from '../Productos'

const NavBar = () => {
    const [categories, setCategories] = useState([])
    const {getCount} = useContext(CartContext);

    useEffect(() => {
        getCategories().then(categories => {
          setCategories(categories)
        })
      },[])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to={'/'}><h1 className="navbar-brand">AllBlack</h1></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {categories.map(cat => <Link key={cat.id} className='Option' to={`/category/${cat.id}`}>{cat.description}</Link>)}
                    </div>
                    <div style ={{position: "absolute", right: "20px"}}>
                        <Link to = "/cart"><CartWidget/></Link>
                        <div 
                            style={{
                            width: '22px', borderRadius: "10px", backgroundColor: "green",
                            position: "absolute", top: "-4px", right: "-1px", textAlign: "center", alignItems: "center"
                         }}>
                            <span style={{
                                color: 'white',
                         }}>{getCount()}</span>
                        </div>
                    </div>
            </div>
        </nav>
    )
}

export default NavBar

