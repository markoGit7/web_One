import React from 'react'
import {texts} from '../src/i18n/texts';
import { useParams} from 'react-router-dom';

import {Header, Pagination, BlogCards, Footer} from '../src/Components';

const Blogs = ({onOpenContactModal}) => {

    const { lang } = useParams();
    const t = texts[lang];

    return (
        <>
        <Header />
            <main className="font-inter overflow-auto">
                <div className="block w-full overflow-x-hidden">
                    {/* Blog Block Section */}
                    <section className="relative w-full py-[45px]">
                        <div className="mx-auto max-w-[1194px] px-5">
                            <div className="mb-[45px] w-full text-center">
                                <h1 className="text-[27px] font-medium !leading-tight text-colorBlogTitle min-[450px]:text-3xl md:text-[32px]">
                                    {t.blogs_section.title}
                                </h1>
                            </div>

                            <div className="-mx-[9px] flex flex-row flex-wrap items-stretch gap-y-[17px]">
                                {/* All the cards */}
                                <BlogCards />
                            </div>

                            {/* Pagination */}
                            <Pagination />
                        </div>
                    </section>
                </div> 
            </main>
            <Footer setOpen={onOpenContactModal}/>
        </>
    )
}

export default Blogs