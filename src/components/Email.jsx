import React,{useState} from 'react'
import axios from 'axios';

const Email = () => {
  
  const [email,setEmail] = useState("");

  const handleChange = (e)=>{
     setEmail(e.target.value);
  }

  const sendEmail = async()=>{
    const res = await axios.post("https://assessmentbackend.onrender.com/admin/sendEmail",{
      userEmaildata:email
    })
    alert("Email sent ");
  }

  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <textarea type="text" placeholder='Please enter your queries' value={email}  onChange={handleChange} style={{border:"none",borderRadius:10,width:300,height:100,color:"green",fontSize:15,backgroundColor:"lightblue"}}/>
      <button onClick={sendEmail} style={{backgroundColor:"red",width:100,border:"none",borderRadius:10,height:40}}><text style={{fontFamily:'monospace',fontSize:15}}>Email us!!</text></button>
    </div>
  )
}

export default Email