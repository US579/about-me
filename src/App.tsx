import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import About from './components/pages/About';

import Header from "./components/Header";
import Thoughts from "./components/pages/Thought";
import Project from "./components/pages/Project";

function App() {
  const routes = useRoutes([
    {path: "/", element: <About />},
    {path: "/projects", element: <Project />},
    {path: "/thoughts", element: <Thoughts />}
  ])
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>  
  )
}

export default AppWrapper;
