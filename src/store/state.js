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
                    ],
                    ventas: [30.400, 16.000, 15.000, 26.000, 26.000, 30.000, 39.000, 87.000, 56.000, 74.000, 22.000, 39.000]
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
                    ],
                    ventas: [30.600, 18.000, 15.000, 23.000, 26.000, 96.000, 35.000, 60.000, 44.000, 45.000, 26.000, 34.000]
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
                    ],
                    ventas: [32.200, 19.000, 15.200, 25.000, 23.000, 39.000, 36.000, 80.000, 54.000, 75.000, 25.000, 35.000]
                },
            ],
            ventas: [20.000, 29.000, 15.080, 22.000, 24.000, 30.000, 36.000, 80.000, 56.000, 75.000, 25.000, 35.000]     
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
                    ],
                    ventas: [14.000, 26.000, 35.000, 25.000, 23.000, 42.000, 85.000, 16.000, 57.000, 68.000, 55.000, 47.000]
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
                    ],
                    ventas: [30.000, 19.000, 15.000, 22.000, 26.000, 30.000, 36.000, 80.000, 56.000, 75.000, 25.000, 35.000]
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
                    ],
                    ventas: [20.000, 19.000, 14.000, 42.000, 27.000, 70.000, 93.000, 33.000, 54.000, 74.000, 45.000, 85.000]
                }
            ],
            ventas: [32.200, 19.000, 15.200, 25.000, 23.000, 39.000, 36.000, 80.000, 54.000, 75.000, 25.000, 35.000]
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
                    ],
                    ventas:[34.000, 56.000, 52.000, 2.85000, 23.000, 34.000, 42.000, 32.000, 77.000, 23.000, 96.000, 19.000]
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
                    ],
                    ventas:[50.000, 34.000, 72.000, 36.000, 28.000, 38.000, 49.000, 37.000, 73.000, 87.000, 16.000, 59.000]
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
                    ],
                    ventas:[63.000, 34.000, 82.000, 25.000, 26.000, 35.000, 44.000, 34.000, 79.000, 69.000, 18.000, 45.000]
                },
            ],
            ventas:[20.000, 34.000, 52.000, 27.000, 29.000, 34.000, 42.000, 34.000, 73.000, 66.000, 16.000, 49.000]
        },
    ],
    vendedores:[
        { 
            id:0,
            nombre:'Francisco Leonard',
            zonas:['Ayacucho','Cuzco','Huancavelica','Puno','Apurimac','Ayacucho','Cuzco','Huancavelica'],
            clientes:[
                {
                    nombre:'KEYPERU',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'COMPLEJO AGROINDUSTRIAL',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'AGRICOLA CHAPI',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'SEGURINET',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'FUNDO SAN FERNANDO',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'ESPARRAGOS DEL PERU',
                    venta: 'USD 120.00'
                }
            ],
            ventas: [20.000, 29.000, 15.080, 22.000, 24.000, 30.000, 36.000, 80.000, 56.000, 75.000, 25.000, 35.000]
        },
        { 
            id:1,
            nombre:'Randy Ingram',
            zonas:['Lima','Cuzco','Huancavelica','Puno','Apurimac','Ayacucho','Cuzco','Huancavelica'],
            clientes:[
                {
                    nombre:'AGRICOLA CHAPI',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'KEYPERU',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'COMPLEJO AGROINDUSTRIAL',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'AGRICOLA ANDREA',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'COORPORACION ESPERANZA',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'CORTEZ MEDINA MAXIMO',
                    venta: 'USD 120.00'
                }
            ],
            ventas:[20.000, 34.000, 52.000, 27.000, 29.000, 34.000, 42.000, 34.000, 73.000, 66.000, 16.000, 49.000]
        }, 
        { 
            id:2,
            nombre:'Jayden McLaughlin',
            zonas:['Pisco','Cuzco','Huancavelica','Puno','Apurimac','Ayacucho','Cuzco','Huancavelica'],
            clientes:[
                {
                    nombre:'AGRICOLA CHAPI',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'KEYPERU',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'COMPLEJO AGROINDUSTRIAL',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'AGRICOLA ANDREA',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'COORPORACION ESPERANZA',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'CORTEZ MEDINA MAXIMO',
                    venta: 'USD 120.00'
                }
            ],
            ventas: [30.400, 16.000, 15.000, 26.000, 26.000, 30.000, 39.000, 87.000, 56.000, 74.000, 22.000, 39.000]
        },
        { 
            id:3,
            nombre:'Adele Fields', 
            zonas:['Puno','Cuzco','Huancavelica','Puno','Apurimac','Ayacucho','Cuzco','Huancavelica'],
            clientes:[
                {
                    nombre:'KEYPERU',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'COMPLEJO AGROINDUSTRIAL',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'AGRICOLA CHAPI',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'SEGURINET',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'FUNDO SAN FERNANDO',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'ESPARRAGOS DEL PERU',
                    venta: 'USD 120.00'
                }
            ],
            ventas: [32.200, 19.000, 15.200, 25.000, 23.000, 39.000, 36.000, 80.000, 54.000, 75.000, 25.000, 35.000]
        },
        { 
            id:4,
            nombre:'Cynthia Vasquez',
            zonas:['Ayacucho','Cuzco','Huancavelica','Puno','Apurimac','Ayacucho','Cuzco','Huancavelica'],
            clientes:[
                {
                    nombre:'AGRICOLA CHAPI',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'KEYPERU',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'COMPLEJO AGROINDUSTRIAL',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'AGRICOLA ANDREA',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'COORPORACION ESPERANZA',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'CORTEZ MEDINA MAXIMO',
                    venta: 'USD 120.00'
                }
            ],
            ventas:[20.000, 34.000, 52.000, 27.000, 29.000, 34.000, 42.000, 34.000, 73.000, 66.000, 16.000, 49.000]
        },
        { 
            id:5,
            nombre:'Rose Black',
            zonas:['Ayacucho','Cuzco','Huancavelica','Puno','Apurimac','Ayacucho','Cuzco','Huancavelica'],
            clientes:[
                {
                    nombre:'AGRICOLA CHAPI',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'KEYPERU',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'COMPLEJO AGROINDUSTRIAL',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'AGRICOLA ANDREA',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'COORPORACION ESPERANZA',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'CORTEZ MEDINA MAXIMO',
                    venta: 'USD 120.00'
                }
            ],
            ventas: [20.000, 29.000, 15.080, 22.000, 24.000, 30.000, 36.000, 80.000, 56.000, 75.000, 25.000, 35.000]
        },
        { 
            id:6, nombre:'Ola Robbins',
            zonas:['Ayacucho','Cuzco','Huancavelica','Puno','Apurimac','Ayacucho','Cuzco','Huancavelica'],
            clientes:[
                {
                    nombre:'KEYPERU',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'COMPLEJO AGROINDUSTRIAL',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'AGRICOLA CHAPI',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'SEGURINET',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'FUNDO SAN FERNANDO',
                    venta: 'USD 120.00'
                },
                {
                    nombre:'ESPARRAGOS DEL PERU',
                    venta: 'USD 120.00'
                }
            ],
            ventas: [30.000, 19.000, 15.000, 22.000, 26.000, 35.000, 36.000, 80.000, 56.000, 75.000, 55.000, 78.000]
        }
    ],
    datasets: [
            {
                backgroundColor: 'rgb(73, 215, 187)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0,0,0,0,0,0,0,0,0,0,0,0],
            },
            {
                backgroundColor: 'rgb(118, 142, 166)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0,0,0,0,0,0,0,0,0,0,0,0],
            },
            {
                backgroundColor: 'rgb(188, 203, 218)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0,0,0,0,0,0,0,0,0,0,0,0],
            }
        ]     
})