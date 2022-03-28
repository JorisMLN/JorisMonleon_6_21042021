/* - - - - - SITES CONTROLLERS - - - - - */
let commentaires = []

exports.getAllSites = (req, res, next) => {
  console.log(req.headers.Authorization, 'refresh');
  const data =
    [
      {
        _id: "46712vaxrv26zw541",
        name: "Ecole de la Comté",
        adress: '45 rue de machin toulouse',
        device_quantity: '1/8',
        children: [
          {
            _id: "rbwdfghgjf69",
            name: "step2",
            device_quantity: '0/1',
            children: [
              {
                _id: "rbwfgasfhf69",
                name: "step3",
                device_quantity: '0/1',
                children: [
                  {
                    _id: "rbw457fg69",
                    name: "step4",
                    device_quantity: '0/1',
                    children: [
                      {
                        _id: "r5644hdf69",
                        name: "step5",
                        device_quantity: '0/1',
                        children: [
                          {
                            _id: "rbwd43ikj3356s9",
                            name: "step6",
                            device_quantity: '0/1',
                            children: [
                              {
                                _id: "rbsdkhj8369",
                                name: "step7",
                                device_quantity: '0/1',
                                children: [],
                                devices: [
                                  {
                                    info: 'ENTREE',
                                    type: "POD_CONFORT",
                                    status: 1,
                                    _id: 'gr4y5gd5635356hb4f34'
                                  }
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            _id: "45v2vt2sds46",
            name: "batiment-A",
            device_quantity: '0/4',
            children: [
              {
                _id: "455yjf4as3j4",
                name: "Salle de Mr Dupont",
                device_quantity: '0/3',
                children: [
                  {
                    _id: "41563h3fg45",
                    name: "Trousse de Mr Dupont",
                    device_quantity: '0 /3',
                    children: [],
                    devices: [
                      {
                        info: '',
                        type: "POD_CONFORT",
                        status: 1,
                        _id: ''
                      }
                    ],
                  }
                ]
              }
            ],
            devices: [
              {
                info: 'TYRUETEGDGETR',
                type: "POD_CONFORT",
                status: 1,
                _id: 'gr4y5jksd4hb4f34'
              },
              {
                info: 'ENTREE',
                type: "POD_CONFORT",
                status: 3,
                _id: 'gr4y5juhh655h4hb4f34'
              }
            ],
          },
          {
            _id: "rvwvad3455fv",
            name: "batiment-B",
            device_quantity: '1/3',
            children: [
              {
                _id: "rbwytbdw45627s27",
                name: "Salle de Mr Michel",
                device_quantity: '0/1',
                children: [],
                devices: [
                  {
                    info: '',
                    type: "POD_CONFORT",
                    status: 1,
                    _id: 'gr4y5gd5635356hb4f34'
                  }
                ],
              },
              {
                _id: "b754bre2fb56b2",
                name: "Salle de Mr Alain",
                device_quantity: '1/2',
                children: [],
                devices: [
                  {
                    info: 'porte',
                    type: "POD_CONFORT",
                    status: 3,
                    _id: ''
                  },
                  {
                    info: 'bureau',
                    type: "POD_OTHER",
                    status: 2,
                    _id: ''
                  }
                ],
              }
            ]
          },
        ]
      },
      {
        _id: "46x712zvrv6w541",
        name: "Ecole de Belfalas",
        adress: '5 rue de machin toulouse',
        device_quantity: 3,
        children: [
          {
            _id: "rbwytbw45jhf69",
            name: "Salle de Mr Michel",
            device_quantity: 4,
            children: [],
            devices: [
              {
                info: 'ENTREE',
                type: "POD_CONFORT",
                status: 2,
                _id: 'gr4y5gd5635356hb4f34'
              },
              {
                info: 'FENETRE',
                type: "POD_COV_id",
                status: 3,
                _id: 'gr4y5gd35356hbb4f34'
              },
              {
                info: 'BUREAU',
                type: "POD_CO2",
                status: 4,
                _id: 'gr4y5gd35356hmb4f34'
              },
              {
                info: 'TOILETTE',
                type: "POD_CO2",
                status: 1,
                _id: 'gr4y53534'
              }
            ],
          },
          {
            _id: "45v2vts46",
            name: "batiment-A",
            device_quantity: 3,
            children: [
              {
                _id: "455yj43j4",
                name: "Salle de Mr Dupont",
                device_quantity: 3,
                children: [
                  {
                    _id: "41563hg45",
                    name: "Trousse de Mr Dupont",
                    device_quantity: 1,
                    children: [],
                    devices: [{
                      info: '',
                      type: "POD_CONFORT",
                      status: 1,
                      _id: 'giuhglkhjg67878'
                    }],
                  }
                ]
              }
            ]
          },
          {
            _id: "rvwv355fv",
            name: "batiment-B",
            device_quantity: 12,
            children: [
              {
                _id: "rbwytbw4627s27",
                name: "Salle de Mr Michel",
                device_quantity: 1,
                children: [],
                devices: [{
                  info: '',
                  type: "POD_CONFORT",
                  status: 1,
                  _id: 'gr4y5g5635356hb4f34'
                }],
              },
              {
                _id: "b754bre2f56b2",
                name: "Salle de Mr Alain",
                device_quantity: 1,
                children: [],
                devices: [
                  {
                    info: 'porte',
                    type: "POD_CONFORT",
                    status: 3,
                    _id: 'scaasas2323raw'
                  },
                  {
                    info: 'bureau',
                    type: "POD_OTHER",
                    status: 2,
                    _id: 'jskjskskjs4352'
                  }
                ],
              }
            ]
          },
          {
            _id: "rbwytbw45jhf69",
            name: "Salle de Mr Michel",
            device_quantity: 15,
            children: [],
            devices: [
              {
                info: 'ENTREE',
                type: "POD_CONFORT",
                status: 1,
                _id: 'gr4y5gd5635356hb4f34'
              },
              {
                info: 'FENETRE1',
                type: "POD_COV_id",
                status: 1,
                _id: 'gr4y5gd353y56hb4f34'
              },
              {
                info: 'BUREAU',
                type: "POD_CO2",
                status: 2,
                _id: 'gr4y5gd35356hb4f34'
              },
              {
                info: 'ENTREE1',
                type: "POD_CONFORT",
                status: 1,
                _id: 'gr4y5gd5635356hb4f34'
              },
              {
                info: 'FENETRE2',
                type: "POD_COV_id",
                status: 3,
                _id: 'gr4y5gd353y56hb4f34'
              },
              {
                info: 'BUREAU1',
                type: "POD_CO2",
                status: 3,
                _id: 'gr4y5gd35356hb4f34'
              },
              {
                info: 'ENTREE2',
                type: "POD_CONFORT",
                status: 1,
                _id: 'gr4y5gd5635356hb4f34'
              },
              {
                info: 'FENETRE3',
                type: "POD_COV_id",
                status: 2,
                _id: 'gr4y5gd353y56hb4f34'
              },
              {
                info: 'BUREAU2',
                type: "POD_CO2",
                status: 4,
                _id: 'gr4y5gd35356hb4f34'
              },
              {
                info: 'ENTREE3',
                type: "POD_CONFORT",
                status: 3,
                _id: 'gr4y5gd5635356hb4f34'
              },
              {
                info: 'FENETRE4',
                type: "POD_COV_id",
                status: 3,
                _id: 'gr4y5gd353y56hb4f34'
              },
              {
                info: 'BUREAU3',
                type: "POD_CO2",
                status: 1,
                _id: 'gr4y5gd35356hb4f34'
              },
              {
                info: 'ENTREE4',
                type: "POD_CONFORT",
                status: 1,
                _id: 'gr4y5gd5635356hb4f34'
              },
              {
                info: 'FENETRE5',
                type: "POD_COV_id",
                status: 2,
                _id: 'gr4y5gd353y56hb4f34'
              },
              {
                info: 'BUREAU4',
                type: "POD_CO2",
                status: 4,
                _id: 'gr4y5gd35356hb4f34'
              },
            ],
          },
        ]
      },
      {
        _id: "4346712vrcv26w541",
        name: "Ecole de la Comté",
        adress: '45 rue de machin toulouse',
        device_quantity: 5,
        children: [
          {
            _id: "rbwytbw45jhf69",
            name: "Salle de Mr Michel",
            device_quantity: 2,
            children: [],
            devices: [
              {
                info: 'ENTREE',
                type: "POD_CONFORT",
                status: 1,
                _id: 'gr4y5gd5635356hb4f34'
              },
              {
                info: 'FENETRE',
                type: "POD_COV_id",
                status: 2,
                _id: 'gr4y5gdd35356hb4f34'
              }
            ],
          },
          {
            _id: "45v2vt2s46",
            name: "batiment-A",
            device_quantity: 1,
            children: [
              {
                _id: "455yjf43j4",
                name: "Salle de Mr Dupont",
                device_quantity: 1,
                children: [
                  {
                    _id: "41563h3g45",
                    name: "Truc de Mr Dupont",
                    device_quantity: 1,
                    children: [],
                    devices: [
                      {
                        info: '',
                        type: "POD_CONFORT",
                        status: 3,
                        _id: 'sdfsdy56y34h3651q21hje567i5'
                      }
                    ],
                  }
                ]
              }
            ]
          },
          {
            _id: "rvwv3455fv",
            name: "batiment-B",
            device_quantity: 3,
            children: [
              {
                _id: "rbwytbw4562e7s27",
                name: "Salle de Mr Michel",
                device_quantity: 1,
                children: [],
                devices: [
                  {
                    info: '',
                    type: "POD_CONFORT",
                    status: 1,
                    _id: 'gr4y5gd5635356hb4f34'
                  }
                ],
              },
              {
                _id: "b754bre2fb56b2",
                name: "Salle de Mr Alain",
                device_quantity: 2,
                children: [],
                devices: [
                  {
                    info: 'porte',
                    type: "POD_CONFORT",
                    status: 3,
                    _id: 'dfgdf546564fgfg76'
                  },
                  {
                    info: 'bureau',
                    type: "POD_OTHER",
                    status: 4,
                    _id: 'sdsdffghj2347yer23r234c34v646b312b'
                  }
                ],
              }
            ]
          },
        ]
      },
      {
        _id: "467cx212vrv6w541",
        name: "Ecole de Belfalas",
        adress: '45 rue de machin toulouse',
        device_quantity: 3,
        children: [
          {
            _id: "45v2vts46",
            name: "batiment-A",
            device_quantity: 3,
            children: [
              {
                _id: "455yj43j4",
                name: "Salle de Mr Dupont",
                device_quantity: 3,
                children: [
                  {
                    _id: "41563hg45",
                    name: "Trousse de Mr Dupont",
                    device_quantity: 1,
                    children: [],
                    devices: [{
                      info: '',
                      type: "POD_CONFORT",
                      status: 1,
                      _id: ''
                    }],
                  }
                ]
              }
            ]
          },
          {
            _id: "rvwv355fv",
            name: "batiment-B",
            device_quantity: 12,
            children: [
              {
                _id: "rbwytbw4627s27",
                name: "Salle de Mr Michel",
                device_quantity: 1,
                children: [],
                devices: [{
                  info: '',
                  type: "POD_CONFORT",
                  status: 1,
                  _id: 'gr4y5g5635356hb4f34'
                }],
              },
              {
                _id: "b754bre2f56b2",
                name: "Salle de Mr Alain",
                device_quantity: 1,
                children: [],
                devices: [
                  {
                    info: 'porte',
                    type: "POD_CONFORT",
                    status: 3,
                    _id: ''
                  },
                  {
                    info: 'bureau',
                    type: "POD_OTHER",
                    status: 2,
                    _id: ''
                  }
                ],
              }
            ]
          },
        ]
      },
      {
        _id: "44dd6712vrv26w541",
        name: "Ecole de la Comté",
        adress: '45 rue de machin toulouse',
        device_quantity: 3,
        children: [
          {
            _id: "rbwytbw45jhf69",
            name: "Salle de Mr Michel",
            device_quantity: 2,
            children: [],
            devices: [
              {
                info: 'ENTREE',
                type: "POD_CONFORT",
                status: 1,
                _id: 'gr4y5gd5635356hb4f34'
              },
              {
                info: 'FENETRE',
                type: "POD_COV_id",
                status: 1,
                _id: 'gr4y5gd3535r6hb4f34'
              }
            ],
          },
          {
            _id: "45v2vt2s46",
            name: "batiment-A",
            device_quantity: 3,
            children: [
              {
                _id: "455yjf43j4",
                name: "Salle de Mr Dupont",
                device_quantity: 3,
                children: [
                  {
                    _id: "41563h3g45",
                    name: "Trousse de Mr Dupont",
                    device_quantity: 1,
                    children: [],
                    devices: [
                      {
                        info: '',
                        type: "POD_CONFORT",
                        status: 1,
                        _id: 'sdffdsf342234790000'
                      }
                    ],
                  }
                ]
              }
            ]
          },
          {
            _id: "rvwv3455fv",
            name: "batiment-B",
            device_quantity: 12,
            children: [
              {
                _id: "rbwytbw45627sk27",
                name: "Salle de Mr Michel",
                device_quantity: 1,
                children: [],
                devices: [
                  {
                    info: '',
                    type: "POD_CONFORT",
                    status: 1,
                    _id: 'gr4y5gd5635356hb4f34'
                  }
                ],
              },
              {
                _id: "b754bre2fb56b2",
                name: "Salle de Mr Alain",
                device_quantity: 1,
                children: [],
                devices: [
                  {
                    info: 'porte',
                    type: "POD_CONFORT",
                    status: 3,
                    _id: 'sadsf213wsasty67r'
                  },
                  {
                    info: 'bureau',
                    type: "POD_OTHER",
                    status: 2,
                    _id: 'bmi9789078k75l5'
                  }
                ],
              }
            ]
          },
        ]
      },
      {
        _id: "434df46712vrv6w541",
        name: "Ecole de Belfalas",
        adress: '45 rue de machin toulouse',
        device_quantity: 3,
        children: [
          {
            _id: "45v2vts46",
            name: "batiment-A",
            device_quantity: 3,
            children: [
              {
                _id: "455yj43j4",
                name: "Salle de Mr Dupont",
                device_quantity: 3,
                children: [
                  {
                    _id: "41563hg45",
                    name: "Trousse de Mr Dupont",
                    device_quantity: 1,
                    children: [],
                    devices: [{
                      info: '',
                      type: "POD_CONFORT",
                      status: 1,
                      _id: 'dfsdfg235634erwgd34'
                    }],
                  }
                ]
              }
            ]
          },
          {
            _id: "rvwv355fv",
            name: "batiment-B",
            device_quantity: 12,
            children: [
              {
                _id: "rbwytbw4627s27",
                name: "Salle de Mr Michel",
                device_quantity: 1,
                children: [],
                devices: [{
                  info: '',
                  type: "POD_CONFORT",
                  status: 1,
                  _id: 'gr4y5g5635356hb4f34'
                }],
              },
              {
                _id: "b754bre2f56b2",
                name: "Salle de Mr Alain",
                device_quantity: 1,
                children: [],
                devices: [
                  {
                    info: 'porte',
                    type: "POD_CONFORT",
                    status: 3,
                    _id: 'rad23f3461'
                  },
                  {
                    info: 'bureau',
                    type: "POD_OTHER",
                    status: 2,
                    _id: ''
                  }
                ],
              }
            ]
          },
        ]
      },
      {
        _id: "46712vaxg535grv26zw541",
        name: "Ecole de la Comté",
        adress: '45 rue de machin toulouse',
        device_quantity: 3,
        children: [
          {
            _id: "rbwdfghgjf69",
            name: "step2",
            device_quantity: 3,
            children: [
              {
                _id: "rbwfgasfhf69",
                name: "step3",
                device_quantity: 3,
                children: [
                  {
                    _id: "rbw457fg69",
                    name: "step4",
                    device_quantity: 3,
                    children: [
                      {
                        _id: "r5644hdf69",
                        name: "step5",
                        device_quantity: 3,
                        children: [
                          {
                            _id: "rbwd43ikj3356s9",
                            name: "step6",
                            device_quantity: 3,
                            children: [
                              {
                                _id: "rbsdkhj8369",
                                name: "step7",
                                device_quantity: 3,
                                children: [],
                                devices: [
                                  {
                                    info: 'ENTREE',
                                    type: "POD_CONFORT",
                                    status: 1,
                                    _id: 'gr4y5gd5635356hb4f34'
                                  }
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            _id: "rbwytbw45jhf69",
            name: "Salle de Mr Michel",
            device_quantity: 15,
            children: [],
            devices: [
              {
                info: 'ENTREE',
                type: "POD_CONFORT",
                status: 1,
                _id: 'gr4y5gd5635356hb4f34'
              },
              {
                info: 'FENETRE1',
                type: "POD_COV_id",
                status: 1,
                _id: 'gr4y5gd353y56hb4f34'
              },
              {
                info: 'BUREAU',
                type: "POD_CO2",
                status: 2,
                _id: 'gr4y5gd35356hb4f34'
              },
              {
                info: 'ENTREE1',
                type: "POD_CONFORT",
                status: 1,
                _id: 'gr4y5gd5635356hb4f34'
              },
              {
                info: 'FENETRE2',
                type: "POD_COV_id",
                status: 3,
                _id: 'gr4y5gd353y56hb4f34'
              },
              {
                info: 'BUREAU1',
                type: "POD_CO2",
                status: 3,
                _id: 'gr4y5gd35356hb4f34'
              },
              {
                info: 'ENTREE2',
                type: "POD_CONFORT",
                status: 1,
                _id: 'gr4y5gd5635356hb4f34'
              },
              {
                info: 'FENETRE3',
                type: "POD_COV_id",
                status: 2,
                _id: 'gr4y5gd353y56hb4f34'
              },
              {
                info: 'BUREAU2',
                type: "POD_CO2",
                status: 4,
                _id: 'gr4y5gd35356hb4f34'
              },
              {
                info: 'ENTREE3',
                type: "POD_CONFORT",
                status: 3,
                _id: 'gr4y5gd5635356hb4f34'
              },
              {
                info: 'FENETRE4',
                type: "POD_COV_id",
                status: 3,
                _id: 'gr4y5gd353y56hb4f34'
              },
              {
                info: 'BUREAU3',
                type: "POD_CO2",
                status: 1,
                _id: 'gr4y5gd35356hb4f34'
              },
              {
                info: 'ENTREE4',
                type: "POD_CONFORT",
                status: 1,
                _id: 'gr4y5gd5635356hb4f34'
              },
              {
                info: 'FENETRE5',
                type: "POD_COV_id",
                status: 2,
                _id: 'gr4y5gd353y56hb4f34'
              },
              {
                info: 'BUREAU4',
                type: "POD_CO2",
                status: 4,
                _id: 'gr4y5gd35356hb4f34'
              },
            ],
          },
          {
            _id: "45v2vt2sds46",
            name: "batiment-A",
            device_quantity: 3,
            children: [
              {
                _id: "455yjf4as3j4",
                name: "Salle de Mr Dupont",
                device_quantity: 3,
                children: [
                  {
                    _id: "41563h3fg45",
                    name: "Trousse de Mr Dupont",
                    device_quantity: 1,
                    children: [],
                    devices: [
                      {
                        info: '',
                        type: "POD_CONFORT",
                        status: 1,
                        _id: ''
                      }
                    ],
                  }
                ]
              }
            ]
          },
          {
            _id: "rvwvad3455fv",
            name: "batiment-B",
            device_quantity: 12,
            children: [
              {
                _id: "rbwytbdw45627s27",
                name: "Salle de Mr Michel",
                device_quantity: 1,
                children: [],
                devices: [
                  {
                    info: '',
                    type: "POD_CONFORT",
                    status: 1,
                    _id: 'gr4y5gd5635356hb4f34'
                  }
                ],
              },
              {
                _id: "b754bre2fb56b2",
                name: "Salle de Mr Alain",
                device_quantity: 1,
                children: [],
                devices: [
                  {
                    info: 'porte',
                    type: "POD_CONFORT",
                    status: 3,
                    _id: ''
                  },
                  {
                    info: 'bureau',
                    type: "POD_OTHER",
                    status: 2,
                    _id: ''
                  }
                ],
              }
            ]
          },
        ]
      },
      {
        _id: "46x71er2zvrv6wg358541",
        name: "Ecole de Belfalas",
        adress: '5 rue de machin toulouse',
        device_quantity: 3,
        children: [
          {
            _id: "rbwytbw45jhf69",
            name: "Salle de Mr Michel",
            device_quantity: 3,
            children: [],
            devices: [
              {
                info: 'ENTREE',
                type: "POD_CONFORT",
                status: 2,
                _id: 'gr4y5gd5635356hb4f34'
              },
              {
                info: 'FENETRE',
                type: "POD_COV_id",
                status: 3,
                _id: 'gr4y5gd35356hbb4f34'
              },
              {
                info: 'BUREAU',
                type: "POD_CO2",
                status: 4,
                _id: 'gr4y5gd35356hmb4f34'
              },
              {
                info: 'TOILETTE',
                type: "POD_CO2",
                status: 1,
                _id: 'gr4y53534'
              }
            ],
          },
          {
            _id: "45v2vts46",
            name: "batiment-A",
            device_quantity: 3,
            children: [
              {
                _id: "455yj43j4",
                name: "Salle de Mr Dupont",
                device_quantity: 3,
                children: [
                  {
                    _id: "41563hg45",
                    name: "Trousse de Mr Dupont",
                    device_quantity: 1,
                    children: [],
                    devices: [{
                      info: '',
                      type: "POD_CONFORT",
                      status: 1,
                      _id: 'giuhglkhjg67878'
                    }],
                  }
                ]
              }
            ]
          },
          {
            _id: "rvwv355fv",
            name: "batiment-B",
            device_quantity: 12,
            children: [
              {
                _id: "rbwytbw4627s27",
                name: "Salle de Mr Michel",
                device_quantity: 1,
                children: [],
                devices: [{
                  info: '',
                  type: "POD_CONFORT",
                  status: 1,
                  _id: 'gr4y5g5635356hb4f34'
                }],
              },
              {
                _id: "b754bre2f56b2",
                name: "Salle de Mr Alain",
                device_quantity: 1,
                children: [],
                devices: [
                  {
                    info: 'porte',
                    type: "POD_CONFORT",
                    status: 3,
                    _id: 'scaasas2323raw'
                  },
                  {
                    info: 'bureau',
                    type: "POD_OTHER",
                    status: 2,
                    _id: 'jskjskskjs4352'
                  }
                ],
              }
            ]
          },
        ]
      },
      {
        _id: "434erteg36712vrcv26w541",
        name: "Ecole de la Comté",
        adress: '45 rue de machin toulouse',
        device_quantity: 5,
        children: [
          {
            _id: "rbwytbw45jhf69",
            name: "Salle de Mr Michel",
            device_quantity: 2,
            children: [],
            devices: [
              {
                info: 'ENTREE',
                type: "POD_CONFORT",
                status: 1,
                _id: 'gr4y5gd5635356hb4f34'
              },
              {
                info: 'FENETRE',
                type: "POD_COV_id",
                status: 2,
                _id: 'gr4y5gdd35356hb4f34'
              }
            ],
          },
          {
            _id: "45v2vt2s46",
            name: "batiment-A",
            device_quantity: 1,
            children: [
              {
                _id: "455yjf43j4",
                name: "Salle de Mr Dupont",
                device_quantity: 1,
                children: [
                  {
                    _id: "41563h3g45",
                    name: "Truc de Mr Dupont",
                    device_quantity: 1,
                    children: [],
                    devices: [
                      {
                        info: '',
                        type: "POD_CONFORT",
                        status: 3,
                        _id: 'sdfsdy56y34h3651q21hje567i5'
                      }
                    ],
                  }
                ]
              }
            ]
          },
          {
            _id: "rvwv3455fv",
            name: "batiment-B",
            device_quantity: 3,
            children: [
              {
                _id: "rbwytbw4562e7s27",
                name: "Salle de Mr Michel",
                device_quantity: 1,
                children: [],
                devices: [
                  {
                    info: '',
                    type: "POD_CONFORT",
                    status: 1,
                    _id: 'gr4y5gd5635356hb4f34'
                  }
                ],
              },
              {
                _id: "b754bre2fb56b2",
                name: "Salle de Mr Alain",
                device_quantity: 2,
                children: [],
                devices: [
                  {
                    info: 'porte',
                    type: "POD_CONFORT",
                    status: 3,
                    _id: 'dfgdf546564fgfg76'
                  },
                  {
                    info: 'bureau',
                    type: "POD_OTHER",
                    status: 4,
                    _id: 'sdsdffghj2347yer23r234c34v646b312b'
                  }
                ],
              }
            ]
          },
        ]
      },
    ]

  // data.length = 0;

  return res.status(200).json(data);
};

exports.getAllComs = (req, res, next) => {
  return res.status(200).json(commentaires);
};

exports.postCom = (req, res, next) => {
  commentaires.push(req.body.payload)
  console.log(req.body.payload)
  return res.status(200).json(commentaires);
};

exports.askDeviceType = (req, res, next) => {

  console.log(req.body.deviceNumber);
  let typeDevice = "POD_CONFORT";
  return res.status(200).json(typeDevice);
};

exports.askBool = (req, res, next) => {
  console.log(req.body.deviceNumber);
  let answer = false;
  // let answer = true;
  return res.status(200).json(answer);
};

exports.validated = (req, res, next) => {
  console.log(req.body.deviceNumber);
  console.log(req.body.response);
  return res.status(200).json('validated !');
};