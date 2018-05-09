const swag = require('../models/swag');

module.exports = {
    search: (req, res, next) => {
        const { cat } = req.query;
        if (!cat) {
            res.status(200).send(swag);
        } else {
            const filtCategory = swag.filter(swag => swag.category === cat)
            res.status(200).send(filtCategory)
        }
    }
}

// module.exports = {
//     search: ( req, res, next ) => {
//       const { category } = req.query;
//       if ( !category ) {
//         res.status(200).send( swag );
//       } else {
//         const filteredSwag = swag.filter( swag => swag.category === category );
//         res.status(200).send( filteredSwag );
//       }
//     }
//   };