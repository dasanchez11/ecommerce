import {createGlobalStyle} from 'styled-components';

export const GlobalStyle =  createGlobalStyle`
    body{
        font-family: 'Open Sans Condensed';
        padding: 20px 60px;

        @media screen and (max-width:1000px) {
            padding: 10px;
            width: 100%;
        }

        @media screen and (max-width:800px) {
            padding: 10px;
            width: 100%
        }

        @media screen and (max-width:500px) {
            padding: 0px;
            width: 100%
        }
    }
    
    a {
        text-decoration: none;
        color: black;
    }
    
    *{
        box-sizing: border-box;
    }

`

