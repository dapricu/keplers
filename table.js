$(document).ready(function() {
    $('#cardstable').DataTable( {
		"paging": true,
		"ordering": false,
		"responsive": true,
		"searching": false,
        "lengthMenu": [4, 8],
		"language": {
			"lengthMenu": "Show _MENU_ rows",
			"info": "Showing _START_ to _END_ of _TOTAL_ rows",
		},
		rowReorder: {
            selector: 'td:nth-child(2)'
        },
        responsive: true
    } );
} );