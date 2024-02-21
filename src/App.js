import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from "./actions";
import './style.css'
function App() {
  const x = useSelector((state) => state.updateValue)
  const dispatch = useDispatch()
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-7'>
          <h1 className='mb-5 ml-2'>Digit-Counter</h1>
          <button type="button" className="btn btn-warning mx-1" onClick={() => dispatch(increase())}>+</button>
          {/* <button onClick={() => dispatch(increase())}>+</button> */}
          <input type='text' value={x} readOnly></input>
          {/* <button onClick={() => dispatch(decrease())}>-</button> */}
          <button type="button" className="btn btn-warning mx-1" onClick={() => dispatch(decrease())}>-</button>

        </div>
      </div>
    </div>
  )
}

export default App;
