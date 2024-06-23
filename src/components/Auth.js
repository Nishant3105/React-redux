import classes from './Auth.module.css';
import { useSelector,useDispatch } from 'react-redux';

import { authActions } from '../store/index';
const Auth = () => {
  const auth=useSelector(state=>state.auth.isAuthenticated)
  const dispatch=useDispatch()

  const loginHandler=()=>{
    dispatch(authActions.login())
  }
  return (
    <main className={classes.auth}>
      <section>
        {!auth && <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>}
        {auth && <h2>My User Profile</h2>}
      </section>
    </main>
  );
};

export default Auth;
