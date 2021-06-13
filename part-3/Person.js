// Create a component called Person. 
//    Inside of this component, 
//    render a p tag which displays “Learn some information about this person”.
//    Each person should have name and age properties.

// If the person is over 18 years old, display an additional h3 that says “please go vote!”.Otherwise, display an h3 that says “you must be 18”.
// If the person’s name is longer than 8 characters, only display the first six characters of their name.

// Add a property called hobbies to your Person component that accepts an array of hobbies(an array of strings).
// Your Person component should list each one of these hobbies as an li.

const Person = ({name, age, hobbies=['Keeping A Mysterious Nature']}) => {
    const displayName = (name.length <= 8) ? name : name.slice(0, 6);
    return (
    <div>
            <ul><p> <b>Learn some information about this person</b></p>
            <li>Their name: {displayName}</li>
            <li>
                Their age: {age} 
                <h3>{(age >= 18) ? "please go vote!" : "you must be 18"}</h3>
            </li>
            <li>Their Hobbies:
                <ul>
                {hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
                </li>
        </ul>
    </div>
    );
};