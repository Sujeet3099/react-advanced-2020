import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people,setPeople] = React.useState(data)
  const removePeople = (id)=>{
    let newPeople = people.filter(person => person.id!==id)
    // console.log(newPeople)
    setPeople(newPeople)
  }
  return (<React.Fragment>
    {/* {people.map(person => console.log(person))} */}
    {people.map((person)=>{
      const {id,name} = person
      return(
        <div key={id} className='item'>
          <h4>{name}</h4>
          <button onClick={()=>removePeople(id)}>Delete</button>
        </div>
      )
    })}
    <button onClick={()=>setPeople([])} className='btn'>Clear</button>
  </React.Fragment>)
};

export default UseStateArray;
