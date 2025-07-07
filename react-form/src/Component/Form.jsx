import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Form, Col, Row, Container, Card } from "react-bootstrap"


const FormPage = () => {

    const [getData, setGetData] = useState(null)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '' 
    });

    const inputChange = (e) =>{
        const {name, value} = e.target;
       setFormData((prevData) => ({
            ...prevData, [name]: value }));
    }

     const submitBtn = (event) => {
         event.preventDefault();
        setGetData(formData);
        
    }

    return(
        <>
            <form>
                <Container>
                    <Row>
                        <Col>
                            <Card className="mb-3">
                                <Card.Body>
                                    <Form.Group controlId="formFirstName" >
                                        <div align="left">
                                            <Form.Label >First Name : </Form.Label>
                                        </div>
                                        
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Enter First Name" 
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={inputChange} />
                                    </Form.Group>

                                    <Form.Group controlId="formLastName">
                                        <div align="left">
                                            <Form.Label>Last Name : </Form.Label>
                                        </div>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Enter Last Name" 
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={inputChange} />
                                    </Form.Group>

                                    <Form.Group controlId="formEmail">
                                        <div align="left">
                                            <Form.Label>Email : </Form.Label>
                                        </div>
                                        <Form.Control 
                                            type="email" 
                                            placeholder="Enter Email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={inputChange} />
                                    </Form.Group>

                                    <Form.Group controlId="formPassword">
                                        <div align="left">
                                            <Form.Label>Password : </Form.Label>
                                        </div>
                                        <Form.Control 
                                            type="password" 
                                            placeholder="Enter Password" 
                                            name="password"
                                            value={formData.password}
                                            onChange={inputChange} />
                                    </Form.Group>

                                    <Form.Group className="mt-3">
                                        <Button 
                                            variant="primary" 
                                            type="submit" 
                                            onClick={submitBtn}>
                                            Submit
                                        </Button>       
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="mb-3">
                                <Card.Body>
                                    <div className="align-left"><h3>Form Data</h3></div>
                                    <div className="align-left">
                                       {getData ? (
                                            <ul>
                                                <li>First Name: {getData.firstName}</li>
                                                <li>Last Name: {getData.lastName}</li>
                                                <li>Email: {getData.email}</li>
                                                <li>Password: {getData.password}</li>
                                            </ul>
                                        ) : (
                                            <p>No data submitted yet.</p>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </form>

        </>

    )
}

export default FormPage