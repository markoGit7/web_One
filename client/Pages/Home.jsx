import {React, useState, useEffect} from 'react'
import {Header, Slider, ContactUS_Button, RegisterButton, InfinitSpinIcons, Tabs, Accordion, Footer, After_Submit_Message} from '../src/Components';
import {texts} from '../src/i18n/texts';
import { useParams} from 'react-router-dom';

function Home( { onOpenContactModal } ) {
    const { lang } = useParams();
    const t = texts[lang];
    

    return (
        <>
            <Header />
            <div className='overflow-x-hidden w-full'>
                <Slider />
                {/* Block Horizontal Icons */}
                <section className="relative w-full pb-[65px] pt-[40px]">
                    <div className="mx-auto max-w-[1194px] px-5">
                        <div className="mb-[41px] text-center">
                            <h2 className="mb-2 text-[27px] font-semibold !leading-[122%] text-gray-700 min-[450px]:text-3xl md:text-4xl">
                                {t?.icons_section?.title}
                            </h2>
                            <p className="font-normal text-gray-600">
                                {t?.icons_section?.text}
                            </p>
                        </div>

                        <div className="-mx-3 flex flex-row flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:justify-between">
                            <InfinitSpinIcons />
                        </div>
                    </div>
                </section>
                
                {/* 3 Cards Block */}
                <section className="relative w-full text-center">
                    <div className="mx-auto max-w-[1194px] px-5">
                        <div className="mb-4 inline-block max-w-[542px]">
                            <h2 className="mb-2 text-[27px] font-semibold !leading-[122%] text-gray-700 min-[450px]:text-3xl md:text-4xl">
                                {t?.threeCards_section.title}
                            </h2>
                            <p className="font-normal text-gray-600">
                                {t?.threeCards_section.text}
                            </p>
                        </div>
                        <div className="-mx-16 flex flex-row flex-wrap items-stretch justify-center gap-y-4 lg:justify-start">
                            {/* Card 1 */}
                            <div className="max-w-full basis-full px-16 md:basis-1/2 lg:basis-1/3">
                                <div className="h-full w-full rounded-lg bg-white px-4 py-6 shadow-[0_2px_4px_rgba(171,190,209,0.3)]">
                                    {/* Image */}
                                    <div className="relative mb-4 inline-block w-[50px] max-w-full">
                                        <div className="h-[49px] max-w-[50px] rounded-bl-[5px] rounded-br-[18px] rounded-tl-[10px] rounded-tr-[5px] bg-blue-100"></div>
                                        <div className="absolute -left-[15px] top-[3px] z-0 h-[30px] w-12">
                                            <img src={`${import.meta.env.BASE_URL}card-img-1.svg`} alt="#" width="48" height="27" className="h-auto max-h-[30px] w-auto max-w-12" />
                                        </div>
                                    </div>
                                    {/* Text */}
                                    <h2 className="mb-2 text-[23px] font-bold leading-[128%] text-gray-700 min-[450px]:text-[28px]">
                                        {t?.threeCards_section.card1.title}
                                    </h2>

                                    <p className="text-sm font-normal text-gray-600">
                                        {t?.threeCards_section.card1.text}
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="max-w-full basis-full px-16 md:basis-1/2 lg:basis-1/3">
                                <div className="h-full w-full rounded-lg bg-white px-4 py-6 shadow-[0_2px_4px_rgba(171,190,209,0.3)]">
                                    {/* Image */}
                                    <div className="relative mb-4 inline-block w-[50px] max-w-full">
                                        <div className="h-[49px] max-w-[50px] rounded-bl-[5px] rounded-br-[18px] rounded-tl-[10px] rounded-tr-[5px] bg-blue-100"></div>
                                        <div className="absolute -left-[8.5px] top-[2px] z-0 h-[30px] w-12">
                                            <img src={`${import.meta.env.BASE_URL}card-img-2.svg`} alt="#" width="36" height="31" className="h-auto max-h-[30px] w-auto max-w-12" />
                                        </div>
                                    </div>
                                    {/* Text */}
                                    <h2 className="mb-2 text-[23px] font-bold leading-[128%] text-gray-700 min-[450px]:text-[28px]">
                                        {t?.threeCards_section.card2.title}
                                    </h2>

                                    <p className="text-sm font-normal text-gray-600">
                                        {t?.threeCards_section.card2.text}
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="max-w-full basis-full px-16 md:basis-1/2 lg:basis-1/3">
                                <div className="h-full w-full rounded-lg bg-white px-4 py-6 shadow-[0_2px_4px_rgba(171,190,209,0.3)]">
                                    {/* Image */}
                                    <div className="relative mb-4 inline-block w-[50px] max-w-full">
                                        <div className="h-[49px] max-w-[50px] rounded-bl-[5px] rounded-br-[18px] rounded-tl-[10px] rounded-tr-[5px] bg-blue-100"></div>
                                        <div className="absolute -left-[7.3px] top-[2px] z-0 h-[30px] w-12">
                                            <img src={`${import.meta.env.BASE_URL}card-img-3.svg`} alt="#" width="34" height="30" className="h-auto max-h-[30px] w-auto max-w-12 fill-[#103E13]" />
                                        </div>
                                    </div>
                                    {/* Text */}
                                    <h2 className="mb-2 text-[23px] font-bold leading-[128%] text-gray-700 min-[450px]:text-[28px]">
                                        {t?.threeCards_section.card3.title}
                                    </h2>

                                    <p className="text-sm font-normal text-gray-600">
                                        {t?.threeCards_section.card3.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Image Text Block */}
                <section className="relative w-full py-[52px]">
                    <div className="mx-auto max-w-[1194px] px-5">
                        <div className="-mx-3 grid grid-cols-12 items-center gap-y-8 lg:gap-y-0">
                            <div className="col-span-12 px-3 text-center lg:col-span-5 lg:text-start">
                                <div className="image inline-block max-w-[442px]">
                                    <img src={`${import.meta.env.BASE_URL}text-image.svg`} alt="#" width="442" height="329" className="h-auto w-full" />
                                </div>
                            </div>
                            <div className="col-span-12 px-3 lg:col-span-7">
                                <div className="max-w-full text-center lg:max-w-[601px] lg:text-start">
                                    <h2 className="mb-4 text-2xl font-semibold !leading-[122%] text-gray-700 min-[350px]:text-3xl min-[475px]:text-4xl">
                                        {t?.textImage_section1.title}
                                    </h2>

                                    <p className="text-sm font-normal text-gray-600">
                                        {t?.textImage_section1.text}
                                    </p>

                                    <RegisterButton/>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2 By 2 Icons Block */}
                <section className="relative w-full bg-gray-100 py-16">
                    <div className="mx-auto max-w-[1194px] px-5">
                        <div className="-mx-9 grid grid-cols-12 flex-row flex-wrap items-center gap-y-9 md:gap-y-0">
                            <div className="col-span-12 md:col-span-5 px-9 text-center md:text-start">
                                <div className="mb-2 w-full md:w-[415px] max-w-full">
                                    <h2 className="text-2xl font-semibold !leading-[122%] text-gray-700 min-[350px]:text-3xl min-[475px]:text-4xl">{t?.stats_section.title}<span className="text-colorblue block md:inline-block">{t?.stats_section.blue}</span></h2>
                                </div>
                                <p className="text-base font-normal text-gray-600">{t?.stats_section.text}</p>
                            </div>
                            <div className="col-span-12 md:col-span-7 px-9">

                                <div className="w-full ml-0 md:w-[540px] max-w-full md:ml-auto">
                                    <div className="flex flex-row flex-wrap -mx-[15px] gap-y-10 text-center md:text-start">
                                        {/* Status 1 */}
                                        <div className="w-full sm:w-1/2 px-[15px]">
                                            <div className="relative pl-16 inline-block text-start break-all">
                                                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-12 h-12 flex items-center justify-center">
                                                    <picture>
                                                        <source srcSet="/two_human_icon.webp" type="image/webp" />
                                                        <img src={`${import.meta.env.BASE_URL}two_human_icon.png`} alt="humans-icon" width="48" height="32" className="max-w-[47px] max-h-9 w-auto h-auto" /> 
                                                    </picture>
                                                </div>
                                                <h3 className="text-gray-700 font-bold text-[28px] leading-[128%]">2,245,341</h3>
                                                <span className="text-base font-normal text-gray-600">{t?.stats_section.top_left}</span>
                                            </div>
                                        </div>
                        
                                        {/* Status 2 */}
                                        <div className="w-full sm:w-1/2 px-[15px]">
                                            <div className="relative pl-16 inline-block text-start break-all">
                                                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-12 h-12 flex items-center justify-center">
                                                <picture>
                                                        <source srcSet="/blue-hands.webp" type="image/webp" />
                                                        <img src={`${import.meta.env.BASE_URL}blue-hands.png`} alt="blue-hands-icon" width="34" height="30" className="max-w-[47px] max-h-9 w-auto h-auto" />
                                                </picture>
                                                </div>
                                                <h3 className="text-gray-700 font-bold text-[28px] leading-[128%]">46,328</h3>
                                                <span className="text-base font-normal text-gray-600">{t?.stats_section.top_right}</span>
                                            </div>
                                        </div>

                                        {/* Status 3 */}
                                        <div className="w-full sm:w-1/2 px-[15px]">
                                            <div className="relative pl-16 inline-block text-start break-all">
                                                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-12 h-12 flex items-center justify-center">
                                                    <img src={`${import.meta.env.BASE_URL}finger-icon.svg`} alt="finger-icon" width="34" height="38" className="max-w-[47px] max-h-9 w-auto h-auto" />
                                                </div>
                                                <h3 className="text-gray-700 font-bold text-[28px] leading-[128%]">828,867</h3>
                                                <span className="text-base font-normal text-gray-600">{t?.stats_section.bottom_left}</span>
                                            </div>
                                        </div>

                                        {/* Status 4 */}
                                        <div className="w-full sm:w-1/2 px-[15px]">
                                            <div className="relative pl-16 inline-block text-start break-all">
                                                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-12 h-12 flex items-center justify-center">
                                                    <img src={`${import.meta.env.BASE_URL}wallet-icon.svg`} alt="wallet-icon" width="42" height="34" className="max-w-[47px] max-h-9 w-auto h-auto" />
                                                </div>
                                                <h3 className="text-gray-700 font-bold text-[28px] leading-[128%]">1,926,436</h3>
                                                <span className="text-base font-normal text-gray-600">{t?.stats_section.bottom_right}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Image Text Block */}
                <section className="relative w-full py-[52px]">
                    <div className="mx-auto max-w-[1194px] px-5">
                        <div className="-mx-3 grid grid-cols-12 items-center gap-y-8 lg:gap-y-0">
                            <div className="col-span-12 px-3 text-center lg:col-span-5 lg:text-start">
                                <div className="image inline-block max-w-[442px]">
                                    <img src={`${import.meta.env.BASE_URL}text-image2.svg`} alt="#" width="442" height="434" className="h-auto w-full" />
                                </div>
                            </div>
                            <div className="col-span-12 px-3 lg:col-span-7">
                                <div className="max-w-full text-center lg:max-w-[601px] lg:text-start">
                                    <h2 className="mb-4 text-2xl font-semibold !leading-[122%] text-gray-700 min-[350px]:text-3xl min-[475px]:text-4xl">
                                        {t?.textImage_section2.title}
                                    </h2>

                                    <p className="text-sm font-normal text-gray-600">
                                        {t?.textImage_section2.text}
                                    </p>

                                    <RegisterButton/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Author Feed Block */}
                <section className="relative w-full bg-colorgray100 py-8">
                    <div className="mx-auto max-w-[1194px] px-5">
                        <div className="-mx-8 grid grid-cols-12 items-center gap-y-4 sm:gap-y-8 lg:gap-y-0">
                            <div className="col-span-12 px-8 text-center lg:col-span-4 lg:text-start">
                                <div className="image inline-block max-w-[326px] rounded-lg">
                                    <img src={`${import.meta.env.BASE_URL}tesla.jpg`} alt="#" width="324" height="324" className="h-auto w-full rounded-lg object-cover object-center" />
                                </div>
                            </div>
                            <div className="col-span-12 px-8 text-center lg:col-span-8 lg:text-start">
                                <p className="mb-4 font-medium !leading-[150%] text-gray-700 lg:text-base">
                                    {t?.author_section.text}
                                </p>

                                <h3 className="mb-2 text-xl font-semibold text-colorblue">
                                    Jane Doe
                                </h3>

                                <p className="mb-8 text-sm font-normal !leading-[150%] text-gray-700 sm:text-base">
                                    {t?.author_section.career}
                                </p>

                                <div className="-mx-3 flex flex-row flex-wrap items-center justify-center gap-y-3 lg:justify-start">
                                    {/* Icon 1 */}
                                    <div className="px-3">
                                        <a href="#">
                                            <img src={`${import.meta.env.BASE_URL}client-1.svg`} alt="#" className="h-auto max-h-[40px] w-auto max-w-[55px]" />
                                        </a>
                                    </div>

                                    {/* Icon 2 */}
                                    <div className="px-3">
                                        <a href="#">
                                            <img src={`${import.meta.env.BASE_URL}client-2.svg`} alt="#" className="h-auto max-h-[40px] w-auto max-w-[55px]" />
                                        </a>
                                    </div>

                                    {/* Icon 3 */}
                                    <div className="px-3">
                                        <a href="#">
                                            <img src={`${import.meta.env.BASE_URL}client-3.svg`} alt="#" className="h-auto max-h-[40px] w-auto max-w-[55px]" />
                                        </a>
                                    </div>

                                    {/* Icon 4 */}
                                    <div className="px-3">
                                        <a href="#">
                                            <img src={`${import.meta.env.BASE_URL}client-4.svg`} alt="#" className="h-auto max-h-[40px] w-auto max-w-[55px]" />
                                        </a>
                                    </div>

                                    {/* Icon 5 */}
                                    <div className="px-3">
                                        <a href="#">
                                            <img src={`${import.meta.env.BASE_URL}client-5.svg`} alt="#" className="h-auto max-h-[40px] w-auto max-w-[55px]" />
                                        </a>
                                    </div>

                                    {/* Icon 6 */}
                                    <div className="px-3">
                                        <a href="#">
                                            <img src={`${import.meta.env.BASE_URL}client-6.svg`} alt="#" className="h-auto max-h-[40px] w-auto max-w-[55px]" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3 Blogs Block */}
                <section className="relative w-full  py-12 pb-[45px] sm:pb-16">
                    <div className="mx-auto max-w-[1194px] px-5">
                        <div className="mb-4 text-center w-[628px] max-w-full mx-auto">
                            <h2 className="mb-2 text-[27px] font-semibold !leading-[122%] text-gray-700 min-[450px]:text-3xl md:text-4xl">
                                {t?.cards_section.title}
                            </h2>
                            <p className="font-normal text-gray-600">
                                {t?.cards_section.text}
                            </p>
                        </div>

                        <div className="flex flex-row flex-wrap items-stretch -mx-3 justify-center gap-y-7 lg:gap-y-0">
                            {/* 1 */}
                            <div className="w-full sm:w-1/2 lg:w-1/3 px-3">
                                <div className="relative pb-20 group">
                                    {/* Image */}
                                    <div className="w-full h-[286px] overflow-hidden rounded-lg">
                                        <picture>
                                            <source srcSet={`${import.meta.env.BASE_URL}absolute-img-1.webp`} type="image/webp" />
                                            <img src={`${import.meta.env.BASE_URL}absolute-img-1.jpg`} alt="img1" width="368" height="287" className="w-[200vw] sm:w-full h-full object-cover object-center rounded-lg group-hover:scale-1 group-hover:rotate-0 sm:group-hover:scale-125 sm:group-hover:rotate-12 transition-all duration-1000 ease-in-out" />
                                        </picture>
                                    </div>

                                    {/* Box */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-100 w-[calc(100%-50px)] p-4 pb-[76px] rounded-lg text-center">
                                        <h3 className="break-words font-semibold text-[20px] leading-[140%] text-gray-600">{t?.cards_section.card1.text}</h3>
                                        <div className="absolute bottom-4 w-full text-center left-0 rounded-b-lg">
                                            <div className="text-colorblue relative font-semibold text-[20px] inline-block  leading-[140%]">
                                                <a href="article.html" className="pr-8 relative before:absolute before:right-1 before:top-1/2 before:-translate-y-1/2 before:bg-right-arrow before:content-[''] before:w-[15px] before:h-2 before:inline-block before:bg-no-repeat before:bg-center before:bg-cover hover:text-blue-700 transition-all duration-300 ease-in-out">
                                                    {t?.cards_section.card1.button}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2 */}
                            <div className="w-full sm:w-1/2 lg:w-1/3 px-3">
                                <div className="relative pb-20 group">
                                    {/* Image */}
                                    <div className="w-full h-[286px] overflow-hidden rounded-lg">
                                        <picture>
                                            <source srcSet={`${import.meta.env.BASE_URL}absolute-img-2.webp`} type="image/webp" />
                                            <img src={`${import.meta.env.BASE_URL}absolute-img-2.jpg`} width="368" height="287" className="w-full h-full object-cover object-center rounded-lg group-hover:scale-1 group-hover:rotate-0 sm:group-hover:scale-125 sm:group-hover:rotate-12 transition-all duration-1000 ease-in-out" />
                                        </picture>
                                    </div>

                                    {/* Box */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-100 w-[calc(100%-50px)] p-4 pb-[76px] rounded-lg text-center">
                                        <h3 className="break-words font-semibold text-[20px] leading-[140%] text-colorgray600">{t?.cards_section.card2.text}</h3>
                                        <div className="absolute bottom-4 w-full text-center left-0 rounded-b-lg">
                                            <div className="text-colorblue relative font-semibold text-[20px] inline-block  leading-[140%]">
                                                <a href="article.html" className="pr-8 relative before:absolute before:right-1 before:top-1/2 before:-translate-y-1/2 before:bg-right-arrow before:content-[''] before:w-[15px] before:h-2 before:inline-block before:bg-no-repeat before:bg-center before:bg-cover hover:text-blue-700 transition-all duration-300 ease-in-out">
                                                    {t?.cards_section.card2.button}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3 */}
                            <div className="w-full sm:w-1/2 lg:w-1/3 px-3">
                                <div className="relative pb-20 group">
                                    {/* Image */}
                                    <div className="w-full h-[286px] overflow-hidden rounded-lg">
                                        <picture>
                                            <source srcSet={`${import.meta.env.BASE_URL}absolute-img-3.webp`} type="image/webp" />
                                            <img src={`${import.meta.env.BASE_URL}absolute-img-3.jpg`} width="368" height="287" className="w-full h-full object-cover object-center rounded-lg group-hover:scale-1 group-hover:rotate-0 sm:group-hover:scale-125 sm:group-hover:rotate-12 transition-all duration-1000 ease-in-out" />
                                        </picture>
                                    </div>

                                    {/* Box */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-100 w-[calc(100%-50px)] p-4 pb-[76px] rounded-lg text-center">
                                        <h3 className="break-words font-semibold text-[20px] leading-[140%] text-colorgray600">{t?.cards_section.card3.text}</h3>
                                        <div className="absolute bottom-4 w-full text-center left-0 rounded-b-lg">
                                            <div className="text-colorblue relative font-semibold text-[20px] inline-block  leading-[140%]">
                                                <a href="article.html" className="pr-8 relative before:absolute before:right-1 before:top-1/2 before:-translate-y-1/2 before:bg-right-arrow before:content-[''] before:w-[15px] before:h-2 before:inline-block before:bg-no-repeat before:bg-center before:bg-cover hover:text-blue-700 transition-all duration-300 ease-in-out">
                                                    {t?.cards_section.card3.button}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tabs Block */}
                <Tabs />

                {/* Accordion Block */}
                <Accordion />

                {/* Modal-Form Block */}

                <section className="pb-[50px] pt-[64px] relative w-full bg-gray-100 text-center">
                    <div className="mx-auto max-w-[1194px] px-5">
                        <div className="mb-[32px] text-center w-[887px] max-w-full mx-auto">
                            <h2 className="text-[30px] font-semibold  text-gray-900 min-[450px]:text-5xl md:text-[64px] !leading-tight">
                                {t?.modal_section.title}
                            </h2>
                        </div>

                        <div>
                            <div className="button mt-8 inline-block">
                                <ContactUS_Button onClick={onOpenContactModal} />
                            </div> 
                        </div>
                    </div>
                </section>
                

                {/* Footer */}
                <Footer setOpen={onOpenContactModal} />
            </div>
        </>
    )
}

export default Home