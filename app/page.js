"use client";

import FeaturedCard from "@/components/FeaturedCard";
import { card_data } from "../public/data/card-data";
import Image from "next/image";
import { ProcessSection } from "@/components/ProcessSection";
import Methodology from "@/components/Methodology";
import ContactSection from "@/components/ContactSection";
import { BadgeIndianRupee, ChartColumnIncreasing, Eclipse, Gamepad2, HandCoins, Headset, LandPlot, LoaderPinwheel, MonitorDown, PackageSearch, SignpostBig, SignpostBigIcon, Volleyball } from "lucide-react";
import logo from '../public/assets/image/logo.png';
import techImg1 from '../public/assets/image/techno-1.png';
import techImg2 from '../public/assets/image/techno-2.png';
import clientImg1 from '../public/assets/image/client-1.png';
import clientImg2 from '../public/assets/image/client-2.png';

export default function Home() {
  return (
    <section>
      <header>
        <div className="logo w-[100px] sm:min-w-[150px]"> 
          <Image src={logo} alt="logo" width={150} height={150} />
        </div>
        <button className="cta-button">REQUEST A DEMO</button>
      </header>
      <section className="hero">
       
        <div className="overlay"></div>
        <div className="content">
            <h1>Fantasy Sports App Development Company</h1>
            <p>Get a high-performing app with a trusted fantasy sports app development company experienced in providing custom and on-demand app development solutions based on your specific needs.</p>
            <button className="whatsapp-button">CONNECT ON WHATSAPP</button>
        </div>
        <div className="quote-form">
            
        <h2>Request a Quote Free</h2>
            <p>Leverage our deep technological expertise.</p>
            <p>Contact us for innovative solutions!</p>
            <form>
                <input type="text" placeholder="Name" required/>
                <input type="email" placeholder="Email" required/>
                <input type="tel" placeholder="Phone Number" required/>
                <textarea placeholder="Message"></textarea>
                <button type="submit">SEND</button>
            </form>

        </div>
      </section>
      <section className="features px-5">
        <h1 className='text-5xl py-10 font-bold'>Fanatsy Sports App <br/> Development Features</h1>
        {
          card_data.map((card,index) => (
            <FeaturedCard key={index} 
              heading={card?.heading} description={card?.description} image={card?.image} />
          ))
        }
      </section>

      <ProcessSection/>
      
      <Methodology/>
      
      {/* Sports Section */}
      <div className="sports-section">
        <h1>Fantasy Sports We Develop</h1>
        <div class="sports-grid">
          <div className="sport-box">
            <p className="sport-icon"><Volleyball width={50} height={50} /></p>
            <p>Football</p>
          </div>
          <div className="sport-box">
            <p className="sport-icon"><ChartColumnIncreasing width={50} height={50} /></p>
            <p>Cricket</p>
          </div>
          <div className="sport-box">
            <p className="sport-icon"><SignpostBigIcon width={50} height={50} /></p>
            <p>Kabaddi</p>
          </div>
          <div className="sport-box">
            <p className="sport-icon"><LoaderPinwheel width={50} height={50} /></p>
            <p>Basketball</p>
          </div>
          <div className="sport-box">
            <p className="sport-icon"><Eclipse width={50} height={50} /></p>
            <p>Tennis</p>
          </div>
          <div className="sport-box">
            <p className="sport-icon"><HandCoins width={50} height={50} /></p>
            <p>Hockey</p>
          </div>
          <div className="sport-box">
            <p className="sport-icon"><LandPlot width={50} height={50} /></p>
            <p>Golf</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button className="cta-button">
            Request A Quote
          </button>
          <button className="cta-button-primary">
            Demo
          </button>
        </div>
      </div>

      {/* Tech Section */}
      <div className="p-container bg-white">
      <h1 className='container-heading sm:max-w-[70%]'>The Latest Tech Stacks in Fantasy Sports App Development</h1>
      <p className='container-description sm:max-w-[70%]'>Users are more attracted to the advanced technologies and features. We, as a trusted fantasy sports app development company, use cutting-edge technologies to create engaging and innovative features that attract users.</p>
        <div className="tech-grid py-4">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Image src={techImg1} alt="tech-stack-1"/>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg" >
              <Image src={techImg2} alt="tech-stack-2" />
            </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="why-us">
        <h1>Why Partner with Us for Fantasy Sports App Development?</h1>
        <div className="why-us-grid">
            <div className="why-us-box">
              <PackageSearch width={70} height={70} className="font-medium"/>
              <h2>Tailored Solutions</h2>
              <p>Get customized solutions based on your personal needs and requirements to create the best-in-class app that you want.</p>
            </div>
            <div className="why-us-box">
              <Gamepad2 width={70} height={70} />
              <h2>Advanced Technology</h2>
              <p>Our developers use cutting-edge technologies to provide the most advanced and innovative features to the users.</p>
            </div>
            <div className="why-us-box">
              <BadgeIndianRupee width={70} height={70} />
              <h2>Cost-Effective Pricing</h2>
              <p>We offer all fantasy sports app development services at affordable prices. So, you can get the best return on your investment.</p>
            </div>
            <div className="why-us-box">
              <MonitorDown width={70} height={70} />
              <h2>Specialized Knowledge</h2>
              <p>Our professional developers are highly specialized in creating the best and high-performing fantasy sports apps.</p>
            </div>
            <div className="why-us-box">
              <Headset width={70} height={70} />
              <h2>Immediate Assistance</h2>
              <p>Get immediate assistance with our 24/7 support and assistance services to ensure your app runs smoothly all the time.</p>
            </div>
        </div>
      </div>

      {/* Client Section */}
      <div className="timeline-container ">
        <h1>Why Partner with Us for Fantasy Sports App Development?</h1>
        <div className="tech-grid py-4">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Image src={clientImg1} alt="client-img-1"/>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg" >
              <Image src={clientImg2} alt="client-img-2" />
            </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection/>
    </section>
  );
}
