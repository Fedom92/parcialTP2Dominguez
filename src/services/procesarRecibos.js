import fs from 'fs'
import {recibo} from '../modelos/recibo.js'

const listaRecibos = JSON.parse(fs.readFileSync('./src.resources/recibos.json','utf-8'));


const procesoRecibos= [];

listaRecibos.forEach(recibo => {
    procesoRecibos.push( {cliente: recibo.cliente, importe: recibo.importe } );
});

console.log(procesoRecibos);


export {procesoRecibos}