import PropTypes from 'prop-types';
import { AppThems } from './theme/AppThems';
import { Typography } from '@mui/material';
import { SkalekLayaout } from './layaout/SkalekLayaout';

export const CardApp = () => {
  return (
        <SkalekLayaout />     
  )
}
CardApp.propTypes = {
    title: PropTypes.string.isRequired,
  }
