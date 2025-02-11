import React from 'react'

export const ProcessSection = () => {

    const data = [
        {
            heading: "Market Research",
            description: "Comprehensive market research helps us to understand the trends and features preferred by the users. So, we can create the most engaging app for you."
        },
        {
            heading: "Requirement Analysis & Planning",
            description: "Considering your needs and requirements, we plan what and how makes the app most awesome for the users."
        },
        {
            heading: "UI/UX Designing",
            description: "Adding appealing elements attracts and engages the users. We make the UI/UX most engaging and appealing for the users so they stay longer on your fantasy sports apps."
        },
        {
            heading: "Prototyping",
            description: "To test the app, we create a simple version of the app that presents how the app will work and look when the development part is completed."
        },
        {
            heading: "App Development",
            description: "After prototyping, the app development work begins. We keep an eye on small details and use the latest technologies to create a high-performing fantasy sports app."
        },
        {
            heading: "Testing",
            description: "Testing is the process of checking the created app to resolve the interface, technical, formatting, or other issues to make sure the app runs smoothly and improves user experience."
        },
        {
            heading: "Deployment",
            description: "When the app is approved by the testers then it is ready to deploy. Deployment means the app is officially launched and available to use by the general public."
        },
        {
            heading: "Maintenance",
            description: "Maintenance means keeping an eye on how the app performing. We, provide maintenance and assistance to make sure your app will run smoothly all the time without any issues."
        },
    ]

    return (
    <div className="p-container">
        <h1 className='container-heading'>Our Fantasy Sports App Development Process</h1>
        <p className='container-description'>As a fantasy sports app development company, we do thorough research to create a high-performing app that engages users and improves their fantasy sports experience. Check out the features below.</p>
        
        <div  className="process-grid">
            {
                data.map((item,index) => (    
                    <div key={index} className="process-box">
                        <h3>{item?.heading}</h3>
                        <p>{item?.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}