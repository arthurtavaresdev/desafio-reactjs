import styled from 'styled-components';
import React, { Fragment } from 'react';

const IconText = styled.div`
    display: flex;
    color: #ECEFF4;
    font-family: Lato;
    font-style: italic;
    line-height: ${ props => props.small ? '26px' : '34px'};
    font-size: ${ props => props.small ? '18px;' :'28px;' };
    margin-top: ${ props => props.small ? '2.25rem': '1.66rem'};
    img {
        width: ${ props => props.small ?  '30px;' :  '36px;' };
        height: ${ props => props.small ? '30px;' : '36px;'};
        filter: brightness(0) invert(1);
    }
    span {
        margin-left: ${props => props.small ? 0 : '10px' };
        word-break: break-word;
    }
`;


const IconAndText = ({ icon, title, small }) => {

    if(title){
        return (
            <IconText small={small} >
                <img src={ icon } alt="Icone" />
                <span> { title } </span>
            </IconText>
        );
    } else {
        return <Fragment />;
    }

}

export default IconAndText;
