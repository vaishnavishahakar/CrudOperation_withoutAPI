import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import { useNavigate } from 'react-router-dom';

function Edit() {
    const [id, setId] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPinCode] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");

    let history = useNavigate();

    var index = Employees.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit =(e) => {
        e.preventDefault();

        let a = Employees[index];
        a.FirstName = firstname;
        a.LastName = lastname;
        a.Age = age;
        a.Address = address;
        a.City = city;
        a.PinCode = pincode;
        a.State = state;
        a.Country = country;
        a.Mobile = mobile;
        a.Email = email;

        history('/');
    }

    useEffect(() => {
        setId(localStorage.getItem('Id'))
        setFirstName(localStorage.getItem('FirstName'))
        setLastName(localStorage.getItem('LastName'))
        setAge(localStorage.getItem('Age'))
        setAddress(localStorage.getItem('Address'))
        setCity(localStorage.getItem('City'))
        setPinCode(localStorage.getItem('PinCode'))
        setState(localStorage.getItem('State'))
        setCountry(localStorage.getItem('Country'))
        setMobile(localStorage.getItem('Mobile'))
        setEmail(localStorage.getItem('Email'))
    },[])

    return (
        <Form className='d-grid gap-2' style={{ margin: "15rem" }}>
            <Form.Group className='mb-3' controlId='formFirstName'>
                <Form.Control type='text' placeholder='Enter FirstName' value={firstname} required onChange={(e) => setFirstName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formLastName'>
                <Form.Control type='text' placeholder='Enter LastName' value={lastname} required onChange={(e) => setLastName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formAge'>
                <Form.Control type='text' placeholder='Enter Age' value={age} required onChange={(e) => setAge(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formAddress'>
                <Form.Control type='text' placeholder='Enter Address' value={address} required onChange={(e) => setAddress(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formCity'>
                <Form.Control type='text' placeholder='Enter City' value={city} required onChange={(e) => setCity(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formPinCode'>
                <Form.Control type='text' placeholder='Enter PinCode' value={pincode} required onChange={(e) => setPinCode(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formState'>
                <Form.Control type='text' placeholder='Enter State' value={state} required onChange={(e) => setState(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formCountry'>
                <Form.Control type='text' placeholder='Enter Country' value={country} required onChange={(e) => setCountry(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formMobile'>
                <Form.Control type='number' placeholder='Enter Mobile' value={mobile} required onChange={(e) => setMobile(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formEmail'>
                <Form.Control type='text' placeholder='Enter Email' value={email} required onChange={(e) => setEmail(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
        </Form>
    )

        
}


export default Edit;