import React, { useState, useRef, useEffect } from 'react';
import texts from '../i18n/texts';
import { useParams} from 'react-router-dom';

function Accordion() {

    const { lang } = useParams();
    const t = texts[lang];

    const accordionObj = [
        {
        'title': t.accodrion_section.accordion1.heading,
        'p': t.accodrion_section.accordion1.text
        },

        {
        'title': t.accodrion_section.accordion2.heading,
        'p': t.accodrion_section.accordion2.text
        },

        {
        'title': t.accodrion_section.accordion3.heading,
        'p': t.accodrion_section.accordion3.text
        }
    ];

    const [openIndex, setOpenIndex] = useState(0); // Renamed currentI to openIndex for clarity
    const contentRefs = useRef([]); // To hold refs for each collapsible content div

    const toggleAccordion = (index) => {
        // If the clicked item is already open, close it. Otherwise, open the clicked item.
        setOpenIndex(openIndex === index ? null : index);
    };

    // This useEffect will dynamically set the max-height for the smooth transition.
    useEffect(() => {
        contentRefs.current.forEach((ref, index) => {
        if (ref) { // Ensure the ref exists
            
            if (index === openIndex) {
            // EXPAND:
            // 1. Temporarily set max-height to 'none' to get the full scrollHeight
            ref.style.maxHeight = 'none';
            const scrollHeight = ref.scrollHeight; // Get the actual content height

            // 2. Set max-height back to '0px' to prepare for transition
            ref.style.maxHeight = '0px';
            // Force a reflow (browser re-calculates layout) - necessary for the transition to trigger from 0
            void ref.offsetWidth; // eslint-disable-line no-unused-expressions

            // 3. Set max-height to the actual scrollHeight to trigger the transition
            ref.style.maxHeight = `${scrollHeight}px`;

            // Optional: After the transition, set max-height to 'none' again
            // This allows the content to be fully responsive if its internal size changes
            const handleTransitionEnd = () => {
                if (openIndex === index) { // Ensure it's still the open item
                ref.style.maxHeight = 'none';
                }
                ref.removeEventListener('transitionend', handleTransitionEnd);
            };
            ref.addEventListener('transitionend', handleTransitionEnd);

            } else {
            // COLLAPSE:
            // Ensure max-height is not 'none' before setting to '0px' to enable transition
            if (ref.style.maxHeight !== '0px') {
                // If it was 'none', set it to its current actual height first
                ref.style.maxHeight = ref.scrollHeight + 'px';
                void ref.offsetWidth; // Force reflow
                ref.style.maxHeight = '0px'; // Then transition to 0
            }
            }
        }
        });
    }, [openIndex]); // Re-run this effect whenever openIndex changes

    return (
        <section className="pb-[78px] pt-[50px] sm:pt-0 relative w-full">
            <div className="mx-auto max-w-[1194px] px-5">
                <div className="mb-[30px] text-center w-full">
                    <span className="block text-colorblue font-bold text-sm !leading-[203%] tracking-[6.3px] mb-[10px]">FAQ</span>
                    <h2 className="text-[27px] font-bold text-colorgray900 min-[450px]:text-3xl md:text-[52px] !leading-tight">
                        {t.accodrion_section.title}
                    </h2>
                    </div>

                    <div className="w-[667px] max-w-full mx-auto">
                    {accordionObj.map((accordion, indx) => (
                        <div
                        key={indx} // Always add a unique key when mapping in React
                        className="w-full bg-white shadow-[0_0_10px_rgba(0,0,0,25%)] min-h-[50px] rounded-[20px] [&:not(:last-of-type)]:mb-[14px]"
                        >
                        <button
                            className={`
                            rounded-[20px] relative
                            before:content-[''] before:bg-[url('/down-arrow.svg')] before:w-[24px] before:h-[24px]
                            before:inline-block before:bg-no-repeat before:bg-center before:bg-contain /* Changed cover to contain, usually better for icons */
                            before:absolute before:top-1/2 before:-translate-y-1/2 before:right-[24.43px]
                            font-montserrat text-sm sm:text-base text-colorblue w-full text-start p-[16px_24px_14px_19px]
                            before:transition-all before:duration-500 before:ease-in-out
                            ${openIndex === indx ? 'before:rotate-180' : 'before:rotate-0'} /* Rotate arrow based on state */
                            `}
                            onClick={() => toggleAccordion(indx)}
                        >
                            {accordion.title}
                        </button>

                        {/* Collapsible Content Area */}
                        <div
                            ref={el => contentRefs.current[indx] = el} // Assign ref to this div
                            className={`
                            w-full rounded-b-[20px] overflow-hidden
                            transition-all duration-500 ease-in-out`}
                            // max-height is controlled by JavaScript in useEffect
                            style={{
                                maxHeight: openIndex === indx ? '0px' : '0px'
                            }}>

                            <div className="w-full p-[0_46px_16px_21px]">
                                {/* REMOVED fixed height (h-[50px] sm:h-[53px]) and overflow-hidden from <p> */}
                                <p className="text-base sm:text-lg !leading-[144%] text-colorgray900 font-normal">
                                    {accordion.p}
                                </p>
                            </div>
                        </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
    );
}

export default Accordion;