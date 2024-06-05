import { useState } from "react";
import CarouselComp from "../components/CarouselComp";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAppContent } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
export default function PreviewSelection() {
    const { carData, carSelections, isLoading } = useAppContent();
    const [validated, setValidated] = useState(false);
    const [user, setUser] = useState({
        name: null,
        email: null,
        phone: null,
        creditCard: null,
        comment: null
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setUser(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    } 
    
    if (!carData || isLoading) {
        return <p role="alert">Loading</p>;
      } 
      const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;        
        if (form.checkValidity() === false) {          
          event.stopPropagation();
        }        
        setValidated(true);
        console.log({carData, user})
        navigate("/confirmation")
      };
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mb-3">
                    <h1 className="text-center">Preview your order</h1>
                </div>
                <div className="col-12 col-sm-4">
                <CarouselComp
                    data={carData.pictures}
                    selection={carSelections}
                    tabSelection={"front"}
                />
                </div>
                <div className="col-12 col-sm-8">
                    <p>All fields are required unless </p>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3"  controlId="formBasicName">                            
                            <Form.Control type="text" name="name" placeholder="EG 'John Smith III'" aria-describedby="fullNameHelp nameError" required onChange={handleChange}/>
                            <Form.Text id="fullNameHelp" className="text-muted">
                                As it appears in your id.
                            </Form.Text>
                            <Form.Control.Feedback type="invalid" id="nameError">Field Name is required</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" aria-describedby="emailHelp emailError" required onChange={handleChange} />
                            <Form.Text id="emailHelp" className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                            <Form.Control.Feedback type="invalid" id="emailError">Field Email is required</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formTelephone">
                            <Form.Label>Your phone</Form.Label>
                            <Form.Control type="phone" placeholder="140845645630" name="phone" aria-describedby="phoneHelp phoneError" required onChange={handleChange}/>
                            <Form.Text id="phoneHelp" className="text-muted">
                                Enter your phone number including your country and area code.
                            </Form.Text>
                            <Form.Control.Feedback type="invalid" id="phoneError">
                                Please provide a valid telephone number.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCreditCard">
                            <Form.Label>Credit Card Number</Form.Label>
                            <Form.Control type="phone" placeholder="xxxx xxxx xxxx xxxx" aria-describedby="creditError" required name="creditCard" onChange={handleChange}/>
                            <Form.Control.Feedback type="invalid" id="creditError">
                                Please provide a valid creditCard.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="textArea">
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows={3} required aria-describedby="commentError" name="comment" onChange={handleChange}/>
                            <Form.Control.Feedback type="invalid" id="commentError">
                                Comment is required.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>        
      );
}