import { Sistema } from "../interfaces/sistema.interface";
import SistemaModel from "../models/sistema.model";
import { handleHttp } from "../utils/error.handle";

const getSistema = async () => {
    const sistema = await SistemaModel.find();
    return sistema;
  };

const createsistema_riego = async (sistema_riego: Sistema) => {
    const sistemaData = await SistemaModel.create(sistema_riego)
    return sistemaData;
  }
  export default {
    getSistema,
    createsistema_riego
  };