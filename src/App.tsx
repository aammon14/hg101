import { Routes, Route, Link } from 'react-router-dom';

import Home from './views/Home';
import Nav from './components/Nav';

const App = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
