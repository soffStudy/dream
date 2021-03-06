import styled from "styled-components";

const GloginW = styled.div`
    
    /* background-color: blueviolet; */
    height: 100vh;
    /* background: linear-gradient(-45deg, #040139, #0e0b4b, #3183CB, #040139); */
    /* background: rgb(6,171,155);
    background: linear-gradient(321deg,#e3ae15 0%,#2d285e 46%,#e3ae15 100%); */
    background: url('https://image.freepik.com/free-photo/golden-particles-light-streak-background_1017-32781.jpg');
    background-position: right center;
    background-size: 130% 130%;
    animation: gradient 15s ease infinite;
    /* animatsia */
        @keyframes gradient{
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
     /* animatsia */
  .App {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100%;
  }
  .loading{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .loading2{
      width: 90px !important;
      height: 90px !important;
    }
  }

.welcome button {
  display: block;
  padding: 10px 15px;
  border-radius: 8px;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  background-size: 200%;
  background-position: 0%;
  transition: 0.4s;
  color: #FFF;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  border: none;
}

.welcome button:hover {
  background-position: 100%, 0%;
} 
`;

export default GloginW;