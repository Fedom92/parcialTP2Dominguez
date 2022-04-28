console.log("index.js");

import {recibo} from './modelos/recibo.js'

consolge.log(recibo.listaRecibos());

consolge.log("Recibos Ordenados");
recibo.ordenarRecibosPorImporte();
consolge.log(recibo.recibos());