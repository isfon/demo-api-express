import 'dotenv/config'
import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser'
import db from "./config/db";

//import routes
import UsersRoutes from './routes/users.routes'
import SistemaRoutes from './routes/sistema.routes'

interface IUserRequest extends express.Request {
  user: any
  sistema: any
}

const PORT = process.env.PORT || 3000

const app = express()
app.disable('x-powered-by')

app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next()
})
// root route
app.get('/', (req, res) => {
  res.send('api works')
})

app.use('/api/users', UsersRoutes)
app.use('/api/sistemas', SistemaRoutes)

db().then(() => console.log(`database connection is ready!`));
app.listen(PORT, () => console.log(`api is listening on port ${PORT}`))
