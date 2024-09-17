import React, { createContext, useContext, useState } from 'react';
import img1 from '../img/photo_2024-09-16_01-15-46.jpg';
import img2 from '../img/pvtreatment.jpg';
import agen1 from '../img/pv.jpg';
import agen2 from '../img/galaxy.jpg';
import agen3 from '../img/saylin.jpg';

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
            { id: 2, img: agen2, name: 'Galaxy grop', link: 'https://www.instagram.com/_.ebo/' },
            { id: 3, img: agen3, name: 'Saylin', link: 'https://www.instagram.com/saylin.crastal_iq?igsh=cGIwcXVjZ3V0cWtr' }
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
