import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Form, Col, Row, Container, Card } from "react-bootstrap"
import Product from './Component/Product'

  const ProductsApp = () => {

  return (
    <>
      <div>
        <h2>List of Products</h2>
      </div>
      <Product/>
    </>
  )
}

export default ProductsApp
