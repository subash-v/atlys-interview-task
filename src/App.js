import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/login";
import SignUp from "./components/signUp"
import Feed from "./components/feed"
function App() {
  return (
    <Routes>
      <Route path="/" Component={Login} />
      <Route path="/signup" exact={true} Component={SignUp} />
      <Route path="/feed" exact={true} Component={Feed}/>
    </Routes>
  );
}

export default App;
