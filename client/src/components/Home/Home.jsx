import "./Home.css"
import React from "react"
import Form from "../Form/Form"
import Posts from "../Posts/Posts"
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPosts } from '../../actions/posts';
import { useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);
   
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);

    return (  <section className="App-section">
    <div id="postscol" className='col'>
      <Posts currentId={currentId} setCurrentId={setCurrentId}></Posts>
    </div>

    <div id="formcol" className='col'>
      <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
    </div>

  </section>
    )
}
export default Home;