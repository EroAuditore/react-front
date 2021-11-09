import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/reducer';

const Greetings = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  if (Object.keys(state.greeting.greeting).length === 0) {
    return <div>loading...</div>;
  }
  const { data } = state.greeting.greeting;

  const handleClick = () => {
    dispatch(fetchGreeting());
  };

  return (
    <>
      <div>
        <p>Greating of the day:</p>
        <button onClick={handleClick} type="button">
          New message
        </button>
        <p>{data.message}</p>
      </div>
    </>
  );
};

export default Greetings;
