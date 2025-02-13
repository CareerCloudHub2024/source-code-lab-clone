'use client'

import { generateEmailBody, sendEmail } from '@/lib/nodemailer';
import { Instagram, Linkedin, MailOpenIcon, PhoneCallIcon, Twitter } from 'lucide-react'
import React, { useState } from 'react'

const ContactSection = () => {
    const [formData,setFormData] = useState(
        {
            name:"",
            email:"",
            phoneNo:"",
            message:"",
            budget:""
        }
    );

    const changeHandler = (e)=>{
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = async(e)=>{
        e.preventDefault();
        // console.log(formData)

        const emailContent = await generateEmailBody(formData);
        await sendEmail(emailContent,formData?.email);
        const response = await sendEmail(emailContent,formData?.email);
        // if(response)
        //     alert("Query Received Successfully");
        // else
        //     alert("Please fill from again");
    };

  return (
    <div className="contact-container">
        <div className="grid">
            {/* Left Column - Form */}
            <div className="form-container">
                <h1>Have a Project in Mind?</h1>
                <h2>Consult with Our Experts Today!</h2>
                
                <form onSubmit={submitHandler}>
                    <div className='flex gap-4 flex-col sm:flex-row justify-center items-center'>
                        <input
                            type="text"
                            placeholder="Full Name"
                            name="name" 
                            onChange={changeHandler}
                            required
                            className='w-full'
                        />
                        
                        <input
                            type="email"
                            placeholder="Email"
                            name="email" 
                            onChange={changeHandler}
                            required
                            className='w-full'
                        />
                    </div>
                    
                    <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                        <input
                            type="tel"
                            placeholder="Mobile Number"
                            name="phoneNo" 
                            onChange={changeHandler}
                            required
                            className='w-full'
                            />
                        
                        <input
                            type="number"
                            placeholder="Budget"
                            name="budget" 
                            onChange={changeHandler}
                            required
                            className='w-full'
                        />
                    </div>
                    
                    <textarea
                        placeholder="About Project"
                        rows="4"
                        name="message" 
                        onChange={changeHandler}
                        required
                    ></textarea>
                    
                    <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
                    
                    <button type="submit">SUBMIT</button>
                </form>
            </div>

            {/* Right Column - Contact Info */}
            <div className="contact-info">
                <h2>Get in Touch</h2>
                <p>Connect with our experts to discuss your project and get insights.</p>
                
                <div className="contact-details">
                <div className="contact-item">
                    <div className="icon-circle">
                        <MailOpenIcon />
                    </div>
                    <div>
                    <h3>Chat with Us</h3>
                    <a href="mailto:sales@sourcecodelab.co">sales@sourcecodelab.co</a>
                    </div>
                </div>
                
                <div className="contact-item">
                    <div className="icon-circle">
                        <PhoneCallIcon />
                    </div>
                    <div>
                    <h3>Phone Number</h3>
                    <a href="tel:+918799377589">+91 87993 77589</a>
                    </div>
                </div>
                </div>
                
                <div className="social-links">
                <a href="#" className="social-icon">
                    <Linkedin/>
                </a>
                <a href="#" className="social-icon">
                    <Instagram/>
                </a>
                <a href="#" className="social-icon">
                    <Twitter />
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection