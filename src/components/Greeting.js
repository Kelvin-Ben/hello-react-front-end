import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRandomGreeting } from '../actions/greetingActions';

const Greeting = ({ greeting, getRandomGreeting }) => {
  useEffect(() => {
    getRandomGreeting();
  }, [getRandomGreeting]);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

Greeting.propTypes = {
  greeting: PropTypes.string.isRequired,
  getRandomGreeting: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  greeting: state.greeting,
});

export default connect(mapStateToProps, { getRandomGreeting })(Greeting);
