import Navigator from "./screens/navigation";
import { Route, Routes } from "react-router-dom";
import HomeScreen from './screens/Home';
import AboutScreen from './screens/About';
import ProjectsScreen from './screens/Projects';
import ServicesScreen from './screens/Services';
import './styles/index.css'

function App() {
  return (
    <div className="App">
      <Navigator />
      <Routes>
        <Route path='/' element={<HomeScreen/> }></Route>
        <Route path='about' element={<AboutScreen />}></Route>
        <Route path='projects' element={<ProjectsScreen />}></Route>
        <Route path='services' element={<ServicesScreen />}></Route>
      </Routes>
    </div>
  );
}

export default App;
