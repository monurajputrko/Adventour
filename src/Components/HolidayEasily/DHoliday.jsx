import React from 'react'
import "./Holiday.css"
const Holiday = () => {
  return (
    <div className='holiday'>
        <div>
            <p style={{color:"#3ec6f0"}}>Holiday Easily</p>
            <h1>Book Tickets and Plan Your <br/> Holiday Easily</h1>
            <p>Discover a place taht suits your kind of trip. And Book Ticket and <br/> Enjoy on your own price. We will help you for that fun.</p>
        </div>
        <div className='holiday-element'>
        <div>
                <img src="https://static.vecteezy.com/system/resources/previews/000/597/162/original/circle-logo-and-symbols-vectors.jpg" width={100}/>
                <h3>Easy to Buy Tickets</h3>
                <p>Set up your mood and Come with us.</p>
            </div>
            <div className='onedown'>
                <img src="https://static.vecteezy.com/system/resources/previews/000/597/162/original/circle-logo-and-symbols-vectors.jpg" width={100}/>
                <h3>Best Tour Guide</h3>
                <p>Set up your mood and Come with us.</p>
            </div>
            <div>
                <img src="https://static.vecteezy.com/system/resources/previews/000/597/162/original/circle-logo-and-symbols-vectors.jpg" width={100}/>
                <h3>Lot of Choices</h3>
                <p>Set up your mood and Come with us.</p>
            </div>
            <div className='onedown'>
                <img src="https://static.vecteezy.com/system/resources/previews/000/597/162/original/circle-logo-and-symbols-vectors.jpg" width={100}/>
                <h3>Various Top Products</h3>
                <p>Set up your mood and Come with us.</p>
            </div>
        </div>
    </div>
  )
}

export default Holiday