const sgMail = require('@sendgrid/mail')

const sendGridApiKey = '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'

sgMail.setApiKey(sendGridApiKey)

sgMail.send({
    to: 'go.gusfm@gmail.com',
    from: 'gustavo_fm2@hotmail.com',
    subject: 'This is a test email',
    text: 'I hope you get this one!',
})

window.onload = () => {
    const texterino = {
        en: 'Follow Us',
        es: 'Síguenos',
    }
    const lang = document.documentElement.lang
    if (lang !== 'pt-BR') {
        let follow = document
            .getElementById('aux_socials_list-3')
            .getElementsByClassName('widget-title')[0]
        let footerImage = document.getElementById('media_image-5').querySelector('img')
        let subLogo = document.getElementsByClassName('aux-logo-anchor2')[0].querySelector('img')

        switch (lang) {
            case 'en-US':
                follow.textContent = texterino.en
                footerImage.src =
                    'http://150.162.6.101/wcmac/wp-content/uploads/2018/09/magnifying-glass.png'
                subLogo.src =
                    'http://150.162.6.101/wcmac/wp-content/uploads/2018/09/magnifying-glass.png'
                break
            case 'es-MX':
                follow.textContent = texterino.es
                footerImage.src = 'http://150.162.6.101/wcmac/wp-content/uploads/2018/09/wrench.png'
                subLogo.src = 'http://150.162.6.101/wcmac/wp-content/uploads/2018/09/wrench.png'
                break
        }
    }
}
