import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

const ValidateToken = (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization'];
    console.log(headerToken);


    if(headerToken != undefined && headerToken.startsWith('Bearer')){
        //tiene token
        try{
            const bearerToken = headerToken.slice(7);
            console.log(bearerToken);
        
            jwt.verify(bearerToken, process.env.SECRET_KEY || 'password');

            next();
        }catch{
            res.status(401).json({
                msg: "token no valido"
            })
        }
        
    }else {
        res.status(401).json ({
            msg: 'acceso denegado'
        })
    }
}

export default ValidateToken;