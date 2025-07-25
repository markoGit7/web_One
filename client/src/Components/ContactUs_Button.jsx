import {React, useState} from 'react'
import Form from './Form.jsx'
import {texts} from '../i18n/texts'
import { useParams} from 'react-router-dom';
function ContactUS_Button({ onClick }) {    
    const { lang } = useParams();
    const t = texts[lang];

    return (
        <>
            <div className="button mt-8 inline-block">
                <button onClick={onClick} className={`flex min-h-[52px] ${lang !== 'en' ? 'w-[155px]' : 'w-32'} cursor-pointer items-center justify-center rounded bg-colorblue p-3 text-base font-medium text-white transition-all duration-300 ease-in-out hover:bg-colorbuttonhover`}>{t?.modal_section?.button}</button>
            </div>
        </>
    )
}

export default ContactUS_Button