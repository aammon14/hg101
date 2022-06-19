import aboutPic from '../../../assets/hand_pointer.png';
import { AboutContainer, AboutText, AboutImage } from './style';

const About = () => {
    return (
        <AboutContainer>
            <AboutText>Teaching experience in middle school and high school, from special education to Advanced Placement! Find handouts and worksheets, individual lessons, unit bundles, full year curriculums, review materials, writing practice, test prep and assessments for United States History, World History, AP United States History, and AP Human Geography.
                <br /><br />Materials are visually appealing, structured, organized and student friendly. No planning needed! All resources accessed through neat file folders and are fully editable - feel free to adjust and edit to best fit your students' needs.</AboutText>
            <AboutImage src={aboutPic} />
        </AboutContainer>
    );
};

export default About;