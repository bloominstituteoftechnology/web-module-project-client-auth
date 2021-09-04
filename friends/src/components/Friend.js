const Friend = (props) => {
    const { name, age, email } = props.data;
    return (
        <div>
            <p>{name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default Friend