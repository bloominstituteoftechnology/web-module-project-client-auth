

const Friend = (props) => {

  return (
    <div key={props.friend.id}>
      <p>Friend: {props.friend.name}</p>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
    </div>
  )
}

export default Friend;