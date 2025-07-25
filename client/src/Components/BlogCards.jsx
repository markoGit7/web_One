import React from 'react'
import {texts} from '../i18n/texts';
import { useParams} from 'react-router-dom';

function BlogCards() {

    const { lang } = useParams();
    const t = texts[lang];
    
    const cards = [
        {
            'image': ['/blog-img-1.jpg', '/blog-img-1.webp'],
            'badge': t.blogs_section.blog1.badge,
            'link': 'article.html',
            'publishD': t.blogs_section.blog1.publishDate,
            'title': t.blogs_section.blog1.title,
            'txt': t.blogs_section.blog1.text,

            'Bshare':'/',
            'BreadMore':'/'
        },

        {
            'image': ['/blog-img-2.jpg', '/blog-img-2.webp'],
            'badge': t.blogs_section.blog2.badge,
            'link': 'article.html',
            'publishD': t.blogs_section.blog2.publishDate,
            'title': t.blogs_section.blog2.title,
            'txt': t.blogs_section.blog2.text,

            'Bshare':'/',
            'BreadMore':'/'
        },

        {
            'image': ['/blog-img-3.jpg', '/blog-img-3.webp'],
            'badge': t.blogs_section.blog3.badge,
            'link': 'article.html',
            'publishD': t.blogs_section.blog3.publishDate,
            'title': t.blogs_section.blog3.title,
            'txt': t.blogs_section.blog3.text,

            'Bshare':'/',
            'BreadMore':'/'
        },

        {
            'image': ['/blog-img-4.jpg', '/blog-img-4.webp'],
            'badge': t.blogs_section.blog4.badge,
            'link': 'article.html',
            'publishD': t.blogs_section.blog4.publishDate,
            'title': t.blogs_section.blog4.title,
            'txt': t.blogs_section.blog4.text,

            'Bshare':'/',
            'BreadMore':'/'
        },

        {
            'image': ['/blog-img-5.jpg', '/blog-img-5.webp'],
            'badge': t.blogs_section.blog5.badge,
            'link': 'article.html',
            'publishD': t.blogs_section.blog5.publishDate,
            'title': t.blogs_section.blog5.title,
            'txt': t.blogs_section.blog5.text,

            'Bshare':'/',
            'BreadMore':'/'
        },

        {
            'image': ['/blog-img-6.jpg', '/blog-img-6.webp'],
            'badge': t.blogs_section.blog6.badge,
            'link': 'article.html',
            'publishD': t.blogs_section.blog6.publishDate,
            'title': t.blogs_section.blog6.title,
            'txt': t.blogs_section.blog6.text,

            'Bshare':'/',
            'BreadMore':'/'
        },

        {
            'image': ['/blog-img-7.jpg', '/blog-img-7.webp'],
            'badge': t.blogs_section.blog7.badge,
            'link': 'article.html',
            'publishD': t.blogs_section.blog7.publishDate,
            'title': t.blogs_section.blog7.title,
            'txt': t.blogs_section.blog7.text,

            'Bshare':'/',
            'BreadMore':'/'
        },

        {
            'image': ['/blog-img-8.jpg', '/blog-img-8.webp'],
            'badge': t.blogs_section.blog8.badge,
            'link': 'article.html',
            'publishD': t.blogs_section.blog8.publishDate,
            'title': t.blogs_section.blog8.title,
            'txt': t.blogs_section.blog8.text,

            'Bshare':'/',
            'BreadMore':'/'
        },

        {
            'image': ['/blog-img-9.jpg', '/blog-img-9.webp'],
            'badge': t.blogs_section.blog9.badge,
            'link': 'article.html',
            'publishD': t.blogs_section.blog9.publishDate,
            'title': t.blogs_section.blog9.title,
            'txt': t.blogs_section.blog9.text,

            'Bshare':'/',
            'BreadMore':'/'
        },

        {
            'image': ['/blog-img-10.jpg', '/blog-img-10.webp'],
            'badge': t.blogs_section.blog10.badge,
            'link': 'article.html',
            'publishD': t.blogs_section.blog10.publishDate,
            'title': t.blogs_section.blog10.title,
            'txt': t.blogs_section.blog10.text,

            'Bshare':'/',
            'BreadMore':'/'
        },

        {
            'image': ['/blog-img-11.jpg', '/blog-img-11.webp'],
            'badge': t.blogs_section.blog11.badge,
            'link': 'article.html',
            'publishD': t.blogs_section.blog11.publishDate,
            'title': t.blogs_section.blog11.title,
            'txt': t.blogs_section.blog11.text,

            'Bshare':'/',
            'BreadMore':'/'
        },

        {
            'image': ['/blog-img-12.jpg', '/blog-img-12.webp'],
            'badge': t.blogs_section.blog12.badge,
            'link': 'article.html',
            'publishD': t.blogs_section.blog12.publishDate,
            'title': t.blogs_section.blog12.title,
            'txt': t.blogs_section.blog12.text,

            'Bshare':'/',
            'BreadMore':'/'
        },
    ];
    
    

    return (

        <>
        
            {cards.map((card, indx) => (

                <div key={indx} className="w-full px-[9px] md:w-1/2 lg:w-1/3">
                    <div className="h-full w-full p-1">
                        <div className="relative h-full w-full scale-100 rounded-[10px] bg-white shadow-[0_0_5px_rgba(0,0,0,25%)] transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-[0_0_10px_rgba(0,0,0,25%)]">
                            {/* Image */}
                            <div className="relative h-[70vw] w-full overflow-hidden rounded-t-[10px] md:h-[310px]">

                                <picture>
                                    <source srcSet={card.image[1]} type="image/webp" />
                                    <img src={card.image[0]} alt="blog-img-1" width="372" height="311" className="h-full w-full rounded-t-[10px] object-cover object-center" />
                                </picture>

                                <div className="absolute left-0 top-[21.28px] z-10 min-h-[29.26px] min-w-[115.14px] rounded-e-[5px] bg-colorblue px-[14.5px] py-1 text-center text-lg font-normal !leading-normal text-white">
                                    {card.badge}
                                </div>

                                <a href={card.link} className="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-t-[10px]"><span className="hidden">Click link</span></a>
                            </div>

                            {/* Content */}
                            <div className="p-[12.41px_17.71px_47.1px]">
                                <span className="text-base !leading-[150%] text-colorgray600">{card.publishD}</span>
                                <h2>
                                    <a href="article.html" className="mb-[9.38px] block text-lg font-semibold text-colorgray700 min-[350px]:text-2xl">
                                        {card.title}
                                    </a>
                                </h2>
                                <p className="text-sm font-normal text-colorgray600">
                                   {card.txt}
                                </p>

                                <div className="absolute bottom-0 left-0 flex w-full flex-row justify-between rounded-b-[10px] p-[0_4.8px_10.26px_17.71px]">
                                    <div>
                                        <a href="#" className="relative block pl-[25.69px] text-base font-normal text-colorgray900 underline underline-offset-4 transition-all duration-300 ease-in-out before:absolute before:left-0 before:top-1/2 before:inline-block before:h-[15.96px] before:w-[15.06px] before:-translate-y-1/2 before:bg-share before:bg-cover before:bg-center before:bg-no-repeat before:content-[''] hover:text-colorblue">share</a>
                                    </div>

                                    <div>
                                        <a href="article.html" className="block text-base font-normal text-colorgray900 underline underline-offset-4 transition-all duration-300 ease-in-out hover:text-colorblue">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ))}
        
        </>

    )
}

export default BlogCards
