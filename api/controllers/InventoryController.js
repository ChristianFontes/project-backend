/**
 * InventoryController
 *
 * @description :: Server-side logic for managing Inventories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	sum: function (req, res) {
		Sede.find()
    .exec(function (err, sedes) {
        if (err){
					return res.badRequest({ error: 'Error en la consulta' });
				}else{
					return res.json(sedes);
				}
    });
	}
};
