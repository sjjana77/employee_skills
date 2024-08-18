import React from 'react';
import { EmployeeContext } from './EmployeeContext';

const withSkills = (Component) => {
    return (props) => (
        <EmployeeContext.Consumer>
            {({ selectedSkills }) => <Component {...props} skills={selectedSkills} />}
        </EmployeeContext.Consumer>
    );
};

export default withSkills;
