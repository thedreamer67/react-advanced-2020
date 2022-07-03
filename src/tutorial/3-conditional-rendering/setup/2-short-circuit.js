import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world'; //returns the first truthy value encountered
  // const secondValue = text && 'hello world'; //returns '' if entire expression is falsy, else return the last value

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      {/* returns text if not empty, else return 'john doe' */}
      <h1>{text || 'john doe'}</h1>
      <button
        className='btn'
        onClick={() => {
          setIsError((prevError) => {
            return !prevError;
          });
        }}>
        toggle error
      </button>
      {/*//! returns <h1>hello world</h1> if text is not empty, else return nothing */}
      {text && <h1>hello world</h1>}
      {isError && <h1>Error...</h1>}
      {isError ? <p>there is an error</p> : <p>there is no error</p>}
    </>
  );
};

export default ShortCircuit;
