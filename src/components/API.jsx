import {React, useState, useEffect} from "react";
import '../style/API.css'
export default function App() {
    const [data, setData] =useState('posts');
    const [data1, setData1] =useState([]);
    
    console.log('lol'); //runs twice because the first time the data changes form nothing to post and the second because when it changes it renders again, but this time the data value of post does not change, so it stops and only renders twice
    // do some side effect when something happends
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${data}`)
    .then((response) => response.json())
    .then((json) => setData1(json));
    // only render when the value inside the [] change
  }, [data])

    console.log('render');

  useEffect(() => {
    console.log('button click');
}, [data])

  return (
    <div>
      <button onClick={() => setData('users')} >users</button>
      <button onClick={() => setData('posts')} >posts</button>
      <button onClick={() => setData('comments')} >comments</button>
        <h1>{data}</h1>
        {data1.map((item) => {
            return <div key={item.id}  className="json-item" >{JSON.stringify(item)}</div>
            
        }) }
    </div>
  );
}
