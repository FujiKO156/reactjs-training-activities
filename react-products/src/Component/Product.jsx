
import React from 'react';
import { Form, Card, Row, Col, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Icon from '@mui/material/Icon';
import { fontSize, width } from '@mui/system';
import { useEffect } from 'react';


const Product = () =>{

    const [products, setProducts] = useState([
        { id: 1, name: 'Beer', price: '2.00', image: 'src/img-item/beer.jpg', description: 'A refreshing beer' , button: 'Add to Cart', stock: '10', totalAmount: 0},
        { id: 2, name: 'Bulalo', price: '7.00', image: 'src/img-item/bulalo.jpg', description: 'A hearty bulalo soup' , button: 'Add to Cart', stock: '5', totalAmount: 0},
        { id: 3, name: 'Coke', price: '1.00', image: 'src/img-item/coke.jpg', description: 'A classic cola drink' , button: 'Add to Cart', stock: '25', totalAmount: 0},
        { id: 4, name: 'Rice', price: '0.50', image: 'src/img-item/rice.jpg', description: 'Steamed rice' , button: 'Add to Cart', stock: '50', totalAmount: 0},
        { id: 5, name: 'Pasta', price: '5.00', image: 'src/img-item/pasta.png', description: 'Delicious pasta dish' , button: 'Add to Cart', stock: '15', totalAmount: 0},
        { id: 6, name: 'Macaroni', price: '5.00', image: 'src/img-item/macaroni.jpg', description: 'Creamy macaroni salad' , button: 'Add to Cart', stock: '20', totalAmount: 0},
        { id: 7, name: 'Steak', price: '25.00', image: 'src/img-item/steak.jpg', description: 'Juicy grilled steak', button: 'Add to Cart', stock: '10', totalAmount: 0},
        { id: 8, name: 'Fish Fillet', price: '15.00', image: 'src/img-item/fish-fillet.jpg', description: 'Tender fish fillet' , button: 'Add to Cart', stock: '17', totalAmount: 0},
        { id: 9, name: 'Mango Shakes', price: '5.00', image: 'src/img-item/mango-shake.jpg', description: 'Refreshing mango shake' , button: 'Add to Cart', stock: '8', totalAmount: 0},
    ]);

    const [order, setOrder] = useState({})
    const handleQuantityClick = (productId, changeCount) => {
        const currentQuantity = order[productId] || 0; 
        const newQuantity = Math.max(0, Math.min(products.find(p => p.id === productId).stock, currentQuantity + changeCount));
        setOrder(prev => ({
            ...prev,
            [productId]: newQuantity
        }));
    };

    const [cart, setCart] = useState([]);
    const [cartValue,setCartValue] = useState(false)

    const addCart = ({productId, productName}) => {

       const selectedProduct = products.find(p => p.id === productId);
       const productOrder = order[productId] || 0;

       //check product if already exists in cart
       const isProductInCart = cart.some(item => item.id === productId)

       if(productOrder<1){
        alert("Please enter order in " + productName)
       }
       else if(isProductInCart)
       {
            setCart(prevCart => 
                prevCart.map(item =>
                    item.id === productId ? {
                    ...item,
                        order: item.order + productOrder,
                        totalAmount: ((item.order + productOrder) * item.price).toFixed(2)
                    }
                    :item
                )
            )
       }
       else{
            setCart(prevCart => [
                ...prevCart,
                {
                    id: selectedProduct.id,
                    image: selectedProduct.image,
                    name: selectedProduct.name,
                    order: productOrder,
                    price: selectedProduct.price,
                    stock: selectedProduct.stock,
                    totalAmount: (selectedProduct.price * productOrder).toFixed(2)
                }
            ]);

            //reset
            setOrder(prevOrder => ({
                ...prevOrder,
                [productId]: 0,
            }));
       }

    }

      useEffect(() => {
            console.log('Cart updated:', cart);
        }, [cart]); 
    
    return (
        <form >
                
                <Row>
                    <Col xs={9}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Row>
                                    {products.map(product => (
                                        <Col key={product.id} md={4} data-id={product.id}>
                                            <Card className="mb-3">
                                                <Card.Img variant="top" src={product.image} style={{ objectFit: 'cover', height: '300px', width: '100%' }} />
                                                <Card.Body>
                                                    <Card.Title>{product.name}</Card.Title>
                                                    <Card.Text>Price: ${product.price}</Card.Text>
                                                    <Card.Text>Description: {product.description}</Card.Text>
                                                    <Card.Text>Current Stock: {product.stock}</Card.Text>

                                                    <Card.Text align="center">
                                                        <button type="button" className='btnOrderCountNeg' onClick={()=>handleQuantityClick(product.id,-1)}>-</button>
                                                        <Form.Label>Quantity</Form.Label>
                                                        <button type="button" className='btnOrderCountPlus' onClick={()=>handleQuantityClick(product.id,1)}>+</button>
                                                        <Form.Control 
                                                            type="number" 
                                                            name="orderCount" 
                                                            value={order[product.id] || 0} 
                                                            min="0" 
                                                            max={product.stock} 
                                                            readOnly
                                                            style={{ width: '30%', textAlign: 'center' }} />
                                                    </Card.Text>
                                                    <button type="button" onClick={()=>addCart({productId: product.id,productName: product.name})} className="btn btn-primary">{product.button}</button>

                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={3}>
                        <Container>
                           <Card >
                                <Card.Header style={{fontSize:'40px'}}>
                                    Order List
                                </Card.Header>
                                <Card.Body className="overflow-auto" style={{maxHeight:'150vh'}}>
                                    {
                                        cart.map((item) => (
                                            <Card key={item.id} style={{margin:'20px', padding:'50px'}}>
                                                <Row >
                                                    <Card.Img variant='top' src={item.image}></Card.Img>
                                                    <Card.Body>
                                                        <Card.Title style={{fontSize:'25px'}}>{item.name}</Card.Title>
                                                        <Card.Text>Order: {item.order}</Card.Text>
                                                        <Card.Text>Price: {item.price}</Card.Text>
                                                        <Card.Text>Total: Php {item.totalAmount}</Card.Text>
                                                    </Card.Body>
                                                </Row>
                                            </Card>
                                        ))
                                    }
                                    
                                </Card.Body>
                                 <Row>
                                    {
                                        cart.length > 0 ? (
                                            <Button>Place Order</Button>  
                                        ):(
                                            <>
                                                <div align="center">No order found</div>
                                            </>
                                        )
                                    }
                                    
                                </Row>
                           </Card>
                          
                        </Container>
                    </Col>
                </Row>
        </form>
    );
}

export default Product;