import React, { Component } from "react";
import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";
import image from "./images/image.png";

class App extends Component {
	state = {
		data: {},
		country:''
	};
	async componentDidMount() {
		const data = await fetchData();
		this.setState({ data });
	}

	handleCountryChange = async (country) => {

		// if(country === 'global'){
		// 	country = null
		// }
		
		const fetchedData = await fetchData(country);
			console.log(fetchedData)
			//console.log(country)
			this.setState({ data: fetchedData , country: country});
		// }
	}

	render() {
		const { data, country } = this.state;
		//console.log(data);
		return (
			<div className={styles.container}>
				<img className={styles.image} src={image} />
				{/* <h2>COVID-19 tracker</h2> */}
				<Cards data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange}/>
				<Chart data={data} country={country}/>
			</div>
		);
	}
}

export default App;
