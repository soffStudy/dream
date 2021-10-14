import styled from "styled-components";

const AsosiyW = styled.div`
color: black;
height: 100vh;
font-family: 'Josefin Sans', sans-serif;

.asosiyCardlar{
    margin: 10px;
    padding: 10px;
    /* background-image: radial-gradient( circle 976px at 51.2% 51%,  rgba(11,27,103,1) 0%, rgba(16,66,157,1) 0%, rgba(11,27,103,1) 17.3%, rgba(11,27,103,1) 58.8%, rgba(11,27,103,1) 71.4%, rgba(16,66,157,1) 100.2%, rgba(187,187,187,1) 100.2% ); */
    background: url('dream.png');
    background-position: center;
    background-size: cover;
    background-color: #2D285E;
    color: white;
    text-align: center;
    border-radius: 10px;
    box-shadow: 3px 4px 8px 0 black;
   
    height: 170px;
    transition:  1s !important;

    &:hover{
        content: "";
        background: url(DreamEduLogo.png);
        text-shadow: -4px -4px 8px rgba(104, 104, 104, 1);
        background-size: cover;
        background-position: center;
        background-color: #2D285E;
        transform: scale(1.1);
    }
    
    /* &:hover{
        transform: scale(1.1);
        box-shadow: 5px 6px 10px 0 black;
        background: url('DreamEduLogo.png');
        background-position: right;
        background-color: #2D285E;
    } */
}

a{
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 20px;
}
.colClass{
    position: relative;
    transition:  1s !important;

    &:hover .content{
        width: 100%;
        height: 62%;
        left: 0;
        bottom: 0;
        transition:  1s !important;

    }

    .content{
        position: absolute;
        text-align: center;
        left: 0;
        bottom: 0;
        right: 0;
        height: 50px;
        border-radius: 15px 15px 0 0;
        background-image: linear-gradient( 63.1deg,  rgba(5,23,111,1) 16.4%, rgba(24,95,240,1) 64.5% );
        color: white;
        transition: all 1s cubic-bezier(.48, -0.28, -0.41, 1.4);
        overflow: hidden;
    }
    
}
`;

export default AsosiyW