import { db } from './firebase';
//implementar metodos paa obtener datos necesarios
// ejemplo
export const getRequest = ()=>{
  return db.ref("/requests");
}
