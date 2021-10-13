import React, { useEffect, useState } from 'react'
import All from '../../components/all'
import Link from 'next/link'
import DocsWrapper from './docsW'
import { useRouter } from 'next/router'

const Docs = () => {
    const owners = [
    
        {
            name: "Ibrohim Akromov",
            address: "Toshkent shahar Yashnobod tumani Ohangrabo-54 +998946910781",
            id: "1",
        },
        {
            name: "Izzat Toychiyev",
            address: "Toshkent shahar Yashnobod tumani Tosh kochasi-78 +998978888778",
            id: "2",
        },
        {
            name: "Asad fbjfj",
            address: "Qashqadaryo viloyati Qamashi tumani Terak-90 +998997777700",
            id: "3",
        },
        {
            name: "Doniyor ffef",
            address: "Samarqand viloyati Registon-554 +99890999999",
            id: "4",
        },
        {
            name: "Anvar Toychidfyev",
            address: "Andijon viloyati Asaka-97 +998998576423",
            id: "5",
        },
        {
            name: "Kamol fsf",
            address: "Surxondaryo viloyti chegara-11 +998941122211",
            id: "6",
        }
    
    ]
    




    let fullData = [];

    const [state, setstate] = useState(1);

    useEffect(() => {
        setstate(localStorage && localStorage.getItem("ID"));

    }, []);



    owners.map(value => {
        if (value.id == state) fullData = value;
    })

    const printPageFun = (divName) => {
        let printContents = document.getElementById(divName).innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }

    return (
        <All>
            <DocsWrapper>

           
                <div className="container docs2">
                    <button className="btn btn-primary" onClick={() => printPageFun('print')}>
                        download
                    </button>
                    <div className='ijrochi'>
                        <p className='ijro'>
                            Ижрочи:
                        </p>
                        <p>
                            "DREAM EDU" МЧЖ
                        </p>
                        <p>
                            Юридик манзил: Тошкент ш., Чилонзор т.,
                            Бунёдкор шох кўчаси, 52-уй.
                            H/R: 20208000705300796001
                            Банк: “Ўзсаноатқурилишбанк” АТБ
                            Сергели филиали
                            MFO: 00403
                            ИИН: 307874545
                        </p>
                        <p>
                            Директор:____________ Н.А.Раҳмутуллаева
                        </p>
                        <p className='text-start'>
                            +998971991300<br/>
                            +998971991400<br/>
                            +998971991500<br/>
                        </p>
                    </div>
                    <div className='byurtma'>
                        
                        <p className='byurtmachi'>
                            Буюртмачи :
                        </p>

                        <p>
                            ФИО: <strong>{ fullData.name }</strong>
                        </p>

                        <p>
                            Паспорт серияси:
                            _________________________________________
                        </p>

                        <p>
                            Қачон ва ким томонидан берилган:
                            _________________________________________
                            _________________________________________
                        </p>

                        <p>
                            Яшаш манзили:<br/>
                            <strong>{ fullData.address }</strong>
                        </p>

                        <p>
                            Тел: _______________________
                            _______________________
                        </p>

                         <p className='text-center'>
                             _________<br/>
                            имзо
                        </p>

                    </div>
                </div>
            </DocsWrapper>
        </All>
    )
}

export default Docs;
