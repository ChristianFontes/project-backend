/**
 * ProductController
 *
 * @description :: Server-side logic for managing Products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	serialproduct: function (req, res) {
		const { name, model, brand } = req.body;
			Product.find({name, model, brand})
			.populate('inventory')
	    .exec(function (err, result) {
	        if (err){
						return res.badRequest({ error: 'Error en la consulta' });
					}else{
						let array = [];
						for (var i = 0; i < result.length; i++) {
							let inventory = result[i].inventory[0];
							if (inventory == undefined) {
								array.push(result[i]);
							}
						}
						return res.json(array);
					}
	    });
	},

	groupbynameproduct: function (req, res) {
			Product.query("SELECT * FROM Product GROUP BY name",
			function(err, name) {
				if (err){
					return res.badRequest({ error: 'Error en la consulta' });
				}
				return res.json(name);
		  });
	},

	groupbymodelproduct: function (req, res) {
			Product.query("SELECT * FROM Product GROUP BY model",
			function(err, model) {
				if (err){
					return res.badRequest({ error: 'Error en la consulta' });
				}
				return res.json(model);
		  });
	},

	groupbybrandproduct: function (req, res) {
			Product.query("SELECT * FROM Product GROUP BY brand",
			function(err, brand) {
				if (err){
					return res.badRequest({ error: 'Error en la consulta' });
				}
				return res.json(brand);
		  });
	}
};
