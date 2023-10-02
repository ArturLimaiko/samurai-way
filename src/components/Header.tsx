import React from 'react';
import s from './Header.module.css'

//функция которая возвращает jsx разметку
export const Header = () => {
    return (
        <div>
            <header className={s.header}>
                <img
                    src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg"
                    width="50" height="60"/>
            </header>
        </div>
    );
};

