/* - - - - - SITES CONTROLLERS - - - - - */

const Sites = require('../models/sites')
// const fs = require('fs');


exports.getAllSites = (req, res, next) => {
  const sites = [
    {
      "id": "1",
      "name": "école de la tour",
      "gps": "6876471.6876 136.716871",
      "children1": { // children du meme nom
        "id": "1.1",
        "name": "salle de Mr DUPONT",
        "solution": {
          "type": 1, // solution.type.1 = confort, solution.type.2...
          "status": 1 // etat.1 = pas installé, état.2 = installé, etat.3 = en attente (hotline)
        }
      },
      "children2": {
        "id": "1.2",
        "name": "salle de Mr MICHEL",
        "solution": {
          "type": 1,
          "status": 1
        }
      }
    },
    {
      "id": "2",
      "name": "école de machin",
      "gps": "6876471.6876 136.716871",
      "children": {
        "id": "2.1",
        "name": "cantine",
        "solution": {
          "type": 1,
          "status": 1
        }
      }
    },
    {
      "id": "3",
      "name": "école de machin",
      "gps": "6876471.6876 136.716871",
      "children": {
        "id": "3.1",
        "name": "cantine",
        "solution": {
          "type": 1,
          "status": 1
        }
      }
    },
    {
      "id": "4",
      "name": "école de machin",
      "gps": "6876471.6876 136.716871",
      "children": {
        "id": "4.1",
        "name": "cantine",
        "solution": {
          "type": 1,
          "status": 1
        }
      }
    },
    {
      "id": "5",
      "name": "école de la tour",
      "gps": "6876471.6876 136.716871",
      "children1": {
        "id": "5.1",
        "name": "salle de Mr DUPONT",
        "solution": {
          "type": 1,
          "status": 1
        }
      },
      "children2": {
        "id": "5.2",
        "name": "salle de Mr MICHEL",
        "solution": {
          "type": 1,
          "status": 1
        }
      }
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
