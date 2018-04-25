export default () => ({
    fecha: null,
    productos: [
        {nombre:'AZUFRE PANTERA', precio:'USD 0.87'},
        {nombre:'ABAFIN', precio:'USD 3.76'},
        {nombre:'AGAFORTE', precio:'USD 7.00'},
        {nombre:'BINOMIO', precio:'USD 0.87'},
        {nombre:'RAFAGA', precio:'USD 3.76'},
        {nombre:'BINOMIO', precio:'USD 7.00'},
        {nombre:'RAFAGA', precio:'USD 0.87'},
        {nombre:'BINOMIO', precio:'USD 3.76'},
        {nombre:'RAFAGA', precio:'USD 7.00'},
        {nombre:'RAFAGA', precio:'USD 7.00'}
    ],
    ventas: [
        {
            fecha: 'enero',
            porcentaje: 40
        },
        {
            fecha: 'febrero',
            porcentaje: 30
        },
        {
            fecha: 'marzo',
            porcentaje: 50
        },
        {
            fecha: 'abril',
            porcentaje: 64
        },
        {
            fecha: 'mayo',
            porcentaje: 35
        },
        {
            fecha: 'junio',
            porcentaje: 77
        },
        {
            fecha: 'julio',
            porcentaje: 45
        },
        {
            fecha: 'agosto',
            porcentaje: 38
        },
        {
            fecha: 'setiembre',
            porcentaje: 48
        }
    
    ],
    territorios:[
        {
            id:'0',
            nombre:'SUR MEDIO 2',
            clientes:[
                {
                    nombre: 'KEYPERU',
                    venta:'USD 120.00'
                },
                {
                    nombre:'COMPLEJO AGROINDUSTRIAL',
                    venta:'USD 120.00'
                },
                {
                    nombre:'AGRICOLA CHAPI',
                    venta:'USD 120.00'
                }
            ],
            zonas:[
                { 
                    id:'0',
                    nombre:'APURIMAC', 
                    clientes:[
                        {
                            nombre: 'KEYPERU',
                            venta:'USD 120.00'
                        },
                        {
                            nombre:'COMPLEJO AGROINDUSTRIAL',
                            venta:'USD 120.00'
                        }
                    ]
                },                                   
                {
                     id:'1',
                     nombre:'NAZCA',
                     clientes:[
                         {
                             nombre:'AGRICOLA CHAPI',
                             venta:'USD 120.00'
                        },
                        {
                            nombre: 'KEYPERU',
                             venta:'USD 120.00'}
                    ]
                },
                { 
                    id:'2',
                    nombre:'SELVA CENTRAL',
                    clientes: [
                        {
                            nombre: 'KEYPERU',
                            venta:'USD 120.00'
                        },
                        {
                            nombre: 'COMPLEJO AGROINDUSTRIAL',
                            venta:'USD 120.00'
                        },
                        {
                            nombre: 'AGRICOLA CHAPI',
                            venta:'USD 120.00'
                        }
                    ]
                },
            ],
            ventas: [30.000, 19.000, 15.000, 22.000, 26.000, 30.000, 36.000, 80.000, 56.000, 75.000, 25.000, 35.000]     
        },
        { 
            id:'1',
            nombre:'SUR GRANDE',
            clientes:[
                {
                    nombre:'AGRICOLA CHAPI',
                    venta:'USD 120.00'
                },
                {
                    nombre: 'KEYPERU',
                    venta:'USD 120.00'
                },
                {
                    nombre:'COMPLEJO AGROINDUSTRIAL',
                    venta:'USD 120.00'
                },
            ],
            zonas:[
                { 
                    id:'2', 
                    nombre:'SELVA CENTRAL',
                    clientes: [
                        {
                            nombre: 'KEYPERU',
                            venta:'USD 120.00'
                        },
                        {
                            nombre: 'COMPLEJO AGROINDUSTRIAL',
                            venta:'USD 120.00'
                        },
                        {
                            nombre: 'AGRICOLA CHAPI',
                            venta:'USD 120.00'
                        }
                    ]
                },
                { 
                    id:'0',
                    nombre:'APURIMAC',
                    clientes:[
                        {
                            nombre: 'KEYPERU',
                            venta:'USD 120.00'
                        },
                        {
                            nombre:'COMPLEJO AGROINDUSTRIAL',
                            venta:'USD 120.00'
                        }
                    ]
                },
                { 
                    id:'1',
                    nombre:'NAZCA',
                    clientes:[
                        {
                            nombre:'AGRICOLA CHAPI',
                            venta:'USD 120.00'
                        },
                        {
                            nombre: 'KEYPERU',
                            venta:'USD 120.00'
                        }
                    ]
                }
            ],
            ventas: [16.000, 26.000, 35.000, 25.000, 23.000, 42.000, 85.000, 16.000, 57.000, 68.000, 55.000, 47.000]
        },
        {
            id:'2',
            nombre:'SIERRA SUR',
            clientes:[
                {
                    nombre: 'KEYPERU',
                    venta:'USD 120.00'
                },
                {
                    nombre:'COMPLEJO AGROINDUSTRIAL',
                    venta:'USD 120.00'
                },
                {
                    nombre:'AGRICOLA CHAPI',
                    venta:'USD 120.00'
                }
            ],
            zonas:[
                { 
                    id:'0', nombre:'APURIMAC', 
                    clientes:[
                        {
                            nombre: 'KEYPERU',
                            venta:'USD 120.00'
                        },
                        {
                            nombre:'COMPLEJO AGROINDUSTRIAL',
                            venta:'USD 120.00'
                        }
                    ]
                },                                   
                {
                     id:'1',
                     nombre:'NAZCA',
                     clientes:[
                         {
                             nombre:'AGRICOLA CHAPI',
                             venta:'USD 120.00'
                        },
                        {
                            nombre: 'KEYPERU',
                             venta:'USD 120.00'}
                    ]
                },
                { 
                    id:'2',
                    nombre:'SELVA CENTRAL',
                    clientes: [
                        {
                            nombre: 'KEYPERU',
                            venta:'USD 120.00'
                        },
                        {
                            nombre: 'COMPLEJO AGROINDUSTRIAL',
                            venta:'USD 120.00'
                        },
                        {
                            nombre: 'AGRICOLA CHAPI',
                            venta:'USD 120.00'
                        }
                    ]
                },
            ],
            ventas:[20.000, 34.000, 52.000, 27.000, 29.000, 34.000, 42.000, 34.000, 73.000, 66.000, 16.000, 49.000]
        },
    ],
    datasets: [
            {
                backgroundColor: 'rgb(73, 215, 187)',
                borderColor: 'rgb(255, 99, 132)',
                data: [],
            },
            {
                backgroundColor: 'rgb(118, 142, 166)',
                borderColor: 'rgb(255, 99, 132)',
                data: [],
            },
            {
                backgroundColor: 'rgb(188, 203, 218)',
                borderColor: 'rgb(255, 99, 132)',
                data: [],
            }
        ]     
})