import React from 'react';
import PlayersCard from '../PlayersCard/PlayersCard';
import './Home.css';

const Home = () => {
    return (
        <div>
            <h1 className="top-text">Select Your Dream Xi</h1>
            <div className="mt-5">
                <PlayersCard></PlayersCard>
            </div>
        </div>
    );
};

export default Home;