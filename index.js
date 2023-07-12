import express from 'express'
import cors from 'cors'

//tomar un puerto
//crear una instancia de express
const app = express();
//crear variable para guardar un puerto 
app.set('port', process.env.PORT || 4000);
app.listen( app.get('port'), () =>{
    console.log('port ' + app.get('port'))
})
//middleware
app.use(cors());


//rutas