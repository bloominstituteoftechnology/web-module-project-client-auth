import React from 'react'
import styled from 'styled-components';

const Friend = (props) => {
    const { friend } = props
// console.log('Friend.js ln: 5 friend:', friend);
    return (
        <Container>
        <div className="friend-card">
            <h2>{friend.name}</h2>
            <p>age: {friend.age}</p>
            <p>email: {friend.email}</p>
        </div>
        </Container>
    )
}
export default Friend;
const Container = styled.div`
box-sizing: border-box;
/* border: 5px, black; */
`;