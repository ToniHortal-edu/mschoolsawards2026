jQuery(document).ready(function($) {
    $('#proposal-filter-form select').on('change', function() {
        var form = $('#proposal-filter-form');
        var formData = form.serialize(); 

        $('.row.proposal-library.espaciado-post-debajo').addClass('loading'); 

        $.ajax({
            url: ajax_params.ajax_url, 
            type: 'POST', 
            data: formData, 
            success: function(response) {
                if(response.success) {
                    $('.dashboard-tb2').html(response.data); 
                } else {
                    console.error('Error: ', response.data);
                }
                $('.row.proposal-library.espaciado-post-debajo').removeClass('loading'); 
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText); 
                $('.row.proposal-library.espaciado-post-debajo').removeClass('loading'); 
            }
        });
    });
});
