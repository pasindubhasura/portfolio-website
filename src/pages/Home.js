import React, { useRef, useState } from 'react'
import { Footer, Profiles, ProjectModal, Projects, Technologies, Welcome } from '../components';
import '../components/projects.css';
import { projects } from '../data';

const Home = () => {
    const technologyRef = useRef(null);
    const projectRef = useRef(null);
    const profileRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentProject, setCurrentProject] = useState({})

    const onTechnologyPress = () => {
        technologyRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const onProjectPress = () => {
        projectRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const onProfilesPress = () => {
        profileRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const openModal = projectId => {
        const currentProject = projects.find(p => p.id === projectId);
        setCurrentProject(currentProject);
        setIsVisible(true);
    }

    const closeModal = () => {
        setIsVisible(false);
        setCurrentProject({});
    }

    return (
        <div style={{ backgroundColor: '#fff', position: 'relative', }} className="home-container">
            <Welcome onTechnologyPress={onTechnologyPress} onProjectPress={onProjectPress} onProfilesPress={onProfilesPress} />
            <Technologies technologyRef={technologyRef} />
            <ProjectModal
                isVisible={isVisible}
                closeModal={closeModal}
            >
                <ProjectItem currentProject={currentProject} />
            </ProjectModal>
            <Projects projectRef={projectRef} openModal={projectId => openModal(projectId)} />
            <Profiles profileRef={profileRef} />
            <Footer />
        </div>
    )
}

const ProjectItem = ({ currentProject }) => {
    return (
        <div className="project-item-container">
            <img src={currentProject.image} className="project-item-image" alt="project-item" />
            <div className="project-item-description">
                <h2 className="project-item-title">{currentProject.projectName}</h2>
                <div className="flex-left">
                    {currentProject?.technologies?.map(t => {
                        return (
                            <div className="project-technology-tag">{t}</div>
                        )
                    })}
                </div>
                <p className="project-description">{currentProject.description}</p>
            </div>
        </div>
    );
}

export default Home;
