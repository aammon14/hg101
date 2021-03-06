import { About, Testimonials, Subjects } from './components';
import { HomeContainer, Banner, Title } from './style';


const Home = () => {
    return (
        <HomeContainer>
            <Banner>
                <Title>
                    <h1>History & Geography 101</h1>
                </Title>
            </Banner>
            <About />
            <Subjects />
            <Testimonials />
        </ HomeContainer>
    );
}

export default Home;