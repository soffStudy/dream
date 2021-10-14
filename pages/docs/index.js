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

    return (
        <All>
            <DocsWrapper>


                <div className="container docs2">
                    <img src="favicon.ico" alt="next" />
                    <a href="favicon.ico" download> Download</a>

                </div>
            </DocsWrapper>
        </All>
    )
}

export default Docs;
