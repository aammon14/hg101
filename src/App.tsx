import { Routes, Route } from 'react-router-dom';

import { Nav, Footer } from './components';
import { Home, Subject } from './views';

const App = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:subject" element={<Subject />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
