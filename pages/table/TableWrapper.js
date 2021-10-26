import styled from 'styled-components'

const TableWrapper = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    min-height: 100vh;
    margin-top: 50px;
    
   table{
       margin-top: 15px;
   }

   .students{
    font-family: 'Anton', sans-serif;
    font-weight: bold;
    display: flex;
    align-items: center;
   }

   .css-177gid-MuiTableCell-root{
       text-align: center !important;
   }
   
   .css-1azl6jz-MuiTableCell-root{
       text-align: start !important;
   }
   .css-1ygcj2i-MuiTableCell-root{
       text-align: start !important;
   }
   .css-10dfkli-MuiTableCell-root{
       text-align: center;
       &:hover{
           color: white;
       }
   }
   .css-1qgma8u-MuiButtonBase-root-MuiTableSortLabel-root:hover{
       color: white;
   }
   .tlgan{
       text-align: end !important;
   }

   .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root{
       margin-left: 10px;
   }
    tr {
        transition: 0.8s;
        cursor: pointer;
    }

    th{
        background-color: #2D285E;
        color: white;
        &:hover{
            color: white;
        }
       
    }
    .searchIn{
        outline: none;
       
    }
    .css-10botns-MuiInputBase-input-MuiFilledInput-input{
        z-index: 0 !important;
    }

    .css-11w94w9-MuiTableCell-root{
        padding-left: 12px;
    }

    .MuiFilledInput-input{
        height: 30px !important;
        z-index: 0;
    }
    .MuiSelect-select{
        margin-top: 10px;
        padding-top: 14px;
        z-index: 0;
    }
    .inputs{
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 0 20px;
        margin-top: 20px;
    }
    .yumaloq{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        text-align: end !important;
        margin-left: 30px;
    }
    .yashil{
        background-color: green;
    }
    .sariq{
        background-color: yellow;
    }
    /* .options{
        min-width: 200px;
    } */

     .css-10dfkli-MuiTableCell-root{
        padding-left: 15px;
    }

    .css-10botns-MuiInputBase-input-MuiFilledInput-input{
       min-width: 100% !important;
    }

    .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root{
        width: 100%;
    }

    .statusW{
       
        padding: 20px;
        border-radius: 5px;
        display: flex;
        justify-content: flex-end;

        p {
            margin: 6px;
        }

        .span1{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: green;
        }

        .span2{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: yellow;
        }

        .payment{
            display: flex;
            align-items: center;
        }
    }
    
`;

export default TableWrapper;