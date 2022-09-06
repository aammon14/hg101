import regents from '../../../assets/regents.png';
import docs from '../../../assets/docsondocs.png';
import ush from '../../../assets/us_hist.png';
import env from '../../../assets/env_disasters.png';
import { SubjectsContainer, PreviewPics, SubjectPicker, SubjectCard } from './style';


const Subjects: React.FC = () => {
    return (
        <SubjectsContainer>
            <div>
                <div className="lesson-plans-title">Hundreds of Lesson Plans!</div>
                <PreviewPics>

                    <img src={ush} alt="US History Lesson Plan" />
                    <img src={docs} alt="Documents Preview" />
                    <img src={env} alt="Environmental Disasters Preview" />
                    <img src={regents} alt="Regents Preview" />
                </PreviewPics>
            </div>

            <SubjectPicker>
                <div className="download-title">Download free Social Studies lesson plans for the following subjects:</div>
                <div className="subject-list">
                    <SubjectCard to="ushistory"><div></div>US History</SubjectCard>
                    <SubjectCard to="/"><div></div>AP US History</SubjectCard>
                    <SubjectCard to="/"><div></div>Global History</SubjectCard>
                    <SubjectCard to="/"><div></div>AP Human Geography</SubjectCard>
                    <SubjectCard to="/"><div></div>NYS Regents</SubjectCard>
                </div>
            </SubjectPicker>
        </SubjectsContainer>
    );
};

export default Subjects;