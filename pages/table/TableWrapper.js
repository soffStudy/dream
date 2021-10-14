import styled from 'styled-components'

const TableWrapper = styled.div`
    min-height:90vh;
    
    td {
        max-width: 150px;
    }
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
    .yashil{
        background-color: #25C039;
    }
    .sariq{
        background-color: #FFFF37;
    }
`;

export default TableWrapper;