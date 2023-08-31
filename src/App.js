import './App.css';
import { useState } from 'react';
import { data } from './data';


function App() {
const [list, setList] = useState(data);
const [index, setIndex] = useState(0)
const {id, thing, pic} = list[index];



const previousTask = () =>{
setIndex ((index =>{
index --;
if(index < 0){
return list.length -1;
}
return index;
}))
}

const nextTask = () =>{
setIndex ((index =>{
index ++;
if (index > list.length - 1){
index = 0;
}
return index;
}))
}

const markCompleted = (id) =>{
let goalsCompleted = list.filter(list => list.id !== id);
setList(goalsCompleted)
} 

return (
<div>
   <div className='container'>
      <h1>List of { list.length } things I want to do within the next 5 years</h1>
   </div>
   <div className='container'>
      <h2>{ id } - { thing } </h2>
   </div>
   <div className='container'>
      <button className='btn' onClick={previousTask}>Previous</button>
      <img src={ pic }  width='400px' height='400px' alt="pic" />
      <button className='btn' onClick={nextTask}>Next</button>
   </div>
<div className='container'>
   <button className='completed' onClick={()=>markCompleted(id)}>Completed</button>
</div>

</div>
)
}

export default App;
