"use server"

import nodemailer from 'nodemailer';

export async function generateEmailBody({name,email,phoneNo,message,budget}) {
  // Shorten the product title
  let subject = "";
  let body = "";

  switch(budget){
    case "":subject = `Query recieved on Souce Code Lab`;
    body = `
      <div>
        <h2>${name}</h2>
        <p>Email: ${email}.</p>
        <p>Contact: ${phoneNo}.</p>
        <div style="border: 1px solid #ccc; padding: 10px; background-color: #f8f8f8;">
          <p>${message}</p>
        </div>
      </div>
    `; break;

    default:subject = `Project Query recieved on Souce Code Lab`;
    body = `
      <div>
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Contact: ${phoneNo}</p>
        <p>Budget: ${budget}</p>
        <div style="border: 1px solid #ccc; padding: 10px; background-color: #f8f8f8;">
          <p>${message}</p>
        </div>
      </div>
    `; break;
  }

  return { subject, body };
}

const transporter = nodemailer.createTransport({
  host:process.env.MAIL_HOST,
  auth:{
      user:process.env.MAIL_USER,
      pass:process.env.MAIL_PASS
  }
})

export const sendEmail = async (emailContent, sendTo) => {
  const mailOptions = {
    from: process.env.MAIL_USER,
    to: sendTo,
    html: emailContent.body,
    subject: emailContent.subject,
  }
  console.log(mailOptions)

  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      console.log(error);
      alert("Please fill from again");
      return false;
    }else{
      console.log('Email sent: ', info);
      alert("Query Received Successfully");
      return true;
    }
  })
}