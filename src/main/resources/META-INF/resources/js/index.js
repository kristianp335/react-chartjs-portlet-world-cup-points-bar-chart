import React from 'react';
import ReactDOM from 'react-dom';
import {Bar} from 'react-chartjs-2';
import {Pie} from 'react-chartjs-2';

class TeamResults extends React.Component {
	constructor(props) {
		super(props);						
		this.state = ({teamResultsDataObject: [], Data: {}});	  
		this.getData(); 		
	}
  
  	getData() {
		let dataArray = [];
		let columnsArray = [];
	  	$.ajax({
		url: "https://world-cup-json.herokuapp.com/teams/results",
		type: "GET",
		contentType: "application/json",	
		success: function(data) {
			data.forEach(element => {
			if (element.group_letter == 'G' || element.group_letter == 'H' || element.group_letter == 'F' )
			{
				columnsArray.push(element.country);
				dataArray.push(element.points);
			}
			});
			this.setState({ 
				Data: {
				labels: columnsArray,
				datasets:[
					{
						label:'World CUP 2018 - Points by Team - Group G',
						data: dataArray,
						backgroundColor:[
						'rgb(51, 153, 255)',
						'rgb(153, 153, 255)',
						'rgb(204, 102, 255)',
						'rgb(255, 153, 255)',
						'rgb(255, 153, 204)',
						'rgb(255, 255, 102)',
						'rgb(255, 102, 0)',
						'rgb(102, 0, 204)',		
						'rgb(0, 153, 204)',
						'rgb(51, 204, 51)',
						'rgb(153, 51, 0)',
						'rgb(153, 0, 153)'
					]
					}
				]
				}
			});
		}.bind(this)
	 }); 
	}

	render() {
		return (
			<div>
				<Bar data={this.state.Data}
			options={{maintainAspectRatio: true}}/>
			</div> 
		);
	}
}


export default function(elementId) {
		ReactDOM.render(<TeamResults />, document.getElementById(elementId));
}
