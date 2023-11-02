import SignUp from "./components/SignUp";
import Genres from "./components/Genres";
import Profile from "./Home Pages/Profile";
import Movies from "./components/Movies";
import UpdatedProfile from "./Home Pages/UpdatedProfile";
import { BrowserRouter , Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<SignUp/>}/>
      </Routes>
      <Routes>
        <Route exact path='/genres' element={<Genres/>}/>
      </Routes>

       <Routes>
        <Route exact path='/updatedProfile' element={<UpdatedProfile/>}/>
      </Routes>
      {/* <Profile/> */}
      {/* <UpdatedProfile/> */}
      <Routes>
        <Route exact path='/movies' element={<Movies/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
