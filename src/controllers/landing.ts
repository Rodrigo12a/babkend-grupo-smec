
import { Request, Response } from 'express';
export const getLanding = (req: Request, res: Response) => {
    
    res.json({
        msg: "Get landing"
    });
}