// İlk input değerinin '0' ile başlamasını engelleme.
// Prevent the first input value from starting with '0'.

$('#number').keypress(function (e)
{
if (this.value.length == 0 && e.which == 48)
    {
        $(".help-block").fadeIn('slow').fadeOut('slow');
        return false;
    }
});