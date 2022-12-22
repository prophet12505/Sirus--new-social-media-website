import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPosts } from './actions/posts';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
 
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
        </ul>
      </nav>
      {/* <header className="App-header"> */}
        {/* <div id="headingbox">
        <h1>Sirius -- find your best life</h1>
        </div> */}
        


      {/* </header> */}
      <section className="App-section">
        <div id="postscol" className='col'>
          <Posts currentId={currentId} setCurrentId={setCurrentId}></Posts>
        </div>

        <div id="formcol" className='col'>
          <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
        </div>

      </section>

    </div>
  );
}

export default App;
