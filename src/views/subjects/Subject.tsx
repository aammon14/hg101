import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SubjectContainer, SubjectBanner, SubjectContent } from './style';
import { lessons } from './lessons';


const Subject = () => {
    type ObjectKey = keyof typeof lessons;

    const params = useParams();
    const [subject, setSubject] = useState(params.subject as ObjectKey);

    const [subjectLessons, setSubjectLessons] = useState<any>(lessons[subject]);



    useEffect(() => {
        params.subject && setSubject(params.subject as ObjectKey);
    }, [params.subject]);

    useEffect(() => {
        console.log('setsubLessons useEffect, subject: ', subject);
        subject.length > 0 && lessons && setSubjectLessons(lessons[subject]);
    }, [subject]);

    return (
        <SubjectContainer>
            <SubjectBanner>
                <h1>{subjectLessons.title}</h1>
            </SubjectBanner>
            <SubjectContent></SubjectContent>
        </SubjectContainer>
    );
};

export default Subject;