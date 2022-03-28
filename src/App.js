
import Header from './Header';
import Footer from './Footer';
import {AddFive, AddOne, Reset, RemoveOne, RemoveFive} from './Boxes';
import Circle from './Circle';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Circle></Circle>
      <body className="body">
        <AddFive></AddFive>
        <AddOne></AddOne>
        <Reset></Reset>
        <RemoveOne></RemoveOne>
        <RemoveFive></RemoveFive>
      </body>
      <Footer></Footer>
    </div>
  );
}

export default App;
