import PropTypes from 'prop-types';
import { AppThems } from './theme/AppThems';
import { Typography } from '@mui/material';
import { SkalekLayaout } from './layaout/SkalekLayaout';

export const CardApp = () => {
  return (
    <Typography variant='h1'>
      <AppThems>
        <SkalekLayaout />     
      </AppThems>
    </Typography> 
      
        
   
  )
}
CardApp.propTypes = {
    title: PropTypes.string.isRequired,
  }
