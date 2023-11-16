import { useState,memo } from 'react'
// import './App.css'
function Test() {
const [child,setChild]=useState(0)
console.log("child",child);
  return (
    <>
        <button onClick={()=>{setChild(child+1)}}>Child {child}</button>
    
    </>
  )
}

export default memo(Test)
