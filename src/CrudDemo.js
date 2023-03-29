import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CrudDemo = () => {

    const API_URL = 'http://localhost:8080/api/v1/person';

    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get(API_URL).then(response => {
            if(response.status === 200) {
                setPeople(response.data);
            }
        })
    },[]);

    const Table = (props) => {
        return(
            <div>
                <table className='table table-light table-striped table-hover'>
                    <TableHeader />
                    <TableRow people={people} />
                </table>
            
            </div>
        );
    }
    
    const TableHeader = () => {
        return(
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
        );
    }
    
    const TableAction = () => {
        return(
            <div>   
                    <button className='btn btn-primary me-1'>Details</button>
                    <button className='btn btn-danger me-1'>Delete</button>
                    <button className='btn btn-warning me-1'>Edit</button>
            </div>
        );
    }
    
    const TableRow = (props) => {
        
        return(
            <tbody>
                {props.people.map(people => {
                    const row = (
                        <tr key={people.id}>
                            <td>{people.id}</td>
                            <td>{people.firstName} {people.lastName}</td>
                            <td>{people.email}</td>
                            <td><TableAction people={people} /></td>
                        </tr>
                    );
                    return row;
                })}
            </tbody>
    )}
    
    return (
        <div>
            <div className="bg-dark text-white p-3 mt-5">Person List</div>
            {/* <AlertMessage message={alert.message} type={alert.type} /> */}
            <Table people={people} />
        </div>
    );
};


export default CrudDemo;