import React, { useRef, useState } from 'react'
import { Footer, Profiles, Projects, Technologies, Welcome } from '../components';
import Modal from 'react-modal';
import '../components/projects.css';

const Home = () => {
    const technologyRef = useRef(null);
    const projectRef = useRef(null);
    const profileRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const onTechnologyPress = () => {
        technologyRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const onProjectPress = () => {
        projectRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const onProfilesPress = () => {
        profileRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const openModal = () => {
        setIsVisible(true);
    }

    const closeModal = () => {
        setIsVisible(false);
    }

    const modalStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }
    return (
        <div style={{ backgroundColor: '#fff' }}>
            <Welcome onTechnologyPress={onTechnologyPress} onProjectPress={onProjectPress} onProfilesPress={onProfilesPress} />
            <Technologies technologyRef={technologyRef} />
            <Modal
                isOpen={isVisible}
                onRequestClose={closeModal}
                overlayClassName="Overlay"
                className="Modal"
                contentLabel="Example Modal"
            >
                <h3>Heloo</h3>
            </Modal>
            <Projects projectRef={projectRef} openModal={openModal} />
            <Profiles profileRef={profileRef} />
            <Footer />
        </div>
    )
}

export default Home;
