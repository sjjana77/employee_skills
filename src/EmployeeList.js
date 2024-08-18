import React, { useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@mui/material';

const EmployeeList = () => {
    const { employees, selectSkills } = useContext(EmployeeContext);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map((employee) => (
                        <TableRow key={employee.id}>
                            <TableCell>{employee.name}</TableCell>
                            <TableCell>{employee.age}</TableCell>
                            <TableCell>
                                <Button variant="contained" onClick={() => selectSkills(employee.skills)}>
                                    View Skills
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EmployeeList;
