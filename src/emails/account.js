const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const welcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'gustavo_fm2@hotmail.com',
        subject: 'Thanks for joining our tasks platform!',
        text: `Welcome to our app ${name}, if you need any further assistence please contact me.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'gustavo_fm2@hotmail.com',
        subject: 'We are sad to see you go :(',
        text: `${name}, We would like to know why you are leaving... Please let us know.`
    })
}

module.exports = { welcomeEmail, sendCancelationEmail }
