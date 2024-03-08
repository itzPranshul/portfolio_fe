import './skills.css'

export default function skills(){
    return (<>
    <h1>SKILLS</h1>
        <li className='headers'>Software engineer : </li>
            <ul className='skills'>
                <li>C++</li>
                <li>Object Oriented Programming</li>
                <li>Data structures and algorithm</li>
            </ul>

        <li className='headers'> Programming languages : </li>
            <ul className='skills'>
                <li>c++</li>
                <li>javascript</li>
                <li>python</li>
            </ul>
        <li className='headers'>Front-End Web Development : </li>
            <ul className='skills'>
                <li>HTML</li>
                <li>CSS</li>
                <li>javascript</li>
                <li>ReactJS</li>
            </ul>
        <li className='headers'>Backend Web Development : </li>
            <ul className='skills'>
                <li>Nodejs</li>
                <li>express</li>
                <li>postman</li>
            </ul>
        <li className='headers'>Databases : </li>
            <ul className='skills'>
                <li>SQL</li>
                <li>mongoDB</li>
            </ul>
        <li className='headers'>Tools :</li>
            <ul className='skills'>
                <li>Git & Github</li>
                <li>Postman</li>
                <li>Docker</li>
            </ul>
        <hr></hr>
    </>)
}