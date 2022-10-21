$(window).load(function () {
    $(document).ready(function () {
        var interval = setInterval(function () {
            var momentNow = moment();
            $('#tarih-bolumu').html(momentNow.format('DD.MM.YYYY'));
            $('#saat-bolumu').html(momentNow.format('hh:mm:ss'));

        }, 100);

    });
});