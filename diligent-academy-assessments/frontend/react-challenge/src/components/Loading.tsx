import React from 'react';
import '../styles/Loading.css';

const Loading: React.FC = () => {
    return (
        <div className="content">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    );
};

export default Loading;
