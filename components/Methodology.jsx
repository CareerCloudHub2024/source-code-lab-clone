import { MoveDown } from 'lucide-react'
import React from 'react'

const Methodology = () => {

    const data = [
        {
            heading:"Interactive Experience",
            description:"We add interactive features that help you interact with other players by creating a community of players worldwide."
        },
        {
            heading:"Social Engagement",
            description:"We allow players to share their winnings on social platforms that improve the credibility of your app and attract more users."
        },
        {
            heading:"Monetization Opportunities",
            description:"Whether in-app purchases or subscriptions, we provide benefits to monetize your app and open more options for earnings."
        },
        {
            heading:"Scalability",
            description:"Irrespective of market changes or technological improvements, our created apps are highly scalable and allow you to grow over time by adapting to the changes."
        },
        {
            heading:"Brand Loyalty",
            description:"We provide attractive loyalty programs in our created apps that engage the users to spend more time on the website."
        },
        {
            heading:"All Device Accessible",
            description:"We create fantasy sports apps accessible to all devices smoothly so users can access the app using any device of their choice."
        }
    ]

  return (
    <div className="timeline-container">
       <h1> Benefits of Fantasy Sports App Development</h1>
        <p>Get a bunch of benefits with our fantasy sports app development services and create the best-in-class app that engages the users to stay longer on the app. Check out the benefits below</p>
        <div className="timeline">
            {
                data.map((item, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-content">
                            <h2>{item.heading}</h2>
                            <p>{item.description}</p>
                        </div>
                        <div className="timeline-marker">
                            <span className="step">Step {index+1}</span>
                            <div className="dot">
                                <MoveDown />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div class="hire-container">
            <h1>Hire Fantasy Sports App<br/>Development Company</h1>
            <button class="cta-button">TALK TO OUR EXPERT</button>
        </div>
    </div>
  )
}

export default Methodology

{/* <div className='flex items-center justify-center w-full p-6'>
      <ol className="relative border-s border-[#2C8AEB] w-full max-w-[600px]">                  
          <li className="mb-10 ms-6">            
              <span className="absolute flex items-center justify-center p-3 bg-[#2C8AEB] rounded-full -start-6 ring-4 ring-[#2C8AEB] border-[.1px] border-[rgba(255,255,255,.3)]">
                <MoveDown className='text-[20px] font-extrabold' />
              </span>
              <span className="absolute flex items-center justify-center p-3 bg-[#2C8AEB] rounded-full -start-40 ring-4 ring-[#2C8AEB] border-[.1px] border-[rgba(255,255,255,.3)]">
                Step 3
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Application UI v2.0.0</h3>
              
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
          </li>
          <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
          </li>
          <li className="ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
          </li>
      </ol>
    </div> */}