import React, { createContext, useState } from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [employees] = useState([
        { id: 1, name: 'Emp 1', age: 25, skills: ['JavaScript', 'React', 'Node.js'] },
        { id: 2, name: 'Emp 2', age: 30, skills: ['Python', 'Django', 'Machine Learning'] },
        { id: 3, name: 'Emp 3', age: 22, skills: ['Data science', 'Cloud Computing', 'Machine Learning'] },
        { id: 4, name: 'Emp 4', age: 31, skills: ['Communication', 'Networking', 'Devops'] },
        { id: 5, name: 'Emp 5', age: 33, skills: ['C', 'C++', 'Data Structures'] },
    ]);

    const [selectedSkills, setSelectedSkills] = useState([]);

    const selectSkills = (skills) => {
        setSelectedSkills(skills);
    };

    return (
        <EmployeeContext.Provider value={{ employees, selectedSkills, selectSkills }}>
            {children}
        </EmployeeContext.Provider>
    );
};
