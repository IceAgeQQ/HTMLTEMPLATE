	   $(document).ready(function(){
			$('#test').twbsPagination({
				totalPages:5,
				visiblePages:3,
				onPageClick: function (event, page) {
                console.info(page + ' (from options)');
            }
			});
		});