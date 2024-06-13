import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('https://calm-youth-production.up.railway.app/api/employees')
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error('Error fetching the employees!', error);
            });
    }, []);

    return (
        <div>
            <h1>Employee List</h1>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        {employee.firstName} {employee.lastName} - {employee.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
