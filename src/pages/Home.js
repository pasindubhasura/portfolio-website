import React from 'react'
import { Technologies, Welcome } from '../components';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#121212' }}>
            <Welcome />
            <Technologies />
        </div>
    )
}

export default Home;
