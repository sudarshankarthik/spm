import React, { useState } from "react";
import {
	MDBBtn,
	MDBIcon,
	MDBInput,
	MDBInputGroup,
	MDBTable,
	MDBTableBody,
	MDBTableHead,
	MDBTypography,
} from "mdb-react-ui-kit";

const Cpm = () => {
	const exampleActivites = [
		{
			name: "A",
			duration: 4,
			predecessors: [],
		},
		{
			name: "B",
			duration: 6,
			predecessors: ["A"],
		},
		{
			name: "C",
			duration: 8,
			predecessors: ["A"],
		},
		{
			name: "D",
			duration: 10,
			predecessors: ["B", "C"],
		},
		{
			name: "E",
			duration: 12,
			predecessors: ["C"],
		},
		{
			name: "F",
			duration: 14,
			predecessors: ["D", "E", "F", "G", "E"],
		},
		{
			name: "G",
			duration: 2,
			predecessors: ["C", "E"],
		},
		{
			name: "H",
			duration: 1,
			predecessors: ["F", "G"],
		},
	];

	const [activities, setActivities] = useState(exampleActivites);
	const [activity, setActivity] = useState({
		name: '',
		duration: 0,
		predecessors: ['']
	})

	const handleTableChange = (e, row, index) => {
		let newActivities = [...activities];

		newActivities[index][row] = e.target.value;
		setActivities(newActivities);
	};

	const handlePredessorChange = (e, index,i) => {
		let newActivities = [...activities]
		newActivities[index]['predecessors'][i] = (e.target.value)
		newActivities[index]['predecessors'] = newActivities[index]['predecessors'].filter((v => v.length !== 0))
		setActivities(newActivities)
	}

	const handleDeleteActivity = (index) => {
		let newActivities = [...activities];
		newActivities.splice(index,1)
		setActivities(newActivities)
	}

	const addNewActivity = () => { 
		const newActivities = [...activities,activity]
		setActivities(newActivities)
	};

	const TableRows = activities.map((activity, index) => {
		return (
			<tr key={index}>
				<td>
					<MDBInput
						id={`name${index}`}
						type="text"
						value={activity.name}
						onChange={(e) => handleTableChange(e, "name", index)}
					/>
				</td>
				<td>
					<MDBInput
						id={`duration${index}`}
						type="number"
						value={activity.duration}
						onChange={(e) => handleTableChange(e, "duration", index)}
					/>
				</td>
				<td>
					<MDBInputGroup>
						{activity.predecessors.map((e, i) => <MDBInput index={i} value={activity.predecessors[i]} type="text" style={{ width: "50px" }} onChange={(e) => handlePredessorChange(e,index,i)}/>)}
						<MDBInput 
							type="text" 
							style={{width: "50px"}} 
							onKeyDown = { (e) => (e.key === 'Enter') ? handlePredessorChange(e,index,activity.predecessors.length) : NaN }
						/>
					</MDBInputGroup>
				</td>
				<td>
					<MDBBtn
						floating
						outline
						color="danger"
						data-mdb-toggle="tooltip"
						title="Delete activity"
						id={`delete${index}`}
						onClick={(e) => handleDeleteActivity(index)}
					>
						{" "}
						<MDBIcon fas icon="trash" color="danger" />{" "}
					</MDBBtn>
				</td>
			</tr>
		);
	});

	return (
		<div>
			<MDBTypography variant="h1">Critical Path Method</MDBTypography>
			<div className="inputs p-3">
				<MDBTypography variant="h3">Activity Table</MDBTypography>
				<MDBTable hover responsive>
					<MDBTableHead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Duration</th>
							<th scope="col">Predecessors</th>
						</tr>
					</MDBTableHead>
					<MDBTableBody>{TableRows}</MDBTableBody>
				</MDBTable>

				<MDBTypography tag="h6" color="success">
					Add new Activity
				</MDBTypography>
				<MDBTable responsive>
					<MDBTableBody>
						<tr>
							<td>
								<MDBInput id="name" type="text" label='Name' value={activity.name} onChange={(e) => setActivity({...activity,name: e.target.value})}/>
							</td>
							<td>
								<MDBInput id="duration" type="number" label='Duration' value={activity.duration} onChange={(e) => setActivity({...activity,duration: e.target.value})}/>
							</td>
							<td>
								<MDBInput id="predecessors" type="text" label='Predecessors' value={activity.predecessors} onChange={(e) => setActivity({...activity,predecessors: [e.target.value]})}  data-mdb-toogle="tooltip" title="Enter only one Predecessor you can add more predecessors after adding the activity" />
							</td>
							<td>
								<MDBBtn
									floating
									outline
									color="success"
									data-mdb-toggle="tooltip"
									title="Add new activity"
									onClick={addNewActivity}
								>
									{" "}
									<MDBIcon fas icon="plus" color="success" />{" "}
								</MDBBtn>
							</td>
						</tr>
					</MDBTableBody>
				</MDBTable>
		<button onClick={() => console.log(activity)}>Click Me</button>
			</div>
		</div>
	);
};

export default Cpm;
