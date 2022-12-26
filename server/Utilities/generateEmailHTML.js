const generateEmailHTML=(email,verificationUrl)=>{
    return (
       `<p>Hi ${email},</p>
       <p>Thank you for registering for our application. Please click the link below to verify your email address:</p>
       <p><a href="${verificationUrl}">${verificationUrl}</a></p>
       <p>Best regards,</p>
       <p>Your team</p>`
    )
}
export default generateEmailHTML;