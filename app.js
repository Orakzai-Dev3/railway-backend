const EXpress = require('express');
const cors = require('cors');
const env = require('dotenv').config();
const router = require('./router/router.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const controller = require('./controllers/controller_api.js')
const db = require('./config/config.js');
const app = EXpress();
app.use(cookieParser());

const allowedOrigins = [
  'https://vercel-frontend-jo3d.vercel.app',
  'http://localhost:3000' // For testing
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));



app.use(EXpress.json());
app.use(EXpress.urlencoded({ extended: true }));

app.use('/men', router)

app.post('/signup',controller.Signup)
app.post('/login',controller.Login)
app.get('/get-role',controller.get_role)
app.post('/get-order',controller.Create_Order)
app.get('/get-user-orders',controller.get_User_ordered_Items)
app.get('/get-user-admin',controller.get_all_admin_orders)
app.post('/logout',controller.log_out)







app.listen(process.env.Port, () => {
    console.log(`Server is running on port ${3000}`);
    }
);
