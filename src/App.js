import './App.css';
import Gallery from './components/Gallery';
import apikey from './config';
import Cats from './components/Cats';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dogs from './components/Dogs';
import Computers from './components/Robot'
import NotFound from './components/NotFound';
import SearchForm from './components/SearchForm';
import {useState} from 'react'

function App() {
  const [userSearch, setuserSearch] = useState();
  const apiKey = apikey;

  //stores the search input into the navigation state so it can be passed to the gallery component through props
  const handleUserSearch = ( userInput) =>{
    setuserSearch(userInput)
  }

  return (
    <BrowserRouter>
      <SearchForm handleSearch={handleUserSearch}/>
      <Routes>
        <Route path ="Cats" element={<Cats flicker={apiKey} />}/>
        <Route path="Dogs" element={<Dogs flicker={apiKey} />}/>
        <Route path="Robots" element={<Computers flicker={apiKey}/>}/>
        <Route path="Search/:search" element={<Gallery flickerKey={apiKey} key={userSearch} tag={userSearch}/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
