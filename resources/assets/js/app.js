var $ = require('jquery');
var Datatable = require('datatables');

require('./dataTables.bootstrap.js');

$(document).ready(function() {
	$('#releases-table').DataTable({
		lengthMenu: [[25, 50, 100, -1], [25, 50, 100, "All"]],
		pageLength: 50,
		responsive: true,
		stateSave: true
	});
});
