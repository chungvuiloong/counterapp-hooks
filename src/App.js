
import Header from './Header';
import Footer from './Footer';
import {BoxesTesting, BoxesTesting2} from './Boxes';
import Circle from './Circle';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Circle></Circle>
      <BoxesTesting></BoxesTesting>
      <BoxesTesting2></BoxesTesting2>

      <Footer></Footer>
    </div>
  );
}

export default App;
