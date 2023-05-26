import { MDBContainer, MDBTypography } from 'mdb-react-ui-kit'
import React from 'react'
import risks from '../../assets/images/risks.png'

const Risk = () => {
  return (
    <div className='theory-content'>
      <MDBTypography variant='h1'>Introduction to RISK Management</MDBTypography>
        <MDBTypography variant='h5'>An uncertain event or condition that, if it occurs, has a positive or negative effect on a project’s objectives.</MDBTypography>
      <MDBContainer className='mb-4 bg-light bg-gradient p-3'>
        <MDBTypography variant='h4'>Risk Framework</MDBTypography>
        <img src={risks} alt='Actors, Technology, Task, Structure'/>
        <ol>
          <li><strong>Actors: </strong>refers to all the people involved in the development of the application in the question</li>
          <li><strong>Technology: </strong>encompasses both the technology used to implement the application and that embedded in the delivered products</li>
          <li><strong>Structure: </strong>Describes the management structures and systems including those affecting planning and controle</li>
          <li><strong>Tasks: </strong>relates to the work planned</li>
        </ol>
      </MDBContainer>

      <MDBContainer className='mb-4 bg-light bg-gradient p-3'>
        <MDBTypography variant='h4'>Risk Assessment</MDBTypography>
        
        <MDBTypography variant='p'>A common problem in risk identification is that a list of risks is potentially endless.</MDBTypography>
        <MDBTypography variant='p'>Estimating the risk exposure for each risk using the formula:</MDBTypography>
        <MDBTypography variant='p'>Risk Exposure = (Potential Damage) * (Probability of Occurence) </MDBTypography>
        
        <MDBTypography variant='p'>The risk reduction action can be assessed by calculating the “Risk Reduction Leverage”(RRL)</MDBTypography>
        <MDBTypography variant='p'>RRL = (RE<sub>before</sub> - RE<sub>after</sub>) / Cost of risk reduction </MDBTypography>
        
      </MDBContainer>

      <MDBContainer className='mb-4 bg-light bg-gradient p-3'>
        <MDBTypography variant='h4'>Earned Value Management</MDBTypography>
        <MDBTypography variant='p'><strong>Earned Value (EV)</strong>The Totoal value credited to a project at any point is known as the 'earned value'</MDBTypography>
        <MDBTypography variant='p'><strong>Baseline Budget (PV)</strong> Setting up the earned value analysis is to create the baseline budget </MDBTypography>
        <MDBTypography variant='p'><strong>Actual Cost (AC)</strong> By recording the “Earned Value”, the actual cost of each task can be collected as “Actual Cost” or ACWP-Actual Cost of Work Performed. </MDBTypography>

        <MDBTypography variant='h4'>Types of Varience</MDBTypography>
        <ol>
          <li><strong>Schedule Varience (SV) </strong>The Schedule Varience is measured in cost terms as </li>
          <p>SV = EV - PV</p>
          
          <li><strong>Time Varience (TV) </strong>Difference between the time when the achievement of the current earned value was planned to occur and the time now.</li>
          <p>SV = PT - AT</p>

          <li><strong>Cost Varience (CV) </strong> It indicates the difference between the earned value or budgeted cost and the actual cost of the completed work </li>
          <p>CV = EV - AC</p>
        </ol>

        <MDBTypography variant='h4'>Performance Ratios</MDBTypography>
        
        <ol>
          <li><strong>Schedule Performance Indes (SPI) </strong>The Schedule Varience is measured in cost terms as </li>
          <p>SV = EV / PV</p>

          <li><strong>Cost Performance Index (CPI) </strong> It indicates the difference between the earned value or budgeted cost and the actual cost of the completed work </li>
          <p>CV = EV / AC</p>
        </ol>

      </MDBContainer>

    </div>
  )
}

export default Risk