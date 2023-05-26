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
        <MDBTypography variant='h4'>PERT Explained by example</MDBTypography>
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
          <li>Caculate the Expected Duration</li>
          <ul>
            <li>Activity A: TE(A) = 6 units (O = 4, M = 6, P = 8)</li>
            <li>Activity B: TE(B) = 4 units (O = 3, M = 4, P = 5)</li>
            <li>Activity C: TE(C) = 3 units (O = 2, M = 3, P = 5)</li>
            <li>Activity D: TE(D) = 4 units (O = 3, M = 4, P = 6)</li>
            <li>Activity E: TE(E) = 3 units (O = 2, M = 3, P = 4)</li>
            <li>Activity F: TE(F) = 10 units (O = 8, M = 10, P = 12)</li>
            <li>Activity G: TE(G) = 3 units (O = 2, M = 3, P = 4)</li>
            <li>Activity H: TE(H) = 2 units (O = 1, M = 2, P = 3)</li>
        </ul>
          <li>Calculate the earliest start and finish times: Starting with the first activity and moving forward, calculate the earliest start and finish times for each activity. The earliest start time of an activity is the maximum of the earliest finish times of its predecessors. The earliest finish time is the sum of the earliest start time and the activity's duration.</li>
          <ul>
          <li>
            <strong>Activity A: </strong>
            EST(A) = 0
            EFT(A) = EST(A) + TE(A) = 0 + 6 = 6
          </li>
          <li>
            <strong>Activity B: </strong>
            EST(B) = 0
            EFT(B) = EST(B) + TE(B) = 0 + 4 = 4
          </li>
          <li>
            <strong>Activity C: </strong>
            EST(C) = EFT(A) = 6
            EFT(C) = EST(C) + TE(C) = 6 + 3 = 9
          </li>
          <li>
            <strong>Activity D:</strong>
            EST(D) = EFT(B) = 4
            EFT(D) = EST(D) + TE(D) = 4 + 4 = 8
          </li>
          <li>
            <strong>Activity E: </strong>
            EST(E) = EFT(B) = 4
            EFT(E) = EST(E) + TE(E) = 4 + 3 = 7
          </li>
          <li>
            <strong>Activity F: </strong>
            EST(F) = 0
            EFT(F) = EST(F) + TE(F) = 0 + 10 = 10
          </li>
          <li>
            <strong>Activity G: </strong>
            EST(G) = max(EFT(E), EFT(F)) = max(7, 10) = 10
            EFT(G) = EST(G) + TE(G) = 10 + 3 = 13
          </li>
          <li>
            <strong>Activity H: </strong>
            EST(H) = max(EFT(C), EFT(D)) = max(9, 8) = 9
            EFT(H) = EST(H) + TE(H) = 9 + 2 = 11
          </li>
        </ul>
        <li>Calculate the latest start and finish times: Starting with the last activity and moving backward, calculate the latest start and finish times for each activity. The latest finish time of the last activity is equal to its earliest finish time. The latest start time is the difference between the latest finish time and the activity's duration.</li>
        <ul>
          <li>
            <strong>Activity H:</strong>
            LFT(H) = EFT(H) = 11
            LST(H) = LFT(H) - TE(H) = 11 - 2 = 9
          </li>
          <li>
            <strong>Activity G:</strong>
            LFT(G) = min(LST(H) - TE(G), LST(F) - TE(G)) = min(9 - 3, 10 - 3) = min(6, 7) = 6
            LST(G) = LFT(G) - TE(G) = 6 - 3 = 3
          </li>
          <li>
            <strong>Activity F:</strong>
            LFT(F) = EFT(F) = 10
            LST(F) = LFT(F) - TE(F) = 10 - 10 = 0
          </li>
          <li>
            <strong>Activity E:</strong>
            LFT(E) = LST(G) = 3
            LST(E) = LFT(E) - TE(E) = 3 - 3 = 0
          </li>
          <li>
            <strong>Activity D:</strong>
            LFT(D) = min(LST(H) - TE(D), LST(B) - TE(D)) = min(9 - 4, 4 - 4) = min(5, 0) = 0
            LST(D) = LFT(D) - TE(D) = 0 - 4 = -4
          </li>
          <li>
            <strong>Activity C:</strong>
            LFT(C) = min(LST(H) - TE(C), LST(A) - TE(C)) = min(9 - 3, 6 - 3) = min(6, 3) = 3
            LST(C) = LFT(C) - TE(C) = 3 - 3 = 0
          </li>
          <li>
            <strong>Activity B:</strong>
            LFT(B) = min(LST(D) - TE(B), LST(E) - TE(B)) = min(-4 - 4, 0 - 4) = min(-8, -4) = -8
            LST(B) = LFT(B) - TE(B) = -8 - 4 = -12
          </li>
          <li>
            <strong>Activity A:</strong>
            LFT(A) = LST(C) = 0
            LST(A) = LFT(A) - TE(A) = 0 - 6 = -6
          </li>
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