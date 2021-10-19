import styled from "styled-components";

const DocsWrapper = styled.div`
    color: black;
    height: 100vh;
    margin-top: 40px;

    .docs2{
        border-radius: 5px;
        box-shadow: 10px 10px 23px #00000078,
        -10px -10px 23px #FFFFFF26;;
        padding: 20px;
        text-align: center;
        img{
            height: 400px;
        }
        .img1{
            width: 800px;
            object-fit: cover;
        }
    }

    .back{
        padding: 10px;
    }
   
`;

export default DocsWrapper;