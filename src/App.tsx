import { Routes, Route } from 'react-router-dom';

import { Nav, Footer } from './components';
import { Home, UsHistory } from './views';

const App = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ushistory" element={<UsHistory />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
