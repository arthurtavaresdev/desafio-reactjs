import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

import IconAndText from './IconAndText';

import followers from '../assets/images/follow.png';
import fav from '../assets/images/fav.png';
import star from '../assets/images/star.png';
import company from '../assets/images/company.png';
import location from '../assets/images/location.png';
import email from '../assets/images/email.png';
import twitter from '../assets/images/twitter.png';
import link from '../assets/images/link.png';


export const Name = styled.span`
  font-size: 3.344rem;
  font-style: italic;
  line-height: 50px;
  text-align: left;
  width: 100%;
`;

export const Username = styled.div`
  font-size: 2.3408rem;
  font-style: italic;
  line-height: 34px;
  text-align: left;
  margin-top: 5px;
  font-family: Lato;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  min-width: 300px;
  width: 100%;
  padding: 2rem;
  img {
      width: 100%;
  }
`;

export const Bio = styled.div`
  color: #8190a5;
  font-family: Lato;
  font-size: 18px;
  line-height: 28px;
  text-align: left;
  margin-top: 2.25rem;
  width: 100%;
`;

const InfoDiv = styled.div`
  display: flex;
  background: #3b4252;
  height: 100%;
  flex-direction: column;
  color: #eceff4;
  font-family: Lato;
  min-width: 400px;
  padding: 1.7rem;
`;

const Analytics = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const NavLink  = styled(Link)`
  margin: 40px auto;
  text-decoration: none;
  border: 1px solid transparent;
  background-color: #ECEFF4;
  border-radius: 5px;
  width: 192px;
  height: 50px;
  color: #3B4252;
  font-family: Lato;
  font-size: 18px;
  font-style: italic;
  line-height: 50px;
  text-align: center;
`;

const Info = ({ profile }) => {
    return (
        <InfoDiv>
                <ImageWrapper>
                    <img src={ profile.avatar_url } alt="Foto de perfil no github" />
                </ImageWrapper>

                <Name> { profile.name } </Name>

                <Username>
                    @{ profile.login }
                </Username>

                <Bio>
                    { profile.bio }
                </Bio>

                <Analytics>
                  <IconAndText icon={followers} small={true} title={ `${profile.followers} followers`} />
                  <IconAndText icon={fav} small={true} title={ `${profile.following} following`} />
                  <IconAndText icon={star} small={true} title={ `${profile.stars} stars`} />
                </Analytics>

                <IconAndText icon={company} title={profile.company} />
                <IconAndText icon={location} title={profile.location} />
                <IconAndText icon={email} title={profile.email} />
                <IconAndText icon={link} title={profile.blog} />
                <IconAndText icon={twitter} title={`@${profile.twitter_username}`} />

                <NavLink to="/"> Voltar </NavLink>

        </InfoDiv>
    )
}

export default Info;