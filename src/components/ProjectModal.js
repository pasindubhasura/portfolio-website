import React from 'react'
import ReactModal from 'react-modal';
import "./projectModal.css";

const ProjectModal = ({ isVisible, closeModal, children }) => {
    return (
        <ReactModal
            ariaHideApp={false}
            isOpen={isVisible}
            onRequestClose={closeModal}
            overlayClassName="Overlay"
            className="Modal"
            contentLabel="Example Modal"
        >
            {children}
        </ReactModal>
    )
}

export default ProjectModal