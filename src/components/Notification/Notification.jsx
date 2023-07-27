import PropTypes from 'prop-types';

import Title from './Notification.styled';

function Notification({ message }) {
  return <Title>{message}</Title>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired
};

export default Notification;
