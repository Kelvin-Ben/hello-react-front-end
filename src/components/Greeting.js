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

const mapStateToProps = (state) => {
  return {
    greeting: state.greeting,
  };
};

export default connect(mapStateToProps, { getRandomGreeting })(Greeting);
