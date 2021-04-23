
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import star from '../assets/images/star.png';

const RepositoriesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 4.86%;
    padding-right: 8.33%;
`;

const Repository = styled.div`
    display: grid;
    text-transform: capitalize;
    grid-template-areas:
		"name"
		"description"
		"repo-info"
    ;
    padding-bottom: 1.04%;
    border-bottom: 1px solid #ECEFF4;
    :first-child{
        padding-top: 2.93%;
    }

    .name{
        grid-area: name;
        color: #3B4252;
        font-family: Lato;
        font-size: 24px;
        font-style: italic;
        line-height: 34px;
        text-align: left;
    }

    .description {
        grid-area: description;
        color: #3B4252;
        font-family: Lato;
        font-size: 18px;
        line-height: 28px;
        text-align: left;
    }

    .repo-info {
        grid-area: repo-info;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .stars{
            display: flex;
            align-items: center;
            width: 100px;
            img {
                width: 30px;
                height: 30px;
            }
        }
    
        .update {
            width: 300px;
            font-family: Lato;
            font-size: 20px;
            font-style: italic;
            line-height: 26px;
            text-align: left;
        }
    }
`;

const Repositories = ({ username }) => {
    const [repositories, setRepositories] = useState([]);

    useEffect( async () => {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repositories = await response.json();
        setRepositories(repositories);
    }, []);

    return (
        <RepositoriesWrapper>
            {repositories.map( repo => (
                <Repository key={repo.node_id}>
                    <div className="name"> { repo.name }</div>
                    <div className="description"> { repo.description }</div>
                    <div className="repo-info">
                        <span className="stars"> <img src={star} /> { repo.stargazers_count }</span>
                        <span className="update"> • { repo.updated_at }</span>
                    </div>
                </Repository>
            ))}
        </RepositoriesWrapper>
    );
}

export default Repositories;