import { deleteUsuario, getUsuario, updateUsuario } from './../controllers/user';
import express, {Application} from 'express';
import cors from 'cors';
import routesLanding from  '../routes/landing';
import router from '../routes/user';
import dashboardRoutes from '../routes/dashboard';
import getUsuarios from '../routes/user';
import db from '../db/connection';
import user from '../routes/user';
import quote from '../routes/cotizacion';

// Server.ts
import { catalogo } from './catalogo';
import { cotizacion } from './cotizacion';
import { tipo_cotizacion } from './tipo_cotizacion';
import { Usuario } from './usuario';
import { deleteCotizacion, getCotizacion, getCotizaciones, updateCotizacion } from '../controllers/cotizacion';

class Server {
    private app: Application;
    private port: string ;
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
        
        //console.log(process.env.PORT)
    }
    listen(){
        this.app.listen(this.port, () =>{
            console.log('Aplicación corriendo en el puerto: '+this.port);
        })
    }
    midlewares(){
        // parseo body
        this.app.use(express.json());

        //cors
        this.app.use(cors());
    }
    routes(){
        this.app.use('/api/landing',routesLanding);
        this.app.use('/api/auth',router);
        this.app.use('/api/auth', dashboardRoutes);

        //CRUD USUARIOS
        this.app.use('/api/user', user);
        //CRUD COTIZACIONES
        this.app.use('/api/cotizaciones', quote);
    }
    async dbConnect(){
        try {
            await db.authenticate();
            console.log('Base de datos conectada');
        } catch (error){
            console.error('Error en la conexión:', error); 
        }
    }
    
}

export default Server;