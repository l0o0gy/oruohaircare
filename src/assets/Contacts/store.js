import React, { createContext, useContext, useState } from 'react';
import img1 from '../img/main.PNG';
import img2 from '../img/pvtreatment.jpg';
import agen1 from '../img/pv.jpg';
import agen2 from '../img/ouro.jpeg';
import agen3 from '../img/saylin.jpg';
import Cardimg1 from '../img/about.jpg';
import Cardimg2 from '../img/pv.jpg';
import Cardimg3 from '../img/compo.jpg';

const DataContext = createContext();

const data = [
    {
        id: 1,
        img: img1,
        title: 'ORUO',
        description: 'مسرح شعر',
        info: `بروتين معالج ومسرح يقوم بتغذية الشعر ومعالجة فروة الرأس. 
        يعالج (التقصف والتساقط وعدم النمو والشعر الخفيف والنفشة والتساقط والتجعيد والكسرات وأصعب أنواع الشعر مثل الشعر الأفريقي) ✅
        خالي من المواد الكيميائية ومادة الفورمالين الضارة بفروة الرأس. 
        آمن لاستعمال الأطفال والحوامل.`,
        agents: [
            { id: 1, img: agen1, name: 'PV Cosmetic', link: 'https://www.instagram.com/pv_cosmetic/' },
            { id: 2, img: agen2, name: 'Oruo', link: 'https://www.instagram.com/oruo_iraq?igsh=MXd1cXNkeGsxemI2&utm_source=qr' },
        ],
        agentstick:[
            { id: 2, img: agen2, name: 'Oruo', link: 'https://www.tiktok.com/@oruo_iraq' },
        ],
        agentsfac:[
            {id: 1, img: agen1, name: 'PV Cosmetic', link: 'https://www.facebook.com/share/19qRksdBmj/?mibextid=wwXIfr'},
            { id: 2, img: agen2, name: 'Oruo', link: 'https://www.facebook.com/share/1CdFBV6xYp/?mibextid=wwXIfr' },
        ],
        CardInfo:[
            {id:1,img:Cardimg1,title:'لماذا تختارين ORUO Nano Filter'},
            {id:2,img:Cardimg2,title:'طريقة استخدام ORUO Nano Filter'},
            {id:3,img:Cardimg3,title:' مكونات ORUO Nano Filter'},
        ]


    },
];

export const DataProvider = ({ children }) => {
    const [items] = useState(data);

    return (
        <DataContext.Provider value={items}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
