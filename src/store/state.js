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
                    id:'0', 
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
                    id:'1',
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
                    id:'2',
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
            zonas:[
                {
                    id:0,
                    nombre:'Ayacucho',
                    clientes:[
                        {
                            nombre:'KEYPERU',
                            venta: '598.00'
                        },
                        {
                            nombre:'COMPLEJO AGROINDUSTRIAL',
                            venta: '432.00'
                        },
                    ]
                },
                {
                    id:1,
                    nombre:'Cuzco',
                    clientes:[
                        {
                            nombre:'KEYPERU',
                            venta: '675.00'
                        },
                        {
                            nombre:'COMPLEJO AGROINDUSTRIAL',
                            venta: '896.00'
                        },
                    ]
                },
                {   
                    id:2,
                    nombre:'Huancavelica',
                    clientes:[
                        {
                            nombre:'FUNDO SAN FERNANDO',
                            venta: '524.00'
                        },
                        {
                            nombre:'ESPARRAGOS DEL PERU',
                            venta: '422.00'
                        }
                    ]
                }
            ],
            ventas: [
                {
                    zona:'Ayacucho',
                    venta:20.000, 
                },
                {
                    zona:'Cuzco',
                    venta:29.000,
                },
                {
                    zona:'Huancavelica',
                    venta: 15.080
                }
            ]
        },
        { 
            id:1,
            nombre:'Randy Ingram',
            zonas:[  
                {
                    id:0,
                    nombre:'Lima',
                    clientes:[
                        {
                            nombre:'AGRICOLA CHAPI',
                            venta: '985.00'
                        },
                        {
                            nombre:'SEGURINET',
                            venta: '365.00'
                        },
                        {
                            nombre:'FUNDO SAN FERNANDO',
                            venta: '952.00'
                        },
                    ]
                },
                {
                    id:1,
                    nombre:'Huancavelica',
                    clientes:[
                        {
                            nombre:'AGRICOLA CHAPI',
                            venta: '365.00'
                        },
                        {
                            nombre:'SEGURINET',
                            venta: '965.00'
                        },
                        {
                            nombre:'FUNDO SAN FERNANDO',
                            venta: '665.00'
                        },
                    ]
                },
                {   
                    id:2,
                    nombre:'Cuzco',
                    clientes:[
                        {
                            nombre:'AGRICOLA CHAPI',
                            venta: '321.00'
                        },
                        {
                            nombre:'SEGURINET',
                            venta: '987.00'
                        },
                        {
                            nombre:'FUNDO SAN FERNANDO',
                            venta: '369.00'
                        },
                    ]
                }
            ],
            ventas: [
                {
                    zona:'Lima',
                    venta: 52.000, 
                },
                {
                    zona:'Huancavelica',
                    venta:34.000,
                },
                {
                    zona:'Cuzco',
                    venta: 73.000
                }
            ]
        }, 
        { 
            id:2,
            nombre:'Jayden McLaughlin',
            zonas:[
                {
                    id:0,
                    nombre:'Pisco',
                    clientes:[
                        {
                            nombre:'AGRICOLA CHAPI',
                            venta: '365.00'
                        },
                        {
                            nombre:'SEGURINET',
                            venta: '322.00'
                        },
                        {
                            nombre:'FUNDO SAN FERNANDO',
                            venta: '222.00'
                        },
                    ]
                },
                {
                    id:1,
                    nombre:'Huancavelica',
                    clientes:[
                        {
                            nombre:'AGRICOLA CHAPI',
                            venta: '454.00'
                        },
                        {
                            nombre:'SEGURINET',
                            venta: '125.00'
                        },
                        {
                            nombre:'FUNDO SAN FERNANDO',
                            venta: '333.00'
                        },
                    ]
                },
                {   
                    id:2,
                    nombre:'Puno',
                    clientes:[
                        {
                            nombre:'AGRICOLA CHAPI',
                            venta: '266.00'
                        },
                        {
                            nombre:'SEGURINET',
                            venta: '337.00'
                        },
                        {
                            nombre:'FUNDO SAN FERNANDO',
                            venta: '898.00'
                        },
                    ]
                },
                {
                    id:3,
                    nombre:'Cuzco',
                    clientes:[
                        {
                            nombre:'AGRICOLA CHAPI',
                            venta: '788.00'
                        },
                        {
                            nombre:'SEGURINET',
                            venta: '989.00'
                        },
                        {
                            nombre:'FUNDO SAN FERNANDO',
                            venta: '122.00'
                        },
                    ]
                }
            ],
            ventas: [
                {
                    zona:'Pisco',
                    venta: 87.000, 
                },
                {
                    zona:'Huancavelica',
                    venta: 22.000,
                },
                {
                    zona:'Puno',
                    venta: 15.000
                }
            ]
        },
        { 
            id:3,
            nombre:'Adele Fields', 
            zonas:[
                {
                    id:0,
                    nombre:'Huancavelica',
                    clientes:[
                        {
                            nombre:'AGRICOLA CHAPI',
                            venta: '130.00'
                        },
                        {
                            nombre:'SEGURINET',
                            venta: '120.00'
                        },
                        {
                            nombre:'FUNDO SAN FERNANDO',
                            venta: '150.00'
                        },
                    ]
                },
                {
                    id:1,
                    nombre:'Cuzco',
                    clientes: [
                        {
                            nombre:'AGRICOLA CHAPI',
                            venta: '160.00'
                        },
                        {
                            nombre:'SEGURINET',
                            venta: '180.00'
                        },
                        {
                            nombre:'FUNDO SAN FERNANDO',
                            venta: '420.00'
                        },
                    ]
                },
                {   
                    id:2,
                    nombre:'Apurimac',
                    clientes:[
                        {
                            nombre:'AGRICOLA CHAPI',
                            venta: '135.00'
                        },
                        {
                            nombre:'SEGURINET',
                            venta: '230.00'
                        },
                        {
                            nombre:'FUNDO SAN FERNANDO',
                            venta: '156.00'
                        },
                    ]
                },
                {
                    id:3,
                    nombre:'Cuzco',
                    clientes:[
                        {
                            nombre:'AGRICOLA CHAPI',
                            venta: '231.00'
                        },
                        {
                            nombre:'SEGURINET',
                            venta: '412.00'
                        },
                        {
                            nombre:'FUNDO SAN FERNANDO',
                            venta: '230.00'
                        },
                    ]
                }
            ],
            ventas: [
                {
                    zona:'Huancavelica',
                    venta:  15.200, 
                },
                {
                    zona:'cuzco',
                    venta: 32.200,
                },
                {
                    zona:'Apurimac',
                    venta: 36.000
                },
                {
                    zona:'cuzco',
                    venta:  54.000,
                },
            ]
        },
        { 
            id:4,
            nombre:'Cynthia Vasquez',
            zonas:[
                {
                    id:0,
                    nombre:'Ayacucho',
                    clientes:[
                        {
                            nombre:'AGRICOLA CHAPI',
                            venta: '256.00'
                        },
                        {
                            nombre:'SEGURINET',
                            venta: '320.00'
                        },
                        {
                            nombre:'FUNDO SAN FERNANDO',
                            venta: '452.00'
                        },
                    ]
                },
                {
                    id:1,
                    nombre:'Cuzco',
                    clientes:[
                        {
                            nombre:'AGRICOLA CHAPI',
                            venta: '320.00'
                        },
                        {
                            nombre:'SEGURINET',
                            venta: '327.00'
                        },
                        {
                            nombre:'FUNDO SAN FERNANDO',
                            venta: '159.00'
                        },
                    ]
                },
                {   
                    id:2,
                    nombre:'Apurimac',
                    clientes:[
                        {
                            nombre:'AGRICOLA CHAPI',
                            venta: '365.00'
                        },
                        {
                            nombre:'SEGURINET',
                            venta: '485.00'
                        },
                        {
                            nombre:'FUNDO SAN FERNANDO',
                            venta: '369.00'
                        },
                    ]
                },
                {
                    id:3,
                    nombre:'Cuzco',
                    clientes:[
                        {
                            nombre:'AGRICOLA CHAPI',
                            venta: '777.00'
                        },
                        {
                            nombre:'SEGURINET',
                            venta: '234.00'
                        },
                        {
                            nombre:'FUNDO SAN FERNANDO',
                            venta: '788.00'
                        },
                    ]
                },
    
            ],
            ventas: [
                {
                    zona:'Ayacucho',
                    venta:  52.000, 
                },
                {
                    zona:'cuzco',
                    venta: 16.000,
                },
                {
                    zona:'Apurimac',
                    venta: 66.000
                },
                {
                    zona:'cuzco',
                    venta:  34.000,
                },
            ]
        }
    ],
    datasets1: [
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
        ],
    datasets2: [
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
        ],
    datasets3: [
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
