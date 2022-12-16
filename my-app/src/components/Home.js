import React, { Fragment } from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {Link,useNavigate} from 'react-router-dom';

function Home() {

    let history = useNavigate();

    const handleEdit = (id, firstname, lastname, age, address, city, pincode, state, country, mobile, email ) => {
        localStorage.setItem('Id',id);
        localStorage.setItem('FirstName',firstname);
        localStorage.setItem('LastName',lastname);
        localStorage.setItem('Age',age);
        localStorage.setItem('Address',address);
        localStorage.setItem('City',city);
        localStorage.setItem('PinCode',pincode);
        localStorage.setItem('State',state);
        localStorage.setItem('Country',country);
        localStorage.setItem('Mobile',mobile);
        localStorage.setItem('Email',email);
    }

    const handleDelete = (id) => {
        var index = Employees.map(function(e){
            return e.id
        }).indexOf(id);

        Employees.splice(index,1);

        history('/');

    }

    return (
        <Fragment>
            <h1 style={{margin:"5rem"}}> User Details </h1>
            <div style={{margin:"5rem"}}>
                <Table striped bordered hover size="lg">
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>PinCode</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Mobile</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                            ?
                            Employees.map((item) => {
                                return(
                                    <tr>
                                        <td>
                                            {item.FirstName}
                                        </td>
                                        <td>
                                            {item.LastName}
                                        </td>
                                        <td>
                                            {item.Age}
                                        </td>
                                        <td>
                                            {item.Address}
                                        </td>
                                        <td>
                                            {item.City}
                                        </td>
                                        <td>
                                            {item.PinCode}
                                        </td>
                                        <td>
                                            {item.State}
                                        </td>
                                        <td>
                                            {item.Country}
                                        </td>
                                        <td>
                                            {item.Mobile}
                                        </td>
                                        <td>
                                            {item.Email}
                                        </td>
                                    
                                        <td>
                                            <Link className='d-grid gap-2' to={'/edit'}>
                                            <Button onClick={() => handleEdit(item.id, item.FirstName, item.LastName, item.Age, item.Address,
                                                item.City, item.PinCode, item.State, item.Country, item.Mobile, item.Email)}>Edit</Button>
                                                 <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                            </Link>  
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link className='d-grid gap-2' to='/create'>
                    <Button size='lg'>Create</Button>
                </Link>
            </div>
        </Fragment>
    )    
}

export default Home;