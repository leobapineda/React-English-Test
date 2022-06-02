import {React, useState, useEffect} from "react";
import '../style/API.css'
export default function App() {
    const [data, setData] =useState('users');
    const [data1, setData1] =useState([]);
    

    // do some side effect when something happends
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${data}`)
    .then((response) => response.json())
    .then((json) => setData1(json));
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
