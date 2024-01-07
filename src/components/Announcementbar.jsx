import React from 'react'
import './announcementbar.css'
const Announcementbar = () => {
   return (

      //   <div className='headContainer'>
      //      <div className='headContent'>
      //         <button className='badge'>Announcement</button>
      //         <text className='badgesidetext'>We are happy to announce that we raise $2 Million in Seed Funding</text>
      //      </div>
      //   </div>

      <div className='announcementBar'>
         <div className='announcementBar-container'>
            <div className='announcementBar-container-content'>
               <div className='announcementBar-container-content-badges'>
                  <text className='announcementBar-container-content-badges-text'>Announcement</text>

               </div>
               <text className='announcementBar-container-content'>We are happy to announce that we raise $2 Million in Seed Funding</text>
            </div>

         </div>

      </div>

   )
}

export default Announcementbar

