import {React, useState, useRef, useEffect} from 'react';
import {Form, ContactUS_Button} from '../Components';
import { Link } from 'react-router-dom';
import texts from '../i18n/texts';
import { useParams} from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { addEmail, getAllEmails, clearEmails } from '../lib/emails';

function Footer( { setOpen }) {

    const { lang } = useParams();
    const t = texts[lang];

    const [inputTxt, setInputTxt] = useState('');
    const [allEmails, setEmails] = useState([]);

    const form = useRef();

    const addToData = async () => {
        await addEmail(inputTxt);
        await loadEmails(); 
    }

    useEffect(() => {
        loadEmails();
        
    }, []);
    

    const loadEmails = async () => {
        const stored = await getAllEmails();
        setEmails(stored);
    };
    

    function isNewUser(txt) { // testing all data agains my inputText
        
        console.log(`!${JSON.stringify(allEmails)}.includes(${txt})`);
        
        return !allEmails.includes(txt);
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        
        if(!isNewUser(inputTxt)) {
            alert(`User ${inputTxt} is in the data`);
            setInputTxt('');
            return;
        }
                   

        setTimeout(() => {

            emailjs.sendForm(
                'service_a69v9m6',        
                'template_s2lxw1p',       
                form.current,
                'ZPOiU4GuezAngJvmy'
            )
            .then(() => {
                
                addToData();

                setInputTxt('');

                alert(`Thanks for joining us ${inputTxt}`);

            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                alert('Something went wrong. Please try again.');
        });

        }, 0);
    };
    

    const footerObj = [
        {'media': [
            [{'image':'/instagram.svg'}, {'link': 'https://www.instagram.com/instagram/?hl=en'}],
            [{'image':'/ball.svg'}, {'link': 'https://dribbble.com/'}],
            [{'image':'/x.svg'}, {'link': 'https://x.com/x?lang=en'}],
            [{'image':'/youtube.svg'}, {'link': 'https://youtube.com/'}],
        ]},

        {'company': [
            [t.footer.company.lists[0], '/about'], 
            [t.footer.company.lists[1], '/blogs'], 
            [t.footer.company.lists[2], '/contact'], 
            [t.footer.company.lists[3], '/pricing'], 
            [t.footer.company.lists[4], '/testemonials']
        ]},

        {'support': [
            [t.footer.support.lists[0], '/help'], 
            [t.footer.support.lists[1], '/terms_services'], 
            [t.footer.support.lists[2], '/legal'], 
            [t.footer.support.lists[3], '/policy'], 
            [t.footer.support.lists[4], '/status']
        ]}
    ];
    
    
    return (
        <>
            <footer className="pb-[74px] pt-[64px] relative w-full bg-gray-800">
                <div className="mx-auto max-w-[1194px] px-5">
                    <div className="grid grid-cols-12 -mx-4 gap-y-12 lg:gap-y-0">
                        <div className="col-span-12 lg:col-span-3 px-4 text-gray-200 order-2 lg:order-1 text-center lg:text-start">
                            <div className="mb-10 inline-block">
                                <img src="/Footer-logo.svg" alt="footer-logo" width="191" height="30" className="w-[191px] max-w-full h-auto" />
                            </div>

                            <div className="mb-10">
                                <p className="mb-2">{t.footer.copy}</p>
                            </div>

                            <div className="inline-block">
                                <div className="-mx-2 flex flex-wrap gap-y-2">
                                    {/* Media icons */}
                                    {
                                        footerObj[0].media.map((media, indx) => (
                                            
                                            <div key={indx} className="px-2 rounded-[50%]">
                                                <div className="relative size-8 rounded-[50%] scale-100 bg-white/10 flex items-center transition-all duration-500 ease-in-out justify-center hover:scale-[1.2] hover:bg-colorblue">
                                                    <img src={media[0].image} alt="instagram-logo" width="18" height="18" className="w-auto h-auto max-w-[17px] max-h-[17px]" />
                                                    <a href={media[1].link} className="absolute top-0 left-0 bottom-0 right-0 w-full h-full rounded-[50%]">
                                                        <span className="hidden">Click Link For Media</span>
                                                    </a>
                                                </div>
                                            </div>

                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-9 px-4 text-colorgray100 order-1 lg:order-2">
                            <div className="w-full ml-0 lg:w-[635px] max-w-full lg:ml-auto">

                            <div className="grid grid-cols-12 -mx-6 gap-y-10 md:gap-y-0">
                                    <div className="col-span-6 md:col-span-3 px-6 text-center md:text-start">
                                        <h3 className="mb-[18px] font-semibold text-xl text-white">{t.footer.company.title}</h3>
                                        <ul>

                                            {
                                                footerObj[1].company.map((l, indx) => (
                                                    <li key={indx} className="py-[6px]">
                                                        {
                                                            l[0] === 'Contact us' ? 
                                                            <a onClick={(e) => {
                                                                e.preventDefault(); // <-- IMPORTANT: Prevent default link navigation
                                                                setOpen(true); // Call the setOpen function passed from the parent
                                                            }} className="cursor-pointer text-sm text-gray-100 font-normal hover:text-colorblue transition-all duration-300 ease-in-out">{l[0]}</a> 
                                                            : 
                                                            <Link to={l[1]} className="text-sm text-gray-100 font-normal hover:text-colorblue transition-all duration-300 ease-in-out">{l[0]}</Link> 
                                                        }
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    <div className="col-span-6 md:col-span-3 px-6 text-center md:text-start">
                                        <h3 className="mb-[18px] font-semibold text-xl text-white">{t.footer.support.title}</h3>
                                        <ul>

                                            {
                                                footerObj[2].support.map((l, indx) => (
                                                    <li key={indx} className="py-[6px]">
                                                        <Link to={l[1]} className="text-sm text-gray-100 font-normal hover:text-colorblue transition-all duration-300 ease-in-out">{l[0]}</Link>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                    </div>

                                    <div className="col-span-12 md:col-span-6 px-6">
                                        <h3 className="mb-[18px] font-semibold text-xl text-white text-center md:text-start">{t.footer.upToDate.title}</h3>
                                        <form action="#" ref={form} onSubmit={sendEmail}>
                                            <div className="relative">
                                                <input type="email" value={inputTxt} onChange={(e) => setInputTxt(e.target.value)} name="user_email" id='email' className="w-full bg-white/20 ring-0 border-[2px] border-gray-800 outline-none p-[9px_33px_11px_12px] rounded-lg text-white focus:border-[2px] focus:border-colorblue peer peer-valid:focus:opacity-0 transition-all duration-400 ease-in-out autofill:bg-transparent" />
                                                <label htmlFor="email" className="absolute top-1/2 -translate-y-1/2
                                                left-3 peer-focus:-top-[8px] peer-focus:left-2 peer-focus:text-[12px] peer-focus:text-white peer-invalid:-top-[8px] peer-invalid:text-white peer-invalid:left-2 peer-invalid:text-[12px] transition-all duration-400 ease-in-out pointer-events-none text-sm text-gray-300">{t.footer.upToDate.inp}</label>

                                                <button className="absolute right-3 top-1/2 -translate-y-1/2" type='submit'>
                                                    <img src="/button-arrow.svg" alt="button-arrow" width="18" height="18" className="w-auto h-auto max-w-[18px] max-h-[18px]" />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer