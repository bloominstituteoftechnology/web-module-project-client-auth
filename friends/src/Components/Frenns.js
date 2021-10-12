import React from 'react';
import axiosWithAuth from './../Components/utils/AxiosWithAuth';

class Frenns extends React.Component {
	state = {
		friends: []
	};

	componentDidMount() {
		console.log("props:", this.props);

		axiosWithAuth()
			.get('http://localhost:5000/api/data')
			.then(resp => {
				this.setState({
					friends: resp.data.data
				});
			})
			.catch(err => {
				console.log(err);
			})
	}
		render(){
			return (<h2>Coming Soon</h2>)
		}
	}


export default Frenns;
