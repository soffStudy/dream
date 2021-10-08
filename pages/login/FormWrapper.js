import styled from "styled-components";

export const FormWrapper = styled.div`

    .button {
        appearance: none;
        background: none;
        border: none;
        outline: none;
    }

    .helper{
        color: red;
    }

    .formControl{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0;
    }

    .fjf {
        appearance: none;
        background: none;
        border: none;
        outline: none;
    }

    form {
        display: block;
        position: relative;
    }

    .form-inner {
        position: relative;
        display: block;
        background-color: #FFF;
        padding: 30px;
        z-index: 2;
        border-radius: 10px;
        border: 4px solid #223157;
        width: 500px;
        height: 420px;
        font-weight: bold;
        opacity: 0.9;
        h2 {
        color: #888;
        font-size: 28px;
        font-weight: 500;
        margin-bottom: 30px;
        }
        .companyLogo {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .form-group {
        display: block;
        width: 100%;
        margin-bottom: 15px;
        margin-top: 20px;
                label {
                display: block;
                color: #666;
                font-size: 12px;
                margin-bottom: 5px;
                transition: 0.4s;
            }
           
        }
    }
    .css-1nrlq1o-MuiFormControl-root{
        height: 70px;
    }

    .form-inner .form-group:focus-within label {
        color: rgb(11, 11, 134);
    }

    form .form-inner .form-group input {
        display: block;
        width: 100%;
        padding: 10px 15px;
        background-color: #F8F8F8;
        border-radius: 8px;
        transition: 0.4s;
    }

    form .form-inner .form-group input:focus {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    }

    form .form-inner input[type="submit"] {
        display: block;
        padding: 10px 15px;
        border-radius: 8px;
        background-color: blue;
        background: linear-gradient(90deg, rgb(25, 14, 184)10%, rgb(6, 6, 114)80%);
        background-size: 200%;
        background-position: 0%;
        transition: 0.4s;
        color: #FFF;
        font-weight: 700;
        cursor: pointer;
    }

    form .form-inner input[type="submit"]:hover {
        background-position: 100%, 0%;
    }

    .nature {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        height: 50px;
        img{
            height: 70px;
        }
    }

    .login_otish {
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .radio_button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }

    .radio_button>label {
        margin-right: 10px;
    }
    .submits{
        display: flex;
        align-items: center;
        justify-content: end;
    }

    @media screen and (max-width: 700px) {
        .form-inner {
            width: 300px;
            h2{
                font-size: 23px;
                font-weight: 500;
                margin-bottom: 10px;
            }
            .fjf{
                font-weight: 300;
                font-size: 15px;
            }
        }
    }
   
`;