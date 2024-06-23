import { useSelector,useDispatch } from 'react-redux'

import { counterActions} from '../store/index'

import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)
  const dispatch=useDispatch()
  
  const incrementHandler=()=>{
    dispatch(counterActions.increment())
  }

  const increaseHandler=()=>{
    dispatch(counterActions.increase(5)) 
    // deafult reduxtoolkit:
    // { type: SOME_KEY:, payload : 5 }
  }
  const decreaseHandler=()=>{
    dispatch(counterActions.decrease(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>IncrementBy5</button>
      <button onClick={decreaseHandler}>DecrementBy5</button>
    </main>
  );
};

export default Counter;
