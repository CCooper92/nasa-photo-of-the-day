import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/keys';
import styled from 'styled-components';

const Display = () => {

    const [pageData, setPageData] = useState({});

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then((res) => {
            console.log(res);
            setPageData(res.data);
        })
        .catch((err) => console.log(err));

    }, []);

    return (
        <StyleSection>
            
            <StyleHead>
              
               <h1>NASA photo of the day</h1>
               
                
            </StyleHead>

            <StyleImg>

            <p>{pageData.date}</p>
            <a href={pageData.hdurl}><img src={pageData.url} alt='space' /></a>

            </StyleImg>

            <StylePara>
                <h2>{pageData.title}</h2>
                <p>{pageData.explanation}</p>
            </StylePara>


        </StyleSection>
    )
}

const StyleSection = styled.section`
    color: ${(pr) => pr.theme.secondaryColor};
    background-color: ${(pr) => pr.theme.primaryColor};
    display: flex;
    flex-direction: column;
     
    @media (max-width: 550px) {
        width: 100%;
    }
    `;

    const StyleHead = styled.section`
    color: ${(pr) => pr.theme.tertiaryColor};
    `;


    const StyleImg = styled.section`
         img {
            width: 50%;
            border-radius: 20px
         };
        `;


    const StylePara = styled.section`
        p{
            color: ${(pr) => pr.theme.tertiaryColor};
            line-height:1.8;
            padding: 1% 4% 1% 4%;
        };
    
    `;
    
  
    



export default Display;