import styled from 'styled-components'

const FooterWrapper = styled.div`
    height: 250px;

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: blue;
        padding: 20px;
        border-radius: 16px;
        bottom: 0 !important;
        h3{
            color: white;
        }
    }

    img {
        width: 130px;
        height: 130px;
        border-radius: 50%;
    }

`;

export default FooterWrapper;