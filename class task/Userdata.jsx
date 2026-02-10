import React, { useEffect, useState } from 'react'

function Userdata() {
    const [Userdata,setUserdata]=useState([]);
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then((data)=>setUserdata(data))
    },[])
  return (
    <div>
      <table border="2">
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
            </tr>
        </thead>
        <tbody>
            {Userdata.map((Details)=>(
                <tr key={Details.id}>
                    <td>{Details.id}</td>
                    <td>{Details.name}</td>
                    <td>{Details.email}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Userdata
