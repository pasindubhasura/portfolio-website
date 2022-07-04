import React from 'react'
import { projects } from '../data';
import "./projects.css";

const Projects = ({ projectRef, openModal }) => {
    return (
        <div className="projects-container" ref={projectRef}>
            <h1 className="project-title">Projects</h1>
            <div className="project-cards">
                {projects.map((item, index) => {
                    return (
                        <ProjectItem openModal={openModal} projectName={item.projectName} image={item.image} technologies={item.technologies} projectId={item.id} />
                    );
                })}
            </div>
        </div>
    )
}

const ProjectItem = ({ projectName, technologies, image, openModal, projectId }) => {
    return (
        <div className="project-cards-item" onClick={() => openModal(projectId)}>
            <img alt={projectName} src={image} className="project-image" />
            <div className="project-card-body">
                <h3 className="project-name">{projectName}</h3>
                <div className="project-tags-container">
                    {technologies.map(item => {
                        return (
                            <div className="project-technology-tag">
                                {item}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Projects