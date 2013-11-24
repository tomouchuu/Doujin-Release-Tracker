'use strict';

var option = 'all';
var releaseRow = $('.release-row');

$('#options a').click(function() {
    option = $(this).attr('data-option');
    $('#options li').removeClass('active');
    $(this).parent().attr('class', 'active');
    releaseRow.each(function(){
        $(this).show();
    });
    if (option === 'all')
    {
        return;
    }
    else
    {
        releaseRow.each(function(){
            if ($(this).attr('data-type') !== option)
            {
                $(this).hide();
            }
        });
    }
});