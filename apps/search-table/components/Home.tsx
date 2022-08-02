import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { Container } from '@mui/system';

import { fetchCompanies } from '../api/fetch';
import MultipleSelectButton from './MultipleSelectButton';
import SelectAutoWidth from './SelectButton';
import { Button } from '@mui/material';

const useStyles = makeStyles({
  container: {
    maxWidth: 1200,
  },

  table: {
    minWidth: 650,
  },
});

const searchOptions = [
  {
    id: 1,
    country: 'ALL',
    areas: [
      'New York',
      'Massachusetts',
      'California',
      'Virginia',
      'Colorado',
      'Tirana',
      'Athens',
      'London',
      'Okinawa',
      'Kanto',
    ],
  },
  {
    id: 2,
    country: 'US',
    areas: ['New York', 'Massachusetts', 'California', 'Virginia', 'Colorado'],
  },
  { id: 3, country: 'AL', areas: ['Tirana'] },
  { id: 4, country: 'GR', areas: ['Athens'] },
  { id: 5, country: 'GB', areas: ['London'] },
  { id: 6, country: 'JP', areas: ['Okinawa', 'Kanto'] },
];

function Home() {
  const [rows, setRows] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = React.useState(1);
  const [selectedAreas, setSelectedAreas] = React.useState([]);
  const classes = useStyles();

  const selectedCountry = searchOptions.find(
    (opt) => opt.id === selectedCountryId
  );

  if (!selectedCountry) throw Error('Country selected does not exits!');

  React.useEffect(() => {
    setSelectedAreas([]);
  }, [selectedCountryId]);

  const handleSelectCountry = (e) => {
    setSelectedCountryId(e.target.value);
  };
  const handleSelectArea = (e) => {
    setSelectedAreas(e.target.value);
  };

  const handleClick = async () => {
    const country = selectedCountryId === 1 ? null : selectedCountry.country;
    const data = await fetchCompanies(country, selectedAreas);
    if (data.code === 200) setRows(data.data);
  };

  return (
    <Container>
      <Paper className={classes.container}>
        <Box
          sx={{
            display: 'flex',
            paddingBottom: '3rem',
            alignItems: 'center',
          }}
        >
          <SelectAutoWidth
            searchOptions={searchOptions}
            handleSelect={handleSelectCountry}
            selectedCountryId={selectedCountryId}
          />
          <MultipleSelectButton
            handleSelect={handleSelectArea}
            areaOptions={selectedCountry.areas}
            selectedAreas={selectedAreas}
          />
          <Button onClick={handleClick} variant="contained" size="large">
            Search
          </Button>
        </Box>

        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="left">Company Name</TableCell>
                <TableCell align="left">Country</TableCell>
                <TableCell align="left">Shipments</TableCell>
                <TableCell align="left">Last Login</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.country}</TableCell>
                  <TableCell align="left">{row.shipmentsCount}</TableCell>
                  <TableCell align="left">{row.lastLogin}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}

export default Home;
