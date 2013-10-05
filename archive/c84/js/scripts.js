var releasesource   = $("#release-template").html();
var releasetemplate = Handlebars.compile(releasesource);
$(".releases").html(releasetemplate(releases));

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

var c84 = new Date(2013, 8-1, 10)
$('#countdown').countdown({
    until: c84,
    expiryText: '<div class="over">IT HAS BEGUN!</div>',
    format: 'DHMS',
    description: 'Until Comiket 84 Begins!'
});