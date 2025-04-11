export default function Profile(props){
    return (
        <h1>My name is {props.name} and my age is {props.age}</h1>
    )
}


// Props (short for properties) are read-only inputs to a React component. They are used to pass data from a parent component to a child component. Props allow you to make components reusable by providing different values for the same component in different instances. 

// In the example above, the Profile component receives props (name and age) and uses them to display a message. The props are passed from the parent component (App) to the child component (Profile) when rendering it.