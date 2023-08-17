import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {
const [list, setList] = useState(0);
const {id, thing, image} = data[list];

const previousTask = () =>{
setList ((list =>{
list --;
if(list < 0){
return data.length -1;
}
return list;
}))
}

const nextTask = () =>{
setList ((list =>{
list ++;
if (list > data.length - 1){
list = 0;
}
return list;
}))
}

const markCompleted = (id) =>{

}

return (
<div>
   <div className='container'>
      <h1>List of { data.length } things I want to do within the next 5 years</h1>
   </div>
   <div className='container' key={id}>
      <h2>{ id } - { thing } </h2>
   </div>
   <div className='container'>
      <button className='btn' onClick={(previousTask)}>Previous</button>
      <img src={ image }  width='400px' height='400px' alt="photo" />
      <button className='btn' onClick={(nextTask)}>Next</button>
   </div>
<div className='container'>
   <button className='completed' onClick={()=>markCompleted(id)}>Completed</button>
</div>
</div>
)
}
export default App;
