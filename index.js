import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'

//tomar un puerto
//crear una instancia de express
const app = express();
//crear variable para guardar un puerto 
app.set('port', process.env.PORT || 4000);
app.listen( app.get('port'), () =>{
    console.log('port ' + app.get('port'))
})
//middleware
app.use(cors()); // permite conexiones remotas
app.use(express.json()); // puedo tomar del objeto request datos en formato json.
app.use(morgan('dev')); //muestra informacion extra de las solicitudes get, post, put, etc.
console.log(path.join(__dirname, '/public'));
app.use(express.static(path.join(__dirname, '/public')));


//rutas