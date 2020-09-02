import React, { useState, useEffect } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Button } from 'antd';

const CounterUseEffect = () => {
  const [counter, setCounter] = useState(0);
  // stateful value and a function to update it...
  // during the inital render, the returned state (state) is the same as the value passed
  // as the first argument(initialState) => so above!

  const incrementCounter = () => {
    setCounter(counter => counter + 1);
  }
  const decrementCounter = () => {
    setCounter(counter => counter - 1);
  }

  // [] what we want to use our state on
  useEffect(() => {
    // thjis simply created a callback on when
    console.log('the coutner state has changed', counter)
    // how is counter defined as a function...
    /*
      1) this will happen after the render is commited to the screen
       // it acts like an escape hatch from React's purely functional world
       // into the imperative world
     */

    /*
      2) the previous effect is cleanred up before executing the next effect.
      here we are not having a side effect everytime something is ran
      It will only update when there is a change in the counter state
     */
    // the previous effect is cleanred up before executing the next effect.
    // here we are not having a side effect everytime something is ran
    // It will only update when there is a change in the counter state

    // remember we use useEffect after the browser has been painted
  }, [counter])
  useDocumentTitle(`counter is ${counter}`);

  return (
    <div>
      <h3>Counter User effect</h3>
      <h3> {counter}</h3>
      <Button onClick={incrementCounter}>increase</Button>
      <Button onClick={decrementCounter}>decrease</Button>
    </div>
  )
}

export default CounterUseEffect
