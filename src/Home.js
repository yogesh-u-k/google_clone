import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <div className='header'>
            <div className='header-left'>
               <p>About</p>  
               <p className='store'>Store</p>
               <p>Gmail</p>  
               <p>Images</p>
            </div>
        </div>

        <div className='content'>
            <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' />
            <div className='search-bar'>
            
                <input type='text' placeholder='Search Google or type URL' /> 
                <div className='search-icon'>
                    <img src='https://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png' />
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Home
