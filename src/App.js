import './App.css';
import jaqen from './images/jaqen.gif'
import jaqen2 from './images/jaqen2.gif'
import jaqen3 from './images/jaqen3.gif'
import jaqen4 from './images/jaqen4.gif'
import jaqen5 from './images/jaqen5.gif'
import jaqen6 from './images/jaqen6.gif'
import jaqen7 from './images/jaqen7.gif'
import jaqen8 from './images/jaqen8.gif'
import Carousel from 'react-bootstrap/Carousel'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          <i>A girl must serve the many face gods.</i>
        </p>
        <br></br>
       <Carousel>
        <Carousel.Item>
        <img src={jaqen} className="App-logo" alt="logo" />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={jaqen2} className="App-logo" alt="logo" />

          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={jaqen3} className="App-logo" alt="logo" />

          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img src={jaqen4} className="App-logo" alt="logo" />

          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img src={jaqen5} className="App-logo" alt="logo" />

          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img src={jaqen6} className="App-logo" alt="logo" />

          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img src={jaqen7} className="App-logo" alt="logo" />

          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={jaqen8} className="App-logo" alt="logo" />

          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </header>
    </div>
  );
}

export default App;
