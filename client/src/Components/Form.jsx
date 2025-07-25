import {React, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {After_Submit_Message} from '../Components'

function Form({onClose}) {
    const [timestamp, setTimestamp] = useState('');
    const form = useRef();
    const [showMessage, setShowMessage] = useState(false);
    const [messageBox, setMessageBox] = useState({'image':'','text':'','from':''});

    const sendEmail = (e) => {
        e.preventDefault();

        setTimestamp(`${new Date().toLocaleDateString('en-GB').replace(/(\d+)\/(\d+)\/(\d{4})/, (_, d, m, y) => `${d}/${m}/${y.slice(2)}`)} ${new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}`);

        setTimeout(() => {
            
            emailjs.sendForm(
                'service_a69v9m6',        
                'template_i3whpts',       
                form.current,
                'ZPOiU4GuezAngJvmy'
            )
            .then(() => {
                // ✅ Show the message only after success
                setMessageBox({
                    text: 'Message sent successfully!',
                    image: '/check.webp',
                    from: 'Contact Us'
                });

                setShowMessage(true);

                // ⏳ Auto-hide after 3 seconds
                setTimeout(() => setShowMessage(false), 3000);

                // ✅ Close the modal after submission
                onClose(true);
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                alert('Something went wrong. Please try again.');
        });

        }, 0);

        setShowMessage(true);
        setMessageBox({text:'Message sent successfully!', image:'/check.webp', from:'Contact Us'})

        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    };

    return (
        <>
            {showMessage && (<After_Submit_Message txt={messageBox.text} image={messageBox.image} comingFrom={messageBox.from} isVisible={showMessage}/>)}
            
            <div className={`fixed inset-0 z-[500] overflow-y-auto`}>
                <div className="flex justify-center min-h-screen px-4 text-center items-center">
                    <div className="fixed inset-0 transition-opacity bg-[#0E0E0E] bg-opacity-80"></div>

                    <div className="inline-block w-[661.61px] max-w-full p-[25px_23px_25px] sm:p-[30.91px_29.59px_66.35px] my-20 overflow-hidden text-left transition-all transform bg-white rounded-[50.73px] shadow-xl relative">
                        <div className="flex items-center justify-between space-x-4 pr-[26px]">
                            <h2 className="text-[25px] min-[350px]:text-[28px] sm:text-[36px] md:text-[46px] leading-[123%] font-normal  text-gray-900 ">Connectivity Corner
                                <span className="text-colorblue font-bold block">Contact Us Today</span></h2>
                            {/* Close Button */}
                            <button  className="text-gray-600 focus:outline-none hover:text-gray-700 absolute top-[29.74px] right-[32.24px]" onClick={onClose}>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-auto max-w-[15.71px] max-h-[15.71px]">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.1195 2.16497C16.4458 1.83875 16.4458 1.30983 16.1196 0.983589C15.7934 0.657346 15.2645 0.657323 14.9382 0.983538L8.51075 7.41046L2.08328 0.983538C1.75704 0.657323 1.22811 0.657346 0.9019 0.983589C0.575684 1.30983 0.575707 1.83875 0.901951 2.16497L7.32932 8.59179L0.901924 15.0186C0.575681 15.3448 0.575658 15.8738 0.901873 16.2C1.22809 16.5263 1.75701 16.5263 2.08325 16.2001L8.51075 9.77312L14.9382 16.2001C15.2645 16.5263 15.7934 16.5263 16.1196 16.2C16.4458 15.8738 16.4458 15.3448 16.1196 15.0186L9.69218 8.59179L16.1195 2.16497Z" fill="#6C757D"></path>
                                </svg>    
                            </button>
                        </div>


                        <form className="mt-5" ref={form} onSubmit={sendEmail}>
                            <div className="flex flex-row flex-wrap -mx-[11px] gap-y-[22.19px]">
                                <div className="w-full md:w-1/2 px-[11px]">
                                    <label htmlFor="user_name" className="hidden">Name</label>
                                    <input type="text" name="user_name" placeholder="Name" className="w-full h-[42.56px] sm:min-h-[47.56px] rounded-[21.14px] bg-gray-200 text-gray-500 font-opensans text-[17px] font-normal leading-[137%] p-[13px_15px_11px_19px] outline-none ring-0 focus:shadow-[0_0_0_2px_rgba(13,110,253,70%)] transition-all duration-300 ease-in-out" />
                                </div>

                                <div className="w-full md:w-1/2 px-[11px]">
                                    <label htmlFor="email" className="hidden">Email</label>
                                    <input type="email" name="user_email" placeholder="Email" className="w-full h-[42.56px] sm:min-h-[47.56px] rounded-[21.14px] bg-gray-200 text-gray-500 font-opensans text-[17px] font-normal leading-[137%] p-[13px_15px_11px_19px] outline-none ring-0 focus:shadow-[0_0_0_2px_rgba(13,110,253,70%)] transition-all duration-300 ease-in-out" />
                                </div>

                                <div className="w-full px-[11px]">
                                    <label htmlFor="subject" className="hidden">Subject</label>
                                    <input type="text" name="subject" placeholder="Subject" className="w-full h-[42.56px] sm:min-h-[47.56px] rounded-[21.14px] bg-gray-200 text-gray-500 font-opensans text-[17px] font-normal leading-[137%] p-[13px_15px_11px_19px] outline-none ring-0 focus:shadow-[0_0_0_2px_rgba(13,110,253,70%)] transition-all duration-300 ease-in-out" />
                                </div>

                                <div className="w-full px-[11px]">
                                    <label htmlFor="user_message" className="hidden">Message</label>
                                    <textarea name="user_message" placeholder="Message" className="w-full h-[170px] sm:min-h-[185px] resize-none rounded-[21.14px] bg-gray-200 text-gray-500 font-opensans text-[17px] font-normal leading-[137%] p-[13px_15px_11px_19px] outline-none ring-0 focus:shadow-[0_0_0_2px_rgba(13,110,253,70%)] transition-all duration-300 ease-in-out"></textarea>
                                </div>
                                {/*input for time when the message is sent */}
                                <input type="hidden" name="time" value={timestamp} />
                                
                                <div className="w-full px-[11px]">
                                    <div className="button inline-block w-full">
                                        <button className="flex h-[42.56px] sm:min-h-[47.56px] w-full font-opensans cursor-pointer items-center justify-center rounded-[21.14px] bg-colorblue p-[11px_10px_13px] text-[17px] font-medium text-white transition-all !leading-tight duration-300 ease-in-out hover:bg-colorbuttonhover uppercase" type="submit" >Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form