import './App.css';
import { useState } from 'react';
import { data } from './data';


function App() {
const [list, setList] = useState(0);
const {id, thing, pic} = data[list];
const [button, setButton] = useState(data)


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
   console.log(id)
let goalsCompleted = data.filter(data => data.id !== data.id);
console.log(goalsCompleted)
setButton(goalsCompleted)
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
      <img src={ pic }  width='400px' height='400px' alt="pic" />
      <button className='btn' onClick={(nextTask)}>Next</button>
   </div>
<div className='container'>
   <button className='completed' onClick={()=>markCompleted(id)}>Completed</button>
</div>

</div>
)
}

/*function App(){
   const [list, setList] = useState(data);
   console.log(list);



   return(
      <div>
         <div className='container'>
      <h1>List of { data.length } things I want to do within the next 5 years</h1>
   </div>
   {list.map((element => {
      const {id, thing, image} = element;

      return( 
         <div>
            <div className='container' key={id}>
      <h2>{ id } - { thing } </h2>
   </div>
         </div>
      )
   }))}
      </div>
   )
}*/
export default App;
