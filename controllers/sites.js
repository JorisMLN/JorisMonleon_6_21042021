/* - - - - - SITES CONTROLLERS - - - - - */

const Sites = require('../models/sites')
// const fs = require('fs');


exports.getAllSites = (req, res, next) => {
  const sites = [
    {
      "id": "ksjfdlskjfs",
      "name": "école de la tour",
      "gps": "6876471.6876 136.716871",
      "children": { // children du meme nom
        "id": "lkjnknlkn",
        "name": "salle de Mr DUPONT",
        "solution": {
          "type": 1, // solution.type.1 = confort, solution.type.2...
          "status": 1 // etat.1 = pas installé, état.2 = installé, etat.3 = en attente (hotline)
        }
      },
      "childrenn": {
        "id": "lkjnknlkn",
        "name": "salle de Mr MICHEL",
        "solution": {
          "type": 1,
          "status": 1
        }
      }
    },
    {
      "id": "ksjfdlskjfs",
      "name": "école de machin",
      "gps": "6876471.6876 136.716871",
      "children": {
        "id": "lkjnknlkn",
        "name": "cantine",
        "solution": {
          "type": 1,
          "status": 1
        }
      }
    }
  ]
  console.log('Les sites')
  return res.status(200).json(sites);
};

// exports.getOneSite = (req, res, next) => {
//     Site.findOne({ _id: req.params.id })
//         .then(site => res.status(200).json(site))
//         .catch(error => res.status(404).json({ error }));
// };
