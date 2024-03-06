import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopNavbar({setSearch ,setRating}) {
    const modif=(e)=>{setSearch(e.target.value)}
    const modif2=(e)=>{setRating(e.target.value)}
  return (
    <>
      <Navbar bg="red" data-bs-theme="red">
        <Container id='Nav'> 
          <Navbar.Brand href="#home" >Marvel </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#features">Movies</Nav.Link>
            <Nav.Link href="#pricing">TV Shows</Nav.Link>
          </Nav>
          <div>

       
            


            <input type='number' placeholder=' rate' style={{borderRadius:'5px', borderColor:"white" , width:"100px", marginRight:"20px"}} onChange={modif2}/>
            <input type='text' placeholder='  marvel movie' style={{borderRadius:'5px', borderColor:"white" , width:"300px"}} onChange={modif}/>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNavbar;