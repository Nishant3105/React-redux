import { useSelector,useDispatch } from 'react-redux'

import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const dispatch=useDispatch()
  
  const incrementHandler=()=>{
    dispatch({type: 'incrementby5'})
  }
  const decrementHandler=()=>{
    dispatch({type: 'decrementby5'})
    
  }
  // const toggleCounterHandler = () => {
  //   dispatch({type: ''})
  // };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {/* <button onClick={toggleCounterHandler}>Toggle Counter</button> */}
      <button onClick={incrementHandler}>IncrementBy5</button>
      <button onClick={decrementHandler}>DecrementBy5</button>
    </main>
  );
};

export default Counter;
