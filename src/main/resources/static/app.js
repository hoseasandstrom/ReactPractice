const React = require('react');
const client = require('./client');

Class App extends React.Component{
    constructor(props) {
    		super(props);
    		this.state = {employees: []};
    		}

    componentDidMount() {
    		client({method: 'GET', path: '/api/employees'}).done(response => {
    			this.setState({employees: response.entity._embedded.employees});
    		});
    	}

    	render() {
    		return (
    			<EmployeeList employees={this.state.employees}/>
    		)
    	}
}

class EmployeeList extends React.Component{
	render() {
		var employees = this.props.employees.map(employee =>
			<Employee key={employee._links.self.href} employee={employee}/>
		);
		return (
			<table>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Description</th>
				</tr>
				{employees}
			</table>
		)
	}
}

class Employee extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.employee.firstName}</td>
				<td>{this.props.employee.lastName}</td>
				<td>{this.props.employee.description}</td>
			</tr>
		)
	}
}

React.render(
	<App />,
	document.getElementById('react')
)

