/* - - - - - SITES CONTROLLERS - - - - - */

const Sites = require('../models/sites')
// const fs = require('fs');


exports.getAllSites = (req, res, next) => {
  const sites = [
    {
      "id": "1",
      "name": "école de la tour",
      "gps": "6876471.6876 136.716871",
      "children-1": { // children du meme nom
        "id": "1.1",
        "name": "salle de Mr DUPONT",
        "solutionType": 1, // solution.type.1 = confort, solution.type.2...
        "solutionStatus": 1 // etat.1 = pas installé, état.2 = installé, etat.3 = en attente (hotline)
      },
      "children-2": {
        "id": "1.2",
        "name": "salle de Mr MICHEL",
        "solutionType": 1, // solution.type.1 = confort, solution.type.2...
        "solutionStatus": 1 // etat.1 = pas installé, état.2 = installé, etat.3 = en attente (hotline)
      }
    },
    {
      "id": "5",
      "name": "école de la tour",
      "gps": "6876471.6876 136.716871",
      "children": [{
        "id": "5.1",
        "name": "batiment-E",
        "children": [{
          "id": "5.1.1",
          "name": "Salle de Mr Dupont",
          "solutionType": 1, // solution.type.1 = confort, solution.type.2...
          "solutionStatus": 1 // etat.1 = pas installé, état.2 = installé, etat.3 = en attente (hotline)
        }]
      }, {
        "id": "5.2",
        "name": "batiment-E",
        "children": [{
          "id": "5.2.1",
          "name": "Salle de Mr Michel",
          "solutionType": 1, // solution.type.1 = confort, solution.type.2...
          "solutionStatus": 1 // etat.1 = pas installé, état.2 = installé, etat.3 = en attente (hotline)
        },
        {
          "id": "5.2.2",
          "name": "Salle de Mr Alain",
          "solutionType": 1, // solution.type.1 = confort, solution.type.2...
          "solutionStatus": 1 // etat.1 = pas installé, état.2 = installé, etat.3 = en attente (hotline)
        }]
      },
      ]
    },
  ]
  console.log('Les sites')
  return res.status(200).json(sites);
};

// exports.getOneSite = (req, res, next) => {
//     Site.findOne({ _id: req.params.id })
//         .then(site => res.status(200).json(site))
//         .catch(error => res.status(404).json({ error }));
// };
