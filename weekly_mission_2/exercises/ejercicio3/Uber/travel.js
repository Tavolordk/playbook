import User from "./user";
export default class Travel extends User {
    destino;
    puntoDePartida;
    costo;
    tiempoLlegada;
    getAllInformation(){
        return `${this.destino} ${this.puntoDePartida}
        ${this.costo} ${this.tiempoLlegada}`;
    }
}
