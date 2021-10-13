import styled from "styled-components";

const DocsWrapper = styled.div`
    color: black;
    height: 100vh;
    
    .dataS{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
    }
    .docs2{
        border-radius: 5px;
        box-shadow: 10px 10px 23px #00000078,
        -10px -10px 23px #FFFFFF26;;
        display: flex;
        justify-content: center;
        padding: 20px;
    }
    .ijrochi{
        width: 400px;
        text-align: center;
        border: 2px solid black;
        padding: 10px;
        .ijro {
            border-bottom: 2px solid black;
        }
    }
    .byurtma {
        width: 400px;
        border-top: 2px solid black;
        border-right: 2px solid black;
        border-bottom: 2px solid black;
        padding: 10px;
        .byurtmachi{
            border-bottom: 2px solid black;
            text-align: center;
        }
    }
`;

export default DocsWrapper;