/**
 * TicketUserController
 *
 * @description :: Server-side logic for managing Ticketusers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	records: function (req, res) {
			var now = new Date(),
    			start = new Date(now.getTime() - (30*24*60*60*1000));
			Ticket.find()
			.populate('user')
	    .where({ "createdAt" : { "<": "start" } })
	    .exec(function (err, tickets) {
	        if (err){
						return res.badRequest({ error: 'Error en la consulta' });
					}
	        return res.ok({
						tickets,
						from: start,
						to: now
					});
	    });
	}
};
