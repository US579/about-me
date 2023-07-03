import {
    Route,
    Routes,
    HashRouter
} from "react-router-dom";
import About from "./components/pages/About";
import Header from "./components/Header";
import Thoughts from "./components/pages/Thought";
import Projects from "./components/pages/Project";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" Component={About} />
                <Route path="/projects" Component={Projects} />
                <Route path="/thoughts" Component={Thoughts} />
            </Routes>
        </div>
    );
}

const AppWrapper = () => {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    );
};

export default AppWrapper;
