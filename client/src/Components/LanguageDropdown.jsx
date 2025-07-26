import React, { useState, useRef, useEffect, useId } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import languages from './supportedLanguages'
function LanguageDropdown() {
    // State to manage if the dropdown panel is open or closed
    const { lang } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    
    const [open, setOpen] = useState(false);
    const [currentLang, switchLang] = useState(lang || languages[0]); 
       
    // Refs to target the button and the dropdown panel in the DOM
    const buttonRef = useRef(null);
    const panelRef = useRef(null);

    // Generates a unique ID for accessibility attributes (aria-controls, id)
    const dropdownPanelId = useId();

    // Function to toggle the dropdown's open state
    const toggle = () => {
        if (open) {
        close(); // If already open, close it
        } else {
        buttonRef.current?.focus(); // Focus the button when opening
        setOpen(true); // Open the dropdown
        }
    };
    

    // Function to close the dropdown
    const close = (focusAfterElement = null) => {
        if (!open) return; // If already closed, do nothing
        setOpen(false); // Close the dropdown
        focusAfterElement?.focus(); // Optionally focus an element after closing
    };

    // Effect for handling clicks outside and focus changes outside the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
        // If the dropdown is open AND the click is not on the button AND not inside the panel
        if (
            open &&
            buttonRef.current && !buttonRef.current.contains(event.target) &&
            panelRef.current && !panelRef.current.contains(event.target)
        ) {
            close(); // Close the dropdown
        }
        };

        const handleFocusinOutside = (event) => {
        // If the dropdown is open AND focus is not on the button AND not inside the panel
        if (
            open &&
            buttonRef.current && !buttonRef.current.contains(event.target) &&
            panelRef.current && !panelRef.current.contains(event.target)
        ) {
            close(); // Close the dropdown
        }
        };

        if (open) {
        // Add event listeners when the dropdown is open
        document.addEventListener('mousedown', handleClickOutside); // For clicks outside
        document.addEventListener('focusin', handleFocusinOutside); // For focus changes outside
        }

        return () => {
        // Cleanup: remove event listeners when component unmounts or 'open' changes to false
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('focusin', handleFocusinOutside);
        };
    }, [open]); // Dependency array: re-run effect if 'open' state changes


    const switchLanguage = (newLang) => {
        const currentLang = location.pathname.split('/')[1];
        const newPath = location.pathname.replace(`${currentLang}`, `${newLang}`);
        
        switchLang(newLang);
        navigate(newPath);

        close();
        
        window.location.reload();
    };

    return (
        // This outer div provides the absolute positioning for the dropdown,
        // as seen in your Alpine.js code.
        <div className="absolute right-[60px] top-1/2 -translate-y-1/2 sm:static sm:translate-y-0">
        {/* Button to toggle the dropdown */}
        <button
            ref={buttonRef} // Assign the ref to the button
            onClick={toggle} // Attach the toggle function to click
            aria-expanded={open} // Accessibility: indicates if the controlled element is expanded
            aria-controls={`dropdown-panel-${dropdownPanelId}`} // Links button to the panel via ID
            type="button"
            className="flex items-center rounded-md text-colornav"
        >
            {/* Static text for the button (e.g., "EN") */}
            {currentLang.toUpperCase()}

            {/* Chevron-down SVG icon */}
            <div className="h-6 w-6 max-w-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-colornav" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
            </div>
        </button>

        {/* Dropdown Panel - Only renders when 'open' is true */}
        {open && (
            <div
            ref={panelRef} // Assign the ref to the panel
            id={`dropdown-panel-${dropdownPanelId}`} // Set the unique ID for the panel
            // Styling and basic transition classes (as per your Alpine.js example)
            className="absolute right-0 mt-2 min-w-20 rounded-md bg-white shadow-md transition-opacity duration-100 ease-out transform origin-top-right data-[state=open]:scale-100 data-[state=open]:opacity-100"
            data-state={open ? 'open' : 'closed'} // For potential Tailwind JIT based on state
            >
            {/* Static language options (no dynamic currentLang highlighting) */}
            
            {
                languages.map((language, indx) => (
                    <a key={indx} href="#" onClick={() => switchLanguage(language)} className={`${currentLang === language ? 'active' : ''} flex w-full items-center px-3 py-2 text-left text-sm first-of-type:rounded-t-md last-of-type:rounded-b-md hover:bg-colorbuttonhover hover:text-white [&.active]:bg-colorblue [&.active]:text-white [&.active]:hover:bg-colorbuttonhover`}>
                        {language.toUpperCase()}
                    </a>
                ))
            }
            
            </div>
        )}
        </div>
    );
}

export default LanguageDropdown;