import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss';
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
       <Content/>
       <Footer/>
      
    </div>
    </Router>
  );
}

export default App;
