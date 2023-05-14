import React from "react";
import { MDBBtn, MDBCard, MDBCardImage, MDBCardText, MDBTypography,MDBCardOverlay,MDBCardTitle} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import './style.css'
function Home() {

  const navigate = useNavigate()

  const toIntro = () => {
    navigate('/intro')
  }
  
  const toTheory = () => {
    navigate('/theory')
  }
  const toCalc = () => {
    navigate('/calc')
  }
  const toBlog = () => {
    navigate('/blog')
  }

  

  return (
    <div className="home">
        <div className="p-5 bg-image hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274')", }}>
          <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <div className="d-flex p-5 flex-column justify-content-start mb-5">
              <div className="text-white">
                <MDBTypography tag='h1' className="mb-3">What is Software Project Management</MDBTypography>
                <MDBTypography tag='h4' className="mb-5">Software project management is the process of planning, organizing, and overseeing the development of software products</MDBTypography>
                <MDBTypography tag='p'  className="mb-5" align="justify">Software project management is the discipline of planning, organizing, and managing resources to successfully complete software development projects. It involves creating and following a plan for the entire software development life cycle, from initial requirements gathering to final testing and deployment. Project managers must carefully balance timelines, budgets, and resources, as well as ensure that the project meets its goals and objectives. They are responsible for identifying and managing risks, communicating with stakeholders, and coordinating the efforts of developers, testers, and other team members. Effective software project management requires a combination of technical knowledge, leadership skills, and project management tools and techniques.</MDBTypography>
                <MDBBtn color="primary" className="m-2" onClick={toIntro}>Know More about SPM</MDBBtn>
                <MDBBtn color="secondary" className="m-2" onClick={toTheory}>Explore various topics we covered about SPM</MDBBtn>
              </div>
            </div>
        </div>
      </div>
      <div className="p-5">
        <MDBTypography tag='h2' className="mb-5">Why Software Project Management is important</MDBTypography>
        
        <MDBTypography tag='h4' className="mb-1">Achieve project goals</MDBTypography>
        <MDBTypography tag='p'  className="mb-3" align="justify">Effective project management is critical for organizations to achieve their project goals. Project management provides a structured approach for planning, executing, monitoring, and controlling projects. It helps organizations to identify the scope of the project, create a realistic project schedule, and allocate resources appropriately. Project management also helps to define the expected project outcomes, track progress against those outcomes, and adjust plans as needed to ensure project success. Without effective project management, projects can easily become derailed, leading to missed deadlines, cost overruns, and poor outcomes.</MDBTypography>
        
        <MDBTypography tag='h4' className="mb-1">Increase efficiency and productivity</MDBTypography>
        <MDBTypography tag='p'  className="mb-3" align="justify">Effective project management helps organizations to increase efficiency and productivity by ensuring that resources are allocated appropriately and that team members are clear on their roles and responsibilities. Project management also helps to streamline processes, reduce waste, and increase overall productivity. Effective project management also allows organizations to identify potential issues before they become major problems, minimizing the negative impact on project timelines and budgets. By identifying and addressing these issues proactively, project management can help organizations complete projects more efficiently and effectively.</MDBTypography>
        
        <MDBTypography tag='h4' className="mb-1">Improve communication</MDBTypography>
        <MDBTypography tag='p'  className="mb-3" align="justify">Effective communication is critical to the success of any project. Project management provides a structured approach for communicating with team members, stakeholders, and clients. By establishing clear lines of communication and ensuring that expectations are clearly defined and understood, project management helps to avoid misunderstandings and minimize conflicts. Effective communication also helps to build trust and enhance collaboration among team members, leading to better project outcomes. By keeping all stakeholders informed and involved throughout the project, project management helps to ensure that everyone is working towards the same goal.</MDBTypography>
        
        <MDBTypography tag='h4' className="mb-1">Enable continuous improvement</MDBTypography>
        <MDBTypography tag='p'  className="mb-3" align="justify">Continuous improvement is an essential aspect of project management. Project management provides a framework for evaluating and learning from past projects. By analyzing past performance, identifying areas for improvement, and making changes to project management processes, organizations can continuously improve their project management practices. Continuous improvement helps to ensure that projects are completed more efficiently and effectively, leading to better outcomes and increased customer satisfaction. By learning from past mistakes and implementing changes, project management can help organizations achieve better project outcomes in the future.</MDBTypography>
        
        <MDBTypography tag='h4' className="mb-1">Enhance customer satisfaction</MDBTypography>
        <MDBTypography tag='p'  className="mb-3" align="justify">Effective project management is essential for enhancing customer satisfaction. By ensuring that projects are completed on time, within budget, and to the desired quality, project management helps to meet customer expectations and build trust. Effective project management also helps to identify and address issues that may impact customer satisfaction, leading to better outcomes and a stronger reputation for the organization. By tracking progress against project goals and making adjustments as needed, project management helps to ensure that the project meets the customer's needs and expectations. By enhancing customer satisfaction, effective project management can also help to increase customer loyalty and drive repeat business.</MDBTypography>
      </div>
      <div className="features p-1">
       <div className='d-flex flex-column flex-lg-row justify-content-evenly ms-auto .flex'>
      <MDBCard background='dark' className='text-white equal-width'>
        <MDBCardImage overlay src='https://images.unsplash.com/photo-1608303588026-884930af2559?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250' alt='...' className="cta-card"/>
        <MDBCardOverlay>
          <MDBCardTitle>Interactive Calculators</MDBCardTitle>
          <MDBCardText>
          Our website offers a suite of interactive calculators that make it easy to perform critical path analysis, PERT analysis, risk management, and earned value management (EVM). With our calculators, you'll be able to quickly and accurately assess project timelines, identify potential risks, and track your progress throughout the project lifecycle
          </MDBCardText>
          <MDBBtn onClick={toCalc}>View all avaliable caculators</MDBBtn>
        </MDBCardOverlay>
      </MDBCard>
        <MDBCard background='dark' className='text-white cta-card equal-width'>
        <MDBCardImage overlay src='https://images.unsplash.com/photo-1614068630200-44bc6a9a898e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3MlMjB0aGVvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=250&h=250' alt='...' className="cta-card"/>
        <MDBCardOverlay>
          <MDBCardTitle>Comprehensive Theory Sections</MDBCardTitle>
          <MDBCardText>
          Our website features in-depth theory sections for each of the SPM topics we cover. From the basics of critical path method (CPM) to the intricacies of earned value management (EVM), our guides provide clear, concise explanations of key concepts and techniques. We also include practical examples and case studies to help you apply these concepts.
          </MDBCardText>
          <MDBBtn onClick={toTheory}>Explore More Topics</MDBBtn>
        </MDBCardOverlay>
      </MDBCard>
        <MDBCard background='dark' className='text-white equal-width'>
        <MDBCardImage overlay src='https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250' alt='...' className="cta-card"/>
        <MDBCardOverlay>
          <MDBCardTitle>Discussion Forums</MDBCardTitle>
          <MDBCardText>
          Our discussion forums are a great place to connect with other project managers, share your experiences, and learn from others in the industry. Whether you're a seasoned pro or just starting out, our forums are a valuable resource for anyone looking to improve their project management skills
          </MDBCardText>
          <MDBBtn onClick={toBlog}>Go to Discussion Blog</MDBBtn>
        </MDBCardOverlay>
      </MDBCard>
      </div>
      </div>
    </div>
  );
}

export default Home;
