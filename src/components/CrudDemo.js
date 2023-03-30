import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Redirect, useLocation, useParams, useHistory } from 'react-router-dom';
import Form from './Form';

const CrudDemo = () => {

    const API_URL = 'http://localhost:8080/api/v1/person';

    const [people, setPeople] = useState([]);
    const history = useHistory();
    const [showDetails, setShowDetails] = useState(false);
    const [showTable, setShowTable] = useState(true);

    useEffect(() => {
        axios.get(API_URL).then(response => {
            if(response.status === 200) {
                setPeople(response.data);
            }
        })
    },[people]);

    const Table = (props) => {
        return(
            <>
            {showTable && (
                <div className="bg-dark text-white mt-5">
                <div className='p-3'>Person List</div>
                <table className='table table-light table-striped table-hover'>
                    <TableHeader />
                    <TableRow people={people} />
                </table>
            </div>
            )}
            </>
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
    
    const TableAction = (props) => {

        const clickDetails = () => {
            
            history.push('/details/' + props.people.id)
            setShowTable(false);
            setShowDetails(true);
            
        }

        const clickDelete = () => {
            
            axios.delete(API_URL + '/' + props.people.id).then(response => {
                setPeople('');
            })
        }        

        const clickEdit = () => {}

        return(
            <div>   
                    <button className='btn btn-primary me-1' onClick={clickDetails} >Details</button>
                    <button className='btn btn-danger me-1' onClick={clickDelete} >Delete</button>
                    <button className='btn btn-warning me-1' onClick={clickEdit} >Edit</button>
            </div>
        );
    }
    
    const TableRow = (props) => {
        
        return(
            <tbody>
                {props.people.map(people => {
                    return(
                        <tr key={people.id}>
                            <td>{people.id}</td>
                            <td>{people.firstName} {people.lastName}</td>
                            <td>{people.email}</td>
                            <td><TableAction people={people} /></td>
                        </tr>
                    );
                    
                })}
            </tbody>
    )}

    const PersonDetails = (props) => {
        
        const params = useParams();
        const location = useLocation();
        const [id, setId] = useState(params.id);

        useEffect(() => {
            axios.get(API_URL + '/' + id).then(response => {
                    setPerson(response.data);
            })
        })

        const [person, setPerson] = useState({});
        
        if(id === 0){
            return <Redirect to={{pathname: '/error', state: {message: 'param is not valid!'}}} />
        }

        const handleBackClick = () => {
            setShowDetails(false)
            setShowTable(true)
        }

        return(
            <>
            {showDetails && (
                <div className="card">
                <div className="card-header bg-info text-white">Person Information</div>
                <div className="card-body bg-light">
                    <h3>{person.title}</h3>
                    <p>
                        Id: {person.id} <br />
                        Name: {person.firstName} {person.lastName} <br />
                        Email: {person.email}
                    </p>
                </div>
                <div className="card-footer bg-dark">
                    <button type='button' className='btn btn-outline-danger' onClick={handleBackClick}>Back</button>
                </div>
            </div>
            )}
            </>
        )
    }

    const ErrorComponent = () => {
        const location = useLocation();

        return (
            <>
            Error Component! {location.state.message && (<b>{location.state.message}</b>)}
            </>
        );
    }
    
    return (
        <div>
            {/* <AlertMessage message={alert.message} type={alert.type} /> */}
            <Form people={people} />
            <Table people={people} />
            <PersonDetails people={people} />
        </div>
    );
};


export default CrudDemo;