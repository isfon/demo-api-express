import { Sistema } from "../interfaces/sistema.interface";
import SistemaModel from "../models/sistema.model";
import { handleHttp } from "../utils/error.handle";

const getSistema = async () => {
  //con populate haces que traiga la relacion de la otra coleccion pueden ir n populates('aasdf').populate('asdfas)-.......
  const sistema = await SistemaModel.find().populate('user');
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