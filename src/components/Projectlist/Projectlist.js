import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
               
                isBlog={false}
                title="Travel Gateway (Final Year Project)"
                description="Travel Gateway  is web-base booking platform developing in  Node js.Implemented features like booking trip ,booking hotel,booking food provide the tourist all in one platform.Multi user can  login and singup, After the signup and login tourist can book the hotel and the favourite place to visit. 
               Admin can add,update and remove  user and also add, update and delete the post detail."
                
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
               
                isBlog={false}
                title="Word Counter"
                description="Word Counter is react js platform  where the user can type the word in the TextArea and in preview mode it show the words and sentence.UPPERCASE button convert the all word to uppercase Lowercase button covert the all word to lowercase Remove extra button remove the extra space Clear button clear all the text from the TextArea Copy button copy all the text At the end it show the total time taken  by typing and the total word and total sentence"
                
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                
                isBlog={false}
                title="TODOS"
                description="Todos is React js Platform where the we can save our notes
                In the input field the user can  write the note  and it automatically save. 
                User can delete one by one and also update the notes.user can also delete all in just one click by clicking the delete all. "
               
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
               
                isBlog={false}
                title="Personal portfolio"
                description="Personal portfolio is functional base react platform in which i have add my personal detail such as my skill my past project and my education"
               
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                
                isBlog={false}
                title="Fake Data Generator"
                description="Fake data is also React js website in which we fetch the API from the site and deploy it, refresh the website and get the different data of name,phone number,email ,city,state and the country of the different people"
               
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                
                isBlog={false}
                title="Random Quotes Generator"
                description="Random Quotes Generator fetch API data from the Apis and then deploy the data into the site .It gives Quotes and the author name ."
               
              />
            </Col>

            
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist