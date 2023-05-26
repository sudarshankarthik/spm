import { MDBCard, MDBCardBody, MDBCardHeader, MDBCardText, MDBCardTitle, MDBContainer, MDBTypography } from 'mdb-react-ui-kit'
import React from 'react'
import '../style.css'

const Pert = () => {
  return (
    <div>

    <div className='theory-content'>
      <MDBTypography variant='h1' className='mb-5'>Program Evaluation and Review Technique</MDBTypography>
      <MDBContainer className='bg-light bg-gradient mb-3'>
        <MDBTypography variant='p'> PERT (Program Evaluation and Review Technique) is a project management method used to analyze and represent the uncertainties and variations in estimating the duration of project activities. PERT incorporates a probabilistic approach to calculate expected durations, allowing for a more realistic assessment of project timelines. </MDBTypography>
        <MDBTypography variant='p'>In PERT, each activity is represented by three estimates: optimistic (O), pessimistic (P), and most likely (M). These estimates reflect different scenarios and potential variations in the activity duration. With these estimates, PERT calculates the expected duration (TE) and variance (V) for each activity. The expected duration is determined using a weighted average of the three estimates, while the variance represents the measure of uncertainty associated with the activity duration.</MDBTypography>
      </MDBContainer>

      <div className="formualae d-flex justify-content-center flex-column flex-md-row">
      <MDBCard background='light' className='m-3' >
        <MDBCardHeader>PERT</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Expected Duration (TE) </MDBCardTitle>
          <MDBCardText>
          The expected duration is determined using a weighted average of the three estimates <br />
            TE = (O + 4M + P) / 6
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCard background='light' className='m-3' >
        <MDBCardHeader>PERT</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Total Variance (V)</MDBCardTitle>
          <MDBCardText>
          variance represents the measure of uncertainty associated with the activity duration. <br />
            V = ((P-O)/6)^2
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </div>


      <MDBContainer className='bg-dark bg-gradient p-4 mb-3' breakpoint="sm">
        <MDBTypography variant='h4' className='text-light'>Algorithem for CPM</MDBTypography>
        <MDBTypography list className='text-light'>
          <li>Input the activity details: For each activity, input the optimistic (O), most likely (M), and pessimistic (P) estimates of the duration.</li>
          <li>For each activity, calculate the expected duration (TE) using the formula: TE = (O + 4M + P) / 6</li>
          <li>For each activity, calculate the variance (V) using the formula: V = ((P - O) / 6)^2</li>
          <li>Determine the activities' dependencies and construct a network diagram or use the critical path method (CPM) to identify the critical path.</li>
          <li>Calculate the total project duration by summing up the expected durations of activities on the critical path. </li>
          <li>Display the expected duration (TE) and variance (V) for each activity.</li>
          <li>Display the total project duration.</li>
          <li>Optionally, display the critical path activities.</li>
          <li>Output: Expected duration (TE) and variance (V) for each activity, total project duration, critical path</li>
          <li>For each activity, calculate the LFT as the minimum LST of all its immediate successors.</li>
          <li>Calculate the LST for the current activity by subtracting its duration from the LFT.</li>
          <li>Identify the activities with zero total float as they lie on the critical path.</li>
          <li>Output: The critical path, total project duration, and any other relevant information.</li>
        </MDBTypography>
      </MDBContainer>

      <MDBContainer className='bg-light bg-gradient p-4 mb-3'>
        <MDBTypography variant='h4'>CPM Expalined by example</MDBTypography>
        <MDBTypography variant='p'>Here is the breakdown of the example activities:</MDBTypography>
        <ol>
          <li>Activity A: Duration 6, No predecessors</li>
          <li>Activity B: Duration 4, No predecessors</li>
          <li>Activity C: Duration 3, Predecessor is A</li>
          <li>Activity D: Duration 4, Predecessor is B</li>
          <li>Activity E: Duration 3, Predecessor is B</li>
          <li>Activity F: Duration 10, No predecessors</li>
          <li>Activity G: Duration 3, Predecessors are E and F</li>
          <li>Activity H: Duration 2, Predecessors are C and D</li>
        </ol>
        <p>To determine the critical path using the Critical Path Method, we need to perform the following steps:</p>
        <ol>
          <li>Create a network diagram: Construct a visual representation of the project activities and their relationships. The diagram helps visualize the flow of activities and their dependencies.</li>
          <li>Identify the dependencies: Based on the given example, we can see that activities C and D depend on activities A and B, respectively. Activity E depends on B, and activity G depends on both E and F. Activity H depends on activities C and D.</li>
          <li>Calculate the earliest start and finish times: Starting with the first activity and moving forward, calculate the earliest start and finish times for each activity. The earliest start time of an activity is the maximum of the earliest finish times of its predecessors. The earliest finish time is the sum of the earliest start time and the activity's duration.</li>
        <ul>
          <li>Activity A: Earliest start time = 0, Earliest finish time = 6</li>
          <li>Activity B: Earliest start time = 0, Earliest finish time = 4</li>
          <li>Activity C: Earliest start time = 6 (earliest finish time of A), Earliest finish time = 9 (6 + duration)</li>
          <li>Activity D: Earliest start time = 4 (earliest finish time of B), Earliest finish time = 8 (4 + duration)</li>
          <li>Activity E: Earliest start time = 4 (earliest finish time of B), Earliest finish time = 7 (4 + duration)</li>
          <li>Activity F: Earliest start time = 0, Earliest finish time = 10</li>
          <li>Activity G: Earliest start time = 10 (earliest finish time of F), Earliest finish time = 13 (10 + duration)</li>
          <li>Activity H: Earliest start time = 9 (earliest finish time of C), Earliest finish time = 11 (9 + duration)</li>
        </ul>
        <li>Calculate the latest start and finish times: Starting with the last activity and moving backward, calculate the latest start and finish times for each activity. The latest finish time of the last activity is equal to its earliest finish time. The latest start time is the difference between the latest finish time and the activity's duration.</li>
        <ul>
          <li>Activity H: Latest start time = 9 (latest finish time - duration), Latest finish time = 11</li>
          <li>Activity G: Latest start time = 10 (latest finish time - duration), Latest finish time = 13</li>
          <li>Activity F: Latest start time = 0, Latest finish time = 10</li>
          <li>Activity E: Latest start time = 4 (latest finish time - duration), Latest finish time = 7</li>
          <li>Activity D: Latest start time = 4 (latest finish time - duration), Latest finish time = 8</li>
          <li>Activity C: Latest start time = 6 (latest finish time - duration), Latest finish time = 9 </li>
          <li>Activity B: Latest start time = 0, Latest finish time = 4 </li>
          <li>Activity A: Latest start time = 0, Latest finish time = 6  </li>
        </ul>
        <li>Calculate the total float/slack: The total float or slack of an activity is the amount of time it can be delayed without affecting the project duration. It is calculated as the difference between the latest start time and the earliest start time.</li>
        <ul>
          <li>Activity A: Total float = Latest start time - Earliest start time = 0 - 0 = 0</li>
          <li>Activity B: Total float = Latest start time - Earliest start time = 4 - 0 = 4</li>
          <li>Activity C: Total float = Latest start time - Earliest start time = 9 - 6 = 3</li>
          <li>Activity D: Total float = Latest start time - Earliest start time = 8 - 4 = 4</li>
          <li>Activity E: Total float = Latest start time - Earliest start time = 7 - 4 = 3</li>
          <li>Activity F: Total float = Latest start time - Earliest start time = 10 - 0 = 10</li>
          <li>Activity G: Total float = Latest start time - Earliest start time = 13 - 10 = 3</li>
          <li>Activity H: Total float = Latest start time - Earliest start time = 11 - 9 = 2</li>
        </ul>
        <li>Determine the critical path: The critical path consists of activities with zero total float. It represents the longest sequence of dependent activities and determines the minimum project duration.</li>
        </ol>

        <p>In this example, the critical path is A --&gt; C --&gt; H, with a total duration of 6 + 3 + 2 = 11 units of time.</p>
        <p>By identifying the critical path, project managers can focus on managing and monitoring the activities on this path closely since any delay in these activities will directly impact the project's completion time.</p>
      </MDBContainer>
    </div>
    </div>
  )
}

export default Pert