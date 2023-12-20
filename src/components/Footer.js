import React from 'react'




const Footer = () => {
  return (

    <footer className=' flex  justify-evenly items-center mt-20 w-2/3  gap-14 text-center m-auto'>
        
        <div className='gap-2 text-sm'>
        <ul>
            <li className='font-semibold text-xl font-serif  '>SHOP</li>
            <div className='py-12 space-y-4 '>
              <li>Ladies</li>
              <li>Men</li>
              <li>Trending Cloths</li>
              <li>Sport</li>
              <li>Oversized and more</li>
            </div>
          </ul>
        </div>
        
        <div className='gap-2 text-sm'>
          <ul>
            <li className='font-semibold text-xl font-serif'>CORPORATE INFO</li>
            <div className='py-12 space-y-4'>
              <li>Career at Fashio-Forte</li>
              <li>About Fashion-Forte Group</li>
              <li>Sustainability of group</li>
              <li>Press</li>
              <li>Invester Realtion</li>

            </div>
          </ul>
        </div>
        <div className='gap-2 text-sm mt-9'>
          <ul>
            <li className='font-semibold text-xl font-serif'>HELP</li>
            <div className='py-12 space-y-4'>
              <li>Customer Service</li>
              <li>My Fashion-Forte store</li>
              <li>Find a store</li>
              <li>Legal & Privacy</li>
              <li>Report a scam</li>
              <li>Cookie setting</li>

            </div>
          </ul>
        </div>
        <div className='gap-1 text-sm '>
          <ul>
            <li className='font-semibold text-xl font-serif mb-6'>Sign up for news letter</li>
            <div className=' space-y-2'>
              <li>Sign up now and be the first </li>
              <li>to know about exclusive offers,</li>
              <li>latest fashion news & style tips!</li>
              <br />
              <br />
              <button className='hover:scale-105'>EXPLORE MORE   </button>

            </div>
          </ul>
        </div>
        <div>
          
        </div>

    </footer>



  
    
  )
}
export default Footer