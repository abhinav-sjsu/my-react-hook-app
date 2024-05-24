import React, {useState} from 'react'; 

function MyComponent(){

    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(0);
    const [isEmployed,setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Abhinav");
        //console.log(name);
    }

    const updateAge = () => {
        setAge(age + 1);
        //console.log(name);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={updateAge}>Update Age</button>

        <p>Is Employed: {isEmployed ? "Yes" : "No" }</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>);


}
export default MyComponent