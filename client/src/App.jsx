import {React, useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Home, Blogs, SingleBlog} from '../Pages';
import {Footer, Form, GoBack} from './Components';
import { Link } from 'react-router-dom';



const ComingSoon = ({ pageName }) => (
    <div style={{ padding: '50px', textAlign: 'center', minHeight: '50vh' }}>
        <h1>{pageName} Page</h1>
        <p>This page is under construction. Please check back later!</p>

        <Link to="/">
            <GoBack />
        </Link>
    </div>
);

function App() {
    
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);

    const handleOpenFormModal = () => {
        setIsFormModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

     const handleCloseFormModal = () => {
        setIsFormModalOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <>
            <BrowserRouter basename={import.meta.env.BASE_URL}>
                <Routes>
                    <Route index element={<Navigate to="/en" replace />} />
                    <Route path='/:lang' element={<Home onOpenContactModal={handleOpenFormModal}/>} />
                    <Route path="/:lang/blogs" element={<Blogs onOpenContactModal={handleOpenFormModal}/>} />
                    <Route path="/:lang/blogs/single" element={<SingleBlog onOpenContactModal={handleOpenFormModal}/>} />

                    {/* Paths from Header */}
                    <Route path="/services" element={<ComingSoon pageName="Service" />} />
                    <Route path="/feature" element={<ComingSoon pageName="Feature" />} />
                    <Route path="/product" element={<ComingSoon pageName="Product" />} />
                    <Route path="/faq" element={<ComingSoon pageName="FAQ" />} />

                    {/* Paths from Footer */}
                    <Route path="/about" element={<ComingSoon pageName="About us" />} />
                    <Route path="/pricing" element={<ComingSoon pageName="Pricing" />} />
                    <Route path="/testemonials" element={<ComingSoon pageName="Testimonials" />} />
                    <Route path="/help" element={<ComingSoon pageName="Help center" />} />
                    <Route path="/terms_services" element={<ComingSoon pageName="Terms of service" />} />
                    <Route path="/legal" element={<ComingSoon pageName="Legal" />} />
                    <Route path="/policy" element={<ComingSoon pageName="Privacy policy" />} />
                    <Route path="/status" element={<ComingSoon pageName="Status" />} />
                </Routes>
            </BrowserRouter>

      

            {/* Conditionally render the Form modal. It will only be in the DOM when isFormModalOpen is true */}
            {isFormModalOpen && <Form onClose={handleCloseFormModal}/>}
        </>
    );
}

export default App;