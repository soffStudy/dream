import styled from "styled-components";

const AsosiyW = styled.div`
.asosiyCardlar{
    margin: 10px;
    padding: 10px;
    background-color: #058347;
    border-radius: 10px;
    box-shadow: 5px 6px 10px 0 black;
    color: white;
    &:hover{
        transition: 0.5s;
        background-color: black;
        transform: scale(1.3) translateY(20px);
    }
}

a{
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 20px;
}
`;

export default AsosiyW