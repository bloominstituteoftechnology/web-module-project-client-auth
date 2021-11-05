import React from 'react'

const Friends = (props) => {
	console.log(props)
	return (
		<div>
			{props.data.map((item, index) => {
				return (
					<div key={index}>
						<h2>{item.name}</h2>
						<p>{item.age}</p>
						<p>{item.email}</p>
					</div>
				)
			})}
		</div>
	)
}

export default Friends