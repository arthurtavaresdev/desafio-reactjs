import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import icon from "../../assets/images/search.png";


const Search = ({ title }) => {
    const [username, setUsername] = useState('');
    let history = useHistory();

    function handleClick() {
        history.push("/profile/" + username);
    }

    return (
        <form id="search" onSubmit={handleClick}>
            <div className="title">{title}</div>
            <div className="form-and-button">
                <input onChange={ event => setUsername(event.target.value) } 
                    placeholder="Type the username here..." />
                <button type="submit" className="btn"> <img src={icon} /> Buscar </button>
            </div>
        </form>
    );
}

export default Search;