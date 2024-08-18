import React, { useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';
import { Typography, List, ListItem } from '@mui/material';

const SkillsDisplay = () => {
  const { selectedSkills } = useContext(EmployeeContext);

  return (
    <div>
      <Typography variant="h6">Skills:</Typography>
      <List>
        {selectedSkills.map((skill, index) => (
          <ListItem key={index}>{skill}</ListItem>
        ))}
      </List>
    </div>
  );
};

export default SkillsDisplay;
