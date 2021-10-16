import styled from "styled-components";

const AsosiyW = styled.div`
color: black;
height: 100vh;
font-family: 'Josefin Sans', sans-serif;
margin-top: 100px;

.asosiyCardlar{
    margin: 10px;
    padding: 10px;
    background-position: center;
    background-size: cover;
    background-color: #2D285E;
    color: white;
    cursor: pointer;
    text-align: center;
    border-radius: 10px;
    box-shadow: 3px 4px 8px 0 black;
    height: 170px;
    transition:  1s !important;
    animation: animation-name 15s ease infinite;
    background: linear-gradient(-45deg, #040139, #0e0b4b, #3183CB, #040139);
    background-size: 400% 400%;

    &:hover{
        background-color: #2D285E;
        transition: .5s !important;
        transform: translateY(-10px);
        
        .logoAsosiy{  
        transform: scale(1.2);
        }
        .boxForButton{
            transform: translateX(80%);
        }
    }
    .logoAsosiy{
        transition: 0.5s;
        width: 70px;
        height: 40px;
        object-fit: cover;
        margin: 0;
        padding: 0;
    }
    .boxForButton{
        transition: 0.5s;
        display: flex;
        justify-content: flex-start;
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

    @keyframes animation-name {   
            0%{
                background-position: 0% 50%;
            }
            50%{
                background-position: 100% 50%;
            }
            100%{
                background-position: 0% 50%;
            }
        }


    
}
`;

export default AsosiyW