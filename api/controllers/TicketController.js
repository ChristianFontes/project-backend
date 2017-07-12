/**
 * TicketController
 *
 * @description :: Server-side logic for managing Tickets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	ticketincidence: function (req, res) {
			Ticket.find()
			.populateAll()
	    .exec(function (err, result) {
	        if (err){
						return res.badRequest({ error: 'Error en la consulta' });
					}else{
						let array = [];
						for (var i = 0; i < result.length; i++) {
							let incidence = result[i].incidences;
							if (incidence.length == 0) {
								array.push(result[i])
							}
						}
						return res.json(array);
					}
	    });
	},
};
