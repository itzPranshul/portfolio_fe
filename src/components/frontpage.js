import { useEffect } from 'react'
import './frontpage.css'

export default function Frontpage(){

    // useEffect(()=>{
    //     alert("hey welcome to my page")
    // },[])

    return (
        <div className="frontpage">
                <img className="photo" src="pranshul.jpg" alt='pranshul gupta '></img>
                <h2 className='hello'>Hey Everyone! I am pranshul gupta</h2> 
                <hr></hr>
        </div>
    )
}