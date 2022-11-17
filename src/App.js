import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import Popular from './Containers/Popular/Popular';
import Search from './Containers/Search/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/popular' element={<Popular/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
