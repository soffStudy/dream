import styled from 'styled-components'

const TableWrapper = styled.div`
   .table{
       margin-top: 10px;
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
   }
   .tlgan{
       text-align: end !important;
   }
    tr {
        transition: 0.8s;
        &:hover{
            background-color: gray;
            color: white;
            transform: translateY(-4px);
        }
    }
    /* th{
        background-color: black;
        color: black;
    } */
    .searchIn{
        outline: none;
       
    }
    .css-10botns-MuiInputBase-input-MuiFilledInput-input{
        z-index: 0 !important;
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
        justify-content: end;
        align-items: center;
        padding: 0 20px;
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
    
`;

export default TableWrapper;