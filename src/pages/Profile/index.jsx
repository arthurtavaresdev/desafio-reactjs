import React, { useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import Info from "../../components/Info"
import Repositories from '../../components/Repositories';

const Profile = () => {
    const { username } = useParams() || { username: ''};
    const [profile, setProfile] = useState({});

    useEffect( async () => {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const profile = await response.json();

        const stars = await (await fetch(`https://api.github.com/users/${username}/starred?&per_page=100`)).json()
        profile.stars = stars.length || 0;

        setProfile(profile);
    }, username);

    return (    
        <div id="profile">
            <Info profile={profile} />
            <Repositories username={username} />
        </div>
    );
}

export default Profile;