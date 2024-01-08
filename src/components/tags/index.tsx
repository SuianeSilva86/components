// import React from 'react';
// import { Button } from '@material-ui/core';

// const TagsComponente = () =>  {
//  return(
//   <>

//   </>
//  )
// }

// export default TagsComponente
import React, { useState } from 'react';
import {
  useTheme,
  Theme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
  Chip,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultipleSelect: React.FC = () => {
  const theme = useTheme();
  const [personName, setPersonName] = useState<string[]>([]);
  const [newName, setNewName] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<{ value: string }>) => {
    setNewName(event.target.value);
  };

  const handleAddName = () => {
    if (newName && !personName.includes(newName)) {
      setPersonName([...personName, newName]);
      setNewName('');
    }
  };

  const handleRemoveName = (name: string) => {
    const updatedPersonName = personName.filter((item) => item !== name);
    setPersonName(updatedPersonName);
  };

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPersonName(event.target.value as string[]);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddName();
    }
  };

  const handleInputBlur = () => {
    handleAddName();
  };

  return (
    <div>
      <FormControl className="max-w-96 flex ml-10" style={{ borderBottom: 'none' }}>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={personName}
          onChange={handleSelectChange}
          input={
            <Input
              id="select-multiple-chip"
              multiline
              rows={3}
              classes={{ underline: 'none' }}
              style={{ width: '300px', fontSize: '16px' }}
              onKeyDown={handleInputKeyDown}
              onBlur={handleInputBlur}
            />
          }
          renderValue={(selected) => (
            <div className="flex flex-wrap ml-11">
              {(selected as string[]).map((value) => (
                <Chip
                  key={value}
                  label={value}
                  className="m-0.5"
                  onDelete={() => handleRemoveName(value)} // Adiciona a função de remoção
                  deleteIcon={<CloseIcon />} // Ícone "X" para remover
                />
              ))}
            </div>
          )}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button onClick={handleAddName} className="ml-2" variant="contained" color="primary">
        Add
      </Button>
    </div>
  );
};

export default MultipleSelect;
