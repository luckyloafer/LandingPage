import React,{useState} from 'react'
import './heroSection.css'
import axios from 'axios';
const HeroSection = () => {

  const [buttonText,setButtonText] = useState("");

  const settingButtonText = async()=>{
    const res = await axios.get("https://assessmentbackend.onrender.com/admin/updateHeaderBtnText");
    console.log(res.data.headerBtnText);
    setButtonText(res.data.headerBtnText);
  }
  // settingButtonText();

  useState(()=>{
       settingButtonText();
  },[])
  return (
    
      <div className='heroSectionMain-heroSection'>
        <div className='heroSectionMain-heroSection-container'>

          <div className='heroSectionMain-heroSection-container-row'>

            <div className='heroSectionMain-heroSection-container-row-content'>
              <div className='heroSectionMain-heroSection-container-row-content-content1'>
                <text className='heroSectionMain-heroSection-container-row-content-content1-text'>Seamless experience</text>
                <div className='heroSectionMain-heroSection-container-row-content-content1-content'>
                   <text className='heroSectionMain-heroSection-container-row-content-content1-content-text1'>Unleashing the Next Generation of Card Solutions</text>
                   <text className='heroSectionMain-heroSection-container-row-content-content1-content-text2'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</text>
                </div>
              </div>
              <div className='heroSectionMain-heroSection-container-row-content-content2'>
                <div className='heroSectionMain-heroSection-container-row-content-content2-action'>
                  <div className='heroSectionMain-heroSection-container-row-content-content2-action-buttons'>
                    <button className='heroSectionMain-heroSection-container-row-content-content2-action-buttons-basebuttons'>
                      <text className='heroSectionMain-heroSection-container-row-content-content2-action-buttons-basebuttons-baseButtontext'>{buttonText}</text>
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M4.66666 9.99996H16.3333M16.3333 9.99996L10.5 4.16663M16.3333 9.99996L10.5 15.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
                <text className='heroSectionMain-heroSection-container-row-content-content2-text'>*No credit card required</text>
              </div>
            </div>

          </div>


        </div>
      </div>
    
  )
}

export default HeroSection