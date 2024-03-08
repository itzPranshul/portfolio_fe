import  './connect.css';

export default function connect(){
    return(<>
    <h1>
        Let's connect
    </h1>
    <form className='form'>
        <div className='formInput'>
            <h2>Name : </h2>
            <textarea></textarea>
        </div>
        <br></br>
         <div className='formInput'>
            <h2>
               Email 
            </h2> 
        <textarea></textarea>
        </div>
        <br></br>
        <div className='formInput'>
            <h2>
        Message :
            </h2>
            <textarea></textarea>
        </div> 
        <br></br>
        <br></br>
        <button><p>SUBMIT</p></button>
    </form>
    </>)
}