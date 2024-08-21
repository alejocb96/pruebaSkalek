import PropTypes from 'prop-types';
import { SkalekLayaout } from './layaout/SkalekLayaout';

export const CardApp = () => {
  return (
        <SkalekLayaout />
  )
}
CardApp.propTypes = {
    title: PropTypes.string.isRequired,
  }
