const aRecibos = {
recibos: [{id: 1, numero: '00000002', importe : 1000, cliente:'R00001'},
{id: 2, numero: '00000003', importe : 3000, cliente:'C00002'},
{id: 3, numero: '00000004', importe : 2000, cliente:'R00002'},
{id: 4, numero: '00000005', importe : 8000, cliente:'C00001'},
],

ordenarRecibosPorImporte(){
    this.recibos.sort((a,b) => a.importe-b.importe);
},
listaRecibos(){
    return this.recibos.map(
        recibo => {return { cliente: recibos.cliente, importe: recibos.importe } } );
},
clientesConR(cliente) {
    return this.recibos.filter(cliente => cliente.startsWith('R'));
},
sumarPorcentaje() {
    return this.recibos.importe * 1.3;
    //NO LLEGUE NI A PENSARLO PERDON PROFE :()
},
}


console.log(recibo.listaComprobantes());
console.log(recibo.ordenarRecibosPorImporte());


export { recibo }