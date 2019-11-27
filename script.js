$(document).ready(function() {
    $('head').append('<link href="https://3.top4top.net/p_1426t5cqq1.jpg" rel="shortcut icon" type="image/x-icon" />');

    $.getJSON("https://ptb.discordapp.com/api/guilds/523924649055223817/widget.json", function(result) {

        for(i=0; i < result.channels.length; i++){
            if(result.channels[i].position === 0){
                var serverNum = result.channels[i].name.replace(":", "");
            } else if (result.channels[i].position === 1){
                var usersNum = result.channels[i].name.replace(":", "");
            } else if(result.channels[i].position === 2){
                var channelsNum = result.channels[i].name.replace(":", "");
            }
        }

        $('.statsServersNum').text(numberWithCommas(serverNum));
        $('.statsUsersNum').text(numberWithCommas(usersNum));
        $('.statsChannelsNum').text(numberWithCommas(channelsNum));

        console.log("[x] Data success. ")
    });

    $('.topBar-GetBaron').on('click', function() {
        window.open("http://www.hamoud.tk/host", '_blank');
    });

    $(".topBar-About").on('click', function() {
            window.open("http://www.hamoud.tk/host", '_blank');
    });

    $(".topBar-Commands").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000);
    });
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
