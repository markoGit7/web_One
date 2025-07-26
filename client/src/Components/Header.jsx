import {React, useState, useEffect} from 'react';
import { Link, useParams, NavLink } from 'react-router-dom';
import {texts} from '../i18n/texts.js';
import {LanguageDropdown} from '../Components'



function Header() {

    const [openMenu, setOpenMenu] = useState(false);
    const { lang } = useParams();
    const t = texts[lang];

    const navList = [
        [t?.nav[0], `/${lang}`],
        [t?.nav[1], `/${lang}/services`],
        [t?.nav[2], `/${lang}/feature`],
        [t?.nav[3], `/${lang}/product`],
        [t?.nav[4], `/${lang}/blogs`],
        [t?.nav[5], `/${lang}/faq`]
    ]
    
       

    return (
        <header className="sticky top-0 z-10 h-[64px] w-full bg-colorheader md:h-[84px]">
            <div className="mx-auto h-full max-w-[1194px] px-0 sm:px-5">
                <div className="relative flex h-full items-center justify-between">
                    {/* Logo */}
                    <div className="image shrink-0 pl-5 sm:pl-0">
                        <Link to={`/${lang}`}>
                            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="logo" width="155" height="24" className="h-auto w-[40vw] max-w-full min-[330px]:w-[140px] md:w-[155px]"/>
                        </Link>
                    </div>

                    {/* Burger Menu */}
                    <div className="absolute right-[20px] top-1/2 block -translate-y-1/2 py-3 sm:hidden">
        
                        <button
                        className="relative h-8 w-8"
                        onClick={() => setOpenMenu(!openMenu)}
                        >
                        <div className="absolute top-1/2 block w-5 -translate-y-1/2 transform">
                            <span
                            className={`absolute block h-0.5 w-7 transform bg-current text-black transition duration-500 ease-in-out ${
                                openMenu ? 'rotate-45' : '-translate-y-1.5'
                            }`}
                            ></span>
                            <span
                            className={`absolute block h-0.5 w-5 transform bg-current text-black transition duration-500 ease-in-out ${
                                openMenu ? 'opacity-0' : ''
                            }`}
                            ></span>
                            <span
                            className={`absolute block h-0.5 w-7 transform bg-current text-black transition duration-500 ease-in-out ${
                                openMenu ? '-rotate-45' : 'translate-y-1.5'
                            }`}
                            ></span>
                        </div>
                        </button>
                    </div>


                    {/* Nav */}
                    <div className={`z-30 absolute top-full w-full overflow-y-auto transition-all duration-300 ease-in-out overflow-x-hidden bg-gray-200 px-0 sm:static sm:h-auto sm:w-auto sm:bg-transparent sm:px-6 h-[0dvh] ${openMenu ? 'h-[calc(100dvh-64px)]' : 'h-0'}`}>
                        <ul className="-mx-0 flex w-full flex-col text-center sm:-mx-[15px] sm:w-auto sm:flex-row md:-mx-[15px] lg:-mx-[25px]">
                            {
                                navList.map((nav, indx) => (
                                    <li key={indx} className="px-0 sm:px-[10px] md:px-[15px] lg:px-[25px]">
                                        <NavLink
                                            to={nav[1]}
                                            {...(nav[1] === `/${lang}` ? { end: true } : {})}
                                            className={({ isActive }) =>
                                                `block border-y border-black/25 px-2 py-4 text-base font-medium !leading-6 text-colornav transition-all duration-300 hover:bg-colorbuttonhover hover:text-white sm:inline-block sm:border-y-0 sm:px-0 sm:py-0 sm:text-sm sm:hover:bg-transparent sm:hover:text-colorbuttonhover md:text-base ${
                                                isActive
                                                    ? 'bg-colorbuttonhover text-white sm:bg-transparent sm:text-colorbuttonhover'
                                                    : ''
                                                }`
                                            }
                                            >
                                            {nav[0]}
                                        </NavLink>
                                    </li>
                                ))
                            }
                            
                        </ul>
                    </div>
                    
                    {/* Language Select */}
                    <LanguageDropdown />
                    
                </div>
            </div>
        </header>
    );

};

export default Header;