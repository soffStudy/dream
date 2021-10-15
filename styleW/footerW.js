import styled from 'styled-components'

const FooterWrapper = styled.div`
    height: 250px;

    .footer2 {
       
        background-color: blue;
        padding: 20px;
        border-radius: 16px;
        bottom: 0 !important;
        h3{
            color: white;
            font-size: 18px;
        }
    }

    img {
        width: 130px;
        height: 130px;
        border-radius: 50%;
    }
    .geeks {
            padding: 200px;
            text-align: center;
        }
 
        section {
            width: 100%;
            min-height: 300px;
        }
 
        .pattern {
            position: relative;
            background-color: #3bb78f;
            background-image: linear-gradient(315deg,
                    #3bb78f 0%, #0bab64 74%);
        }
 
        .pattern:before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 250px;
            background: url(
https://media.geeksforgeeks.org/wp-content/uploads/20200326181026/wave3.png);
            background-size: cover;
            background-repeat: no-repeat;
        }

`;

export default FooterWrapper;