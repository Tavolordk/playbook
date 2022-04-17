export const travel ={
    destino:"Aeropuerto",
    puntoDePartida:"Coyoacan,centro",
    costo:350,
    tiempoLlegada:"30 minutos",
    getAllInformation:function(){
        return `${this.destino} ${this.puntoDePartida}
        ${this.costo} ${this.tiempoLlegada}`;
    }
}
console.log(travel.getAllInformation());