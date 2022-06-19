import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import { Home, UsHistory } from './views';

const App = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ushistory" element={<UsHistory />} />
            </Routes>
        </div>
    );
}

export default App;
