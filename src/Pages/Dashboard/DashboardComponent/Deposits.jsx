import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

function Title(props) {
  return (
    <Typography component="h2" top="40" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};



function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>DATA</Title>
      <Typography component="p" variant="h5">
        All books: {45644}
      </Typography>
      <Typography color="purple" variant="h6" >
        Book sold:{12344}
      </Typography>
      <Typography color="purple" variant="h6" sx={{ flex: 1}}>
        Reserved Books:{12344}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}