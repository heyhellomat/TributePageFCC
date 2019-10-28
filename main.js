const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res)=>{
    const userAgent = req.headers['user-agent']

    //return a view that match the User-Agent
    switch(userAgent){
        //Google
        case 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)':
        //Facebook
        case 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)':
        //LinkedIn
        case 'LinkedInBot/1.0 (compatible; Mozilla/5.0; Jakarta Commons-HttpClient/3.1 +http://www.linkedin.com)':
        //Twitter
        case 'Twitterbot':
            return res.render('social-medias-headers')
        default:
            return res.render('index')
    }
})

app.listen(port, ()=>console.log(`The server is running on port ${port}.`))