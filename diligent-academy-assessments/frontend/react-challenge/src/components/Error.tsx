import {ErrorProps} from "../interfaces/ErrorProps";
import React from 'react';

const Error: React.FC<ErrorProps> = ({ message }) => {
    return <p>{message}</p>;
};

export default Error;
