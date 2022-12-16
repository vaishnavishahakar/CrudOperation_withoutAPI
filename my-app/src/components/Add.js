import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {v4 as uuid} from "uuid";
import { useNavigate } from 'react-router-dom';


function Add() {
    
    const[firstname, setFirstName] = useState('');
    const[lastname, setLastName] = useState('');
    const[age, setAge] = useState('');
    const[address, setAddress] = useState('');
    const[city, setCity] = useState('');
    const[pincode, setPinCode] = useState('');
    const[state, setState] = useState('');
    const[country, setCountry] = useState('');
    const[mobile, setMobile] = useState('');
    const[email, setEmail] = useState('');

    let history = useNavigate();

    const handleSubmit =(e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        // let a = Employees;
        // a.FirstName = firstname;
        // a.LastName = lastname;
        // a.Age = age;
        // a.Address = address;
        // a.City = city;
        // a.PinCode = pincode;
        // a.State = state;
        // Country = country;
        // Mobile = mobile;
        // Email = email;
        


        Employees.push({id: uniqueId, FirstName : firstname , LastName : lastname, Age: age , Address: address, City : city , State : state, Country : country , Mobile : mobile, Email : email, PinCode: pincode });

        console.log(Employees.value)

        history('/');
    }

    return <div>
        <Form className='d-grid gap-2' style={{margin:"15rem"}}>
            <Form.Group className='mb-3' controlId='formFirstName'>
                <Form.Control type='text' placeholder='Enter FirstName' required onChange={(e) => setFirstName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formLastName'>
                <Form.Control type='text' placeholder='Enter LastName' required onChange={(e) => setLastName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formAge'>
                <Form.Control type='text' placeholder='Enter Age' required onChange={(e) => setAge(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formAddress'>
                <Form.Control type='text' placeholder='Enter Address' required onChange={(e) => setAddress(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formCity'>
                <Form.Control type='text' placeholder='Enter City' required onChange={(e) => setCity(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formPinCode'>
                <Form.Control type='text' placeholder='Enter PinCode' required onChange={(e) => setPinCode(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formState'>
                <Form.Control type='text' placeholder='Enter State' required onChange={(e) => setState(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formCountry'>
                <Form.Control type='text' placeholder='Enter Country' required onChange={(e) => setCountry(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formMobile'>
                <Form.Control type='text' placeholder='Enter Mobile' required onChange={(e) => setMobile(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formEmail'>
                <Form.Control type='text' placeholder='Enter Email' required onChange={(e) => setEmail(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form>
        </div>;
}

export default Add;