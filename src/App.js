import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions/counter';
import { signIn } from './actions/signIn';

function App() {
  const counter = useSelector(state => state.counter)
  const logger = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(signIn())}>Sign In</button>
    </div>
  );
}

export default App;
