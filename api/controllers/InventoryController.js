/**
 * InventoryController
 *
 * @description :: Server-side logic for managing Inventories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	listinventories: function (req, res) {
		Sede.find()
		.populate('inventory')
		.exec(function (err, result) {
				if (err){
					return res.badRequest({ error: 'Error en la consulta' });
				}else{
					let array = [];
					for (var i = 0; i < result.length; i++) {
						let inventory = result[i].inventory;
						if (inventory.length > 0) {
							result[i]['quantity'] = inventory.length;
							array.push(result[i]);

						}
					}
					return res.json(array);
				}
		});
	}
};
