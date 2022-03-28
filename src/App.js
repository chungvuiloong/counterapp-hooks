
import Header from './Header';
import Footer from './Footer';
import {AddFive, AddOne, Reset, RemoveOne, RemoveFive} from './Boxes';
import Main from './Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
