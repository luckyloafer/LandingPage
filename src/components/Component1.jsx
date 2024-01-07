import React from 'react'
import './component1.css'
const Component1 = () => {

   const Card = ({title,head,descr})=>{
      return (
         <div className='metrixBox'>
                    <div className='metrixBoxContent'>
                       <text className='metrixBoxContentText'>{title}</text>
                       <div className='metrixBoxContentContent'>
                              <text className='metrixBoxContentContentText1'>{head}</text>
                              <text className='metrixBoxContentContentText2'>{descr}</text>
                       </div>
                    </div>
                </div>
      )
   }
  return (
    <div className='component1'>
       <div className='component1Container'>
          <div className='component1Row'>
            <div className='component1Column'>
                
                <Card title="2Million" head="Customers" descr="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" />
                <Card title="1K" head="Downloads" descr="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" />
                <Card title="$73 Million" head="Transaction" descr="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" />
                <Card title="2.0" head="Latest Version" descr="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" />
                
            </div>
          </div>
       </div>
    </div>
  )
}

export default Component1