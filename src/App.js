// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header/Header';
import Movie from './components/movie/Movie';
import UsestateP from './components/UseState_p/Usestate_p';
import UseEffectH from './components/useEffect_H/UseEffect_H';
import { Link } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      {/* <Header name="Bhupinder" age="20" /> */}
      <Movie/>
      <UsestateP/>
      <UseEffectH/>
    </div>
  );
}

export default App;
