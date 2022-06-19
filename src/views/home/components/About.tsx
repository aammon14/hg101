import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

import aboutPic from '../../../assets/hand_pointer.png';
import { AboutContainer, AboutText, AboutImage, ScrollArrow } from './style';

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isScrolledIntoView, setIsScrolledIntoView] = useState<boolean>(false);

    const scrollIntoView = () => {
        if (containerRef && containerRef.current && window.scrollY > containerRef.current?.clientHeight - 300) {
            setIsScrolledIntoView(true);
        } else if (containerRef && containerRef.current && window.scrollY <= containerRef.current?.clientHeight - 300) {
            setIsScrolledIntoView(false);
        }
    }

    useEffect(() => {
        if (containerRef && containerRef.current) {
            window.addEventListener("scroll", scrollIntoView);

            return () => window.removeEventListener("scroll", scrollIntoView);
        }

    }, [containerRef]);

    return (
        <AboutContainer ref={containerRef}>
            <ScrollArrow active={isScrolledIntoView}><FontAwesomeIcon icon={faAnglesDown} /></ScrollArrow>
            <AboutText active={isScrolledIntoView}>
                <p>Welcome to your #1 source for Social Studies teaching essentials!</p>
                <p>Here at History & Geography 101, we bring you must-have teaching materials from educators with experience in middle school and high school, from special education to Advanced Placement!</p>
                <p>Find handouts and worksheets, individual lessons, unit bundles, full year curriculums, review materials, writing practice, test prep and assessments for United States History, World History, AP United States History, and AP Human Geography.</p>
                <p>Materials are visually appealing, structured, organized and student friendly. No planning needed! All resources accessed through neat file folders and are fully editable - feel free to adjust and edit to best fit your students' needs.</p>
            </AboutText>
            <AboutImage src={aboutPic} active={isScrolledIntoView} />
        </AboutContainer>
    );
};

export default About;