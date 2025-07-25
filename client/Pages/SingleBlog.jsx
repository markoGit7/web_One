import {React, useState, useEffect} from 'react'
import {Header, ContactUS_Button, Form, Footer} from '../src/Components';
import {texts} from '../src/i18n/texts';
import { Link, useParams} from 'react-router-dom';

function SingleBlog( {onOpenContactModal} ) {

    const { lang } = useParams();
    const t = texts[lang];

    
    return (
        <>
            <Header />
            <div className="block w-full overflow-x-hidden">
                {/* Article Block */}
                <section className="relative w-full py-[45px]">
                    <div className="mx-auto max-w-[1340px] px-5">
                        {/* Nav */}
                        <div className="mb-[48px]">
                            <ul className="-mx-[6px] flex flex-row">
                                <Link to={`/`} className="relative px-[6px] text-base font-medium !leading-tight text-colorgray600 before:absolute before:right-0 before:top-0 before:text-colorLightGray [&:not(:last-child)]:pr-[11px] [&:not(:last-child)]:text-colorblue [&:not(:last-child)]:before:content-['/']">
                                    {t.nav[0]}
                                </Link>

                                <Link to={`/${lang}/blogs`} className="relative px-[6px] text-base font-medium !leading-tight text-colorgray600 before:absolute before:right-0 before:top-0 before:font-semibold before:text-colorLightGray [&:not(:last-child)]:pr-[11px] [&:not(:last-child)]:text-colorblue [&:not(:last-child)]:before:content-['/']">
                                    {t.nav[4]}
                                </Link>

                                <Link to={`/${lang}/blogs/single`} className="relative px-[6px] text-base font-medium !leading-tight text-colorgray600 before:absolute before:right-0 before:top-0 before:font-semibold before:text-colorLightGray [&:not(:last-child)]:pr-[11px] [&:not(:last-child)]:text-colorblue [&:not(:last-child)]:before:content-['/']">
                                    {t.nav[6]}
                                </Link>
                            </ul>
                        </div>

                        {/* Post */}
                        <div className="-mx-3 grid grid-cols-12 flex-wrap">
                            {/* Content */}
                            <div className="col-span-12 px-3 xl:col-span-7">
                                <div className="mb-8 w-full max-w-full xl:w-[480px]">
                                    <h1 className="text-[25px] font-semibold leading-normal text-colorgray900 min-[450px]:text-[32px]">
                                        {t.leftSide_section.title}
                                    </h1>
                                </div>

                                <span className="mb-8 block text-base font-normal !leading-normal tracking-[0.8px] text-colorgray600">{t.leftSide_section.publishDate}</span>

                                <div className="mb-8 text-base font-normal !leading-normal text-colorgray700">
                                    <p>
                                        {t.leftSide_section.text1}
                                    </p>
                                </div>

                                <div className="mb-8 h-[250px]">
                                    <picture>
                                        <source srcSet={`${import.meta.env.BASE_URL}article-img-1.webp`} type="image/webp" />
                                        <img src={`${import.meta.env.BASE_URL}article-img-1.jpg`} alt="article-img-1.jpg" width="750" height="250" className="h-full w-full object-cover object-center" />
                                    </picture>
                                </div>
                                <div className="mb-8 text-base font-normal !leading-normal text-colorgray700">
                                    <p>
                                        {t.leftSide_section.text2}
                                    </p>
                                </div>

                                <div className="mb-8 h-[250px]">
                                    <picture>
                                        <source srcSet={`${import.meta.env.BASE_URL}article-img-2.webp`} type="image/webp" />
                                        <img src={`${import.meta.env.BASE_URL}article-img-2.jpg`} alt="article-img-2.jpg" width="750" height="250" className="h-full w-full object-cover object-center" />
                                    </picture>
                                </div>

                                <div className="text-base font-normal !leading-normal text-colorgray700">
                                    <p>
                                        {t.leftSide_section.text3}
                                    </p>
                                </div>
                            </div>

                            {/* Profile */}
                            <div className="col-span-12 w-full justify-self-start px-3 pt-[80px] md:pt-[125px] xl:col-span-5 xl:w-auto xl:justify-self-end">
                                <div className="mb-[26px] flex flex-row flex-wrap items-center justify-center xl:justify-start">
                                    <div className="size-[109px] max-w-full rounded-[50%]">
                                        <picture>
                                            <source srcSet={`${import.meta.env.BASE_URL}profile.webp`} type="image/webp" />
                                            <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="" width="110" height="111" className="h-full w-full rounded-[50%]" />
                                        </picture>
                                    </div>

                                    <div className="ml-[22px] text-base font-normal !leading-normal text-colorgray600">
                                        <span>{t.rightSide_section.author}</span>
                                        <p>{t.rightSide_section.career}</p>
                                    </div>
                                </div>
                                {/* Box */}
                                <div className="w-full max-w-full bg-white p-[34px_52px_34px_48px] shadow-[0_0_20px_rgba(0,0,0,10%)] lg:shadow-[0_8px_34px_rgba(0,0,0,10%)] xl:w-[440px]">
                                    <h3 className="mb-6 text-2xl font-normal !leading-normal text-colorgray900">
                                        {t.rightSide_section.list.title}
                                    </h3>
                                    {t.rightSide_section.list.content.map((txt, indx) => (
                                        <div key={indx} className="[&:not(:last-child)]:mb-[10px]">
                                            <a href="#" className="text-[14px] font-normal leading-normal text-colorgray900 underline decoration-solid transition-all duration-200 ease-out hover:text-colorblue hover:no-underline min-[450px]:text-[18px]">
                                               {txt}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Block */}
                <section className="relative h-auto w-full py-20 lg:h-[256px]">
                    <div className="relative z-10 mx-auto max-w-[1340px] px-5">
                        <div className="grid grid-cols-12">
                            <div className="col-span-0 lg:col-span-2"></div>
                            <div className="col-span-12 lg:col-span-7">
                                <div className="flex flex-col items-center justify-between gap-y-5 lg:flex-row lg:gap-y-0">
                                    <div className="w-[293px] max-w-full text-center lg:text-start">
                                        <h2 className={`${lang === 'en'? 'text-[40px]' : 'text-[35px]'} font-medium leading-normal text-white`}>
                                            {t.getStarted.text.split(' ').map((word, indx) =>
                                                indx === 2 && word.toLowerCase() === 'you' || word.toLowerCase() === 'тебе' && indx === 4 ? (
                                                <span key={indx} className="text-colorblue"> {word}</span>
                                                ) : (
                                                ' ' + word
                                                )
                                            )}
                                        </h2>
                                    </div>

                                    <div className="button inline-block">
                                        <ContactUS_Button onClick={onOpenContactModal}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-0 lg:col-span-3"></div>
                        </div>
                    </div>
                    {/* Background Image */}
                    <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gray-900/90 before:content-['']">
                        <picture>
                            <source srcSet={`${import.meta.env.BASE_URL}background-img-article.webp`} type="image/webp" />
                            <img src={`${import.meta.env.BASE_URL}background-img-article.jpg`} alt="background-img-article" width="1437" height="256" className="h-full w-full object-cover object-center" />
                        </picture>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <Footer setOpen={onOpenContactModal}/>
        </>
    )
}

export default SingleBlog