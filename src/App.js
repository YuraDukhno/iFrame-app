import './App.css';
import Header from './Layout/Header';
import Main from './Layout/Main';
import Mock  from './Mock/mock.json'
import Container from "react-bootstrap/Container";



function App() {

  

  return (
    <div fluid="md" className="App">
      <Header />
      <Main arr={Mock} />
    </div>
  );
}

export default App;



// <Container>
//   <Row>
    // {Mock.map((imgSrc, imgAlt) => (
    //   <Col>
    //     <Image src={imgSrc} alt={imgAlt} />
    //   </Col>
    // ))}
//   </Row>
// </Container>;