import { Request, Response } from 'express';
import sistemaService from '../services/sistema.service';
import { handleHttp } from "../utils/error.handle";
import jwtService from '../utils/jwt.util';

const getSistema = async (req: Request, res: Response) => {
  try {
    const sistema = await sistemaService.getSistema();
    return res.send(sistema);
  } catch (error) {
    console.log(error)
    return handleHttp(res, 500, "ERROR GET SISTEMA");
  }
}

const createsistema_riego = async (req: Request, res: Response) => {
  try {
    const Sistema = await sistemaService.createsistema_riego(req.body);
    res.send(Sistema);
  } catch (error) {
    handleHttp(res, 500, "ERROR TO CREATE SISTEMA");
  }
}
export default {
  getSistema,
  createsistema_riego
};