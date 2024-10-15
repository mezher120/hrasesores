const express = require('express')  // to create server
const nodemailer =  require('nodemailer')  // to send mail
const bodyParser = require('body-parser')  // to receive json request
const cors = require('cors')  // to receive data from different origins
const dotenv = require('dotenv')
const connectDB = require('./db')
const userRoute = require('./routes/userRoutes.js')
const blogRoute = require('./routes/blogRoutes.js');

// create server
const app = express();
const port = 3001
dotenv.config();

app.use(bodyParser.json()) // to use json to receive and response
app.use(cors()); // to receive data from different origins
app.use('/user', userRoute)
app.use('/blog', blogRoute);


app.post('/send', (req, res) => {

    console.log('hola que tal')
   
    // request data
    const {nombre, mail, telefono, descripcion} = req.body;

    // create a transporter object using smtp
    const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.PORT*1,
        secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        },
    });

    const mailOptions = {
        from: process.env.USER,
        to: process.env.MAIL,
        subject: `Pedido de Finictus ${nombre}`,
        text: `Empresa: ${nombre}, Telefono: ${telefono}, Mail: ${mail}, Descripcion: ${descripcion}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({message: 'error', error: error})
        } else {
            console.log(error)
            return res.status(200).json({message: 'send succesfully', info: info})
        }
    })

})

connectDB();


app.listen(port, () => {
    return console.log('conectado')
})