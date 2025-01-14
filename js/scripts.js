/********************** Localization **********************/

var current_lang = "en";
var dictionary = {
    "en": {
        "_events": "Event",
        "_venue": "Venues",
        "_honeymoon": "Gifts",
        "_rsvp": "RSVP",
        "_intro": "We are getting married!",
        "_subtitle": "It is with immense joy that we invite you to celebrate with us the most special day of our lives.<br/>We are getting married on <b><i>9th November 2024</b></i> and we would like you to be a part of it",
        "_church": "Ceremony",
        "_dinner": "Reception",
        "_dinner_time": "after the ceremony",
        "_dress_code": "Dress Code",
        "_dress_code_header": "Dress Code",
        "_dress_code_item": "Formal",
        "_dress_code_blurb": "For our wedding, we would prefer full formal/social attire. We kindly ask all our dear guests to dress according to the dress code to make this moment even more memorable. We can't wait to share this magical day with each and every one of you.<br/>\
        <b>Women</b>: Long or midi dresses<br/>\
        <b>Men</b>: Suit<br/>\
        <b>Avoid</b>: Wearing white or dresses with white patterns (bride)",
        "_map_header": "How do I get there?",
        "_loc1": "Chiesa di San Procolo",
        "_loc1_blurb": "<i>Via d'Azeglio, 52, Bologna</i>",
        "_loc2": "Palazzo Gnudi",
        "_loc2_blurb": "<i>Via Riva di Reno, 77, Bologna</i>",
        "_parking_blurb": "Both the church and the reception venue are located in the city center; here is a list of some parking options in the area:",
        "_parking_1": "Riva Reno Parking [<a href=\"https://www.apcoa.it/parcheggi-in/bologna/riva-reno/\" target=\"_blank\">site</a>, <a href=\"https://maps.app.goo.gl/JYeWiehB9e6RwC7p7\" target=\"_blank\">maps</a>] <i>(24h, 10 minutes from the venue, 20 minutes from the church)</i>",
        "_parking_2": "Piazza VIII Agosto Parking [<a href=\"https://www.apcoa.it/parcheggi-in/bologna/piazza-viii-agosto/\" target=\"_blank\">site</a>, <a href=\"https://maps.app.goo.gl/nAJKa42V4XYUbE9k9\" target=\"_blank\">maps</a>] <i>(24h, 5 minutes from the venue, 15 minutes from the church)</i>",
        "_parking_3": "Ex-Staveco Parking [<a href=\"https://bologna.iovivo.eu/aperti-a-tutti/\" target=\"_blank\">site</a>, <a href=\"https://maps.app.goo.gl/1UScoiB2bu8m2miR6\" target=\"_blank\">maps</a>] <i>(24h, 25 minutes from the venue, 10 minutes from the church)</i>",
        "_parking_4": "Garage Marconi [<a href=\"https://www.parkopedia.it/parking/carpark/garage_marconi/40122/bologna/?arriving=202410272030&leaving=202410272230\" target=\"_blank\">site</a>, <a href=\"https://maps.app.goo.gl/uEtK2ntdxWYzTRpu8\" target=\"_blank\">maps</a>] <i>(ZTL, open until 01:00, 2 minutes from the venue, 18 minutes from the church)</i>",
        "_honeymoon_header": "Gifts and Honeymoon",
        "_honeymoon_blurb": "Dear friends and family,<br/>\
        <br/>\
        We are very happy to share our special moment with you! Your presence at our wedding is the greatest gift we could receive. As we have been together for six years and share our home (and a little cat), we have decided not to create a traditional gift list. Instead, we are planning a very special honeymoon to celebrate our life together. We will revisit our favorite country, Japan, where we got engaged, and also explore other destinations, such as South Korea, Hong Kong.<br/>\
        <br/>\
        If you wish to give us a gift in some way to make this trip even more special, we have created two accounts (PayPal and bank via Monzo) for contributions to this moment. Please do not hesitate to contact us if you have any questions.<br/>\
        <br/>\
        We can't wait to share this special day with all of you.<br/>\
        With love, Marcella & Federico",
        "_rsvp_header": "RSVP",
        "_rsvp_blurb": "We would greatly appreciate if you could RSVP before August 2024",
        // "_email": "Your email",
        "_plusones": "Plus ones / kids",
        "_diet": "Dietary requirements",
        "_na": "N/A",
        "_vegetarian": "Vegetarian",
        "_vegan": "Vegan",
        "_name": "Your name",
        "_code": "Invite code",
        "_confirm": "Yes, that's me!",
        "_invalid_code": "Sorry! Your invite code is incorrect.",
        "_server_issue": "Sorry! There is an issue with the server.",
        "_success": "Thank you!",
        "_success_blurb": "We are glad to see you join us on our big day.",
        "_loading": "Saving, please wait a moment!"
    },
    "it": {
        "_events": "Evento",
        "_venue": "Location",
        "_honeymoon": "Regali",
        "_rsvp": "RSVP",
        "_intro": "Sei invitato al nostro matrimonio!",
        "_subtitle": "Con grande gioia vi invitiamo a celebrare con noi il giorno più speciale delle nostre vite.<br/>Ci sposeremo il <b><i>9 di Novembre 2024</b></i> e ti invitiamo a festeggiare con noi!",
        "_church": "Cerimonia",
        "_dinner_time": "dopo la cerimonia",
        "_dinner": "Ricevimento",
        "_dress_code": "Dress Code",
        "_dress_code_header": "Dress Code",
        "_dress_code_item": "Formale",
        "_dress_code_blurb": "Per il nostro matrimonio, preferiremmo un abbigliamento formale. Chiediamo gentilmente a tutti i nostri cari invitati di vestirsi secondo il dress code per rendere questo momento ancora più memorabile. Non vediamo l'ora di condividere questo giorno magico con ognuno di voi.<br/>\
        <b>Donne</b>: Abiti lunghi o midi<br/>\
        <b>Uomini</b>: Abito<br/>\
        <b>Evitare</b>: Indossare bianco o abiti con stampa bianca (sposa)",
        "_map_header": "Come ci arrivo?",
        "_loc1": "Chiesa di San Procolo",
        "_loc1_blurb": "<i>Via d'Azeglio, 52, Bologna</i>",
        "_loc2": "Palazzo Gnudi",
        "_loc2_blurb": "<i>Via Riva di Reno, 77, Bologna</i>",
        "_parking_blurb": "Sia la Chiesa che il Palazzo per il ricevimento sono in centro, ecco la lista di alcuni parcheggi in centro:",
        "_parking_1": "Parcheggio Riva Reno [<a href=\"https://www.apcoa.it/parcheggi-in/bologna/riva-reno/\" target=\"_blank\">sito</a>, <a href=\"https://maps.app.goo.gl/JYeWiehB9e6RwC7p7\" target=\"_blank\">maps</a>] <i>(24h, 10 minuti dal Palazzo, 20 minuti dalla Chiesa)</i>",
        "_parking_2": "Parcheggio Piazza VIII Agosto [<a href=\"https://www.apcoa.it/parcheggi-in/bologna/piazza-viii-agosto/\" target=\"_blank\">sito</a>, <a href=\"https://maps.app.goo.gl/nAJKa42V4XYUbE9k9\" target=\"_blank\">maps</a>] <i>(24h, 5 minuti dal Palazzo, 15 minuti dalla Chiesa)</i>",
        "_parking_3": "Parcheggio ex-Staveco [<a href=\"https://bologna.iovivo.eu/aperti-a-tutti/\" target=\"_blank\">sito</a>, <a href=\"https://maps.app.goo.gl/1UScoiB2bu8m2miR6\" target=\"_blank\">maps</a>] <i>(24h, 25 minuti dal Palazzo, 10 minuti dalla Chiesa)</i>",
        "_parking_4": "Garage Marconi [<a href=\"https://www.parkopedia.it/parking/carpark/garage_marconi/40122/bologna/?arriving=202410272030&leaving=202410272230\" target=\"_blank\">sito</a>, <a href=\"https://maps.app.goo.gl/uEtK2ntdxWYzTRpu8\" target=\"_blank\">maps</a>] <i>(ZTL, fino all'01:00, 2 minuti dal Palazzo, 18 minuti dalla Chiesa)</i>",
        "_honeymoon_header": "Regali e Luna di Miele",
        "_honeymoon_blurb": "Cari amici e familiari,<br/>\
        <br/>\
        Siamo molto felici di condividere il nostro momento speciale con voi! La vostra presenza al nostro matrimonio è il regalo più grande che potremmo ricevere. Dato che siamo insieme da sei anni e condividiamo la nostra casa (e un piccolo gatto), abbiamo deciso di non creare una lista regali tradizionale. Invece, stiamo pianificando una luna di miele molto speciale per celebrare la nostra vita insieme. Rivisiteremo il nostro Paese preferito, il Giappone, dove ci siamo fidanzati, e esploreremo anche altre destinazioni, come la Corea del Sud e Hong Kong.<br/>\
        <br/>\
        Se desiderate darci un regalo in qualche modo per rendere questo viaggio ancora più speciale, abbiamo creato due conti (PayPal e banca tramite Monzo) per contributi a questo momento. Non esitate a contattarci se avete domande.<br/>\
        <br/>\
        Non vediamo l'ora di condividere questo giorno speciale con tutti voi.<br/>\
        Con amore, Marcella & Federico",
        "_rsvp_header": "RSVP",
        "_rsvp_blurb": "Apprezzeremmo una risposta prima di Agosto 2024",
        // "_email": "La tua email",
        "_plusones": "Accompagnatori / bambini",
        "_diet": "Restrizioni alimentari",
        "_na": "N/A",
        "_vegetarian": "Vegetariano",
        "_vegan": "Vegano",
        "_name": "Il tuo nome",
        "_code": "Il tuo codice invitato",
        "_confirm": "Ci sono!",
        "_invalid_code": "Mi dispiace! Il tuo codice invitato è errato.",
        "_server_issue": "Mi dispiace! C'è un problema con il server.",
        "_success": "Grazie!",
        "_success_blurb": "Ti aspettiamo al nostro matrimonio.",
        "_loading": "Aspetta solo un secondo, sto salvando!"
    },
    "pt": {
        "_events": "O Evento",
        "_venue": "Local",
        "_honeymoon": "Presentes",
        "_rsvp": "RSVP",
        "_intro": "Vamos nos casar!",
        "_subtitle": "É com imensa alegria que convidamos vocês para celebrar conosco o dia mais especial de nossas vidas.<br/>O evento acontecerá dia <b><i>9 de Novembro de 2024</b></i>, e gostaríamos muito de ter você com a gente",
        "_church": "Cerimônia do Casamento",
        "_dinner_time": "depois da cerimônia",
        "_dinner": "Recepção do casamento",
        "_dress_code": "Dress Code",
        "_dress_code_header": "Dress Code",
        "_dress_code_item": "Formal/social completo",
        "_dress_code_blurb": "Pedimos gentilmente que todos os nossos queridos convidados estejam vestidos de acordo com o dress code para tornar este momento ainda mais memorável. Mal podemos esperar para compartilhar esse dia mágico com cada um de vocês.<br/>\
        <b>Mulheres</b>: Vestidos longos ou midi<br/>\
        <b>Homens</b>: Terno<br/>\
        <b>Evitar</b>: Uso de branco ou vestido com branco estampado (noiva)",
        "_map_header": "Como chegar",
        "_loc1": "Chiesa di San Procolo",
        "_loc1_blurb": "<i>Via d'Azeglio, 52, Bologna</i>",
        "_loc2": "Palazzo Gnudi",
        "_loc2_blurb": "<i>Via Riva di Reno, 77, Bologna</i>",
        "_parking_blurb": "Tanto a igreja quanto o local da recepção estão no centro; aqui está uma lista de algumas opções de estacionamento na área:",
        "_parking_1": "Estacionamento Riva Reno [<a href=\"https://www.apcoa.it/parcheggi-in/bologna/riva-reno/\" target=\"_blank\">site</a>, <a href=\"https://maps.app.goo.gl/JYeWiehB9e6RwC7p7\" target=\"_blank\">maps</a>] <i>(24h, 10 minutos do local da recepção, 20 minutos da igreja)</i>",
        "_parking_2": "Estacionamento Piazza VIII Agosto [<a href=\"https://www.apcoa.it/parcheggi-in/bologna/piazza-viii-agosto/\" target=\"_blank\">site</a>, <a href=\"https://maps.app.goo.gl/nAJKa42V4XYUbE9k9\" target=\"_blank\">maps</a>] <i>(24h, 5 minutos do local da recepção, 15 minutos da igreja)</i>",
        "_parking_3": "Estacionamento Ex-Staveco [<a href=\"https://bologna.iovivo.eu/aperti-a-tutti/\" target=\"_blank\">site</a>, <a href=\"https://maps.app.goo.gl/1UScoiB2bu8m2miR6\" target=\"_blank\">maps</a>] <i>(24h, 25 minutos do local da recepção, 10 minutos da igreja)</i>",
        "_parking_4": "Garagem Marconi [<a href=\"https://www.parkopedia.it/parking/carpark/garage_marconi/40122/bologna/?arriving=202410272030&leaving=202410272230\" target=\"_blank\">site</a>, <a href=\"https://maps.app.goo.gl/uEtK2ntdxWYzTRpu8\" target=\"_blank\">maps</a>] <i>(ZTL, aberto até 01:00, 2 minutos do local da recepção, 18 minutos da igreja)</i>",
        "_honeymoon_header": "Presentes e Lua de Mel",
        "_honeymoon_blurb": "Queridos amigos e familiares,<br/>\
        <br/>\
        Estamos muito felizes em compartilhar nosso momento especial com vocês! Sua presença em nosso casamento é o maior presente que poderíamos receber. Como já estamos juntos há seis anos e compartilhamos nossa casa (e uma gatinha), decidimos não criar uma lista de presentes tradicionais. Em vez disso, estamos planejando uma lua de mel muito especial para celebrar nossa vida juntos. Vamos revisitar nosso país favorito, o Japão, onde ficamos noivos, e também explorar outros destinos, como a Coréia do Sul.<br/>\
        <br/>\
        Se vocês desejarem nos presentear de alguma forma para tornar essa viagem ainda mais especial, criamos duas contas no PayPal e Monzo para vocês participarem desse momento. Não hesitem em entrar em contato conosco se tiverem alguma dúvida.<br/>\
        Mal podemos esperar para compartilhar esse dia inesquecível com todos vocês.<br/>\
        Com carinho, Marcella & Federico",
        "_rsvp_header": "RSVP",
        "_rsvp_blurb": "Por favor, confirme antes do dia 1 de Agosto 2024",
        // "_email": "Seu e-mail",
        "_plusones": "Acompanhante (s)",
        "_diet": "Restrição alimentar",
        "_na": "N/A",
        "_vegetarian": "Vegetariano",
        "_vegan": "Vegano",
        "_name": "O seu nome",
        "_code": "Código do convidado",
        "_confirm": "Sim, sou eu!",
        "_invalid_code": "Desculpe! O seu código está incorreto.",
        "_server_issue": "Desculpe! Estamos com um problema no sistema.",
        "_success": "Grazie Mille!",
        "_success_blurb": "Estamos muito contentes de ter você no nosso dia especial.",
        "_loading": "Aguarde um momento!"
    }
};

var honeymoon_items = [
    "resources/img/honeymoon/IMG_6648.jpg",
    "resources/img/honeymoon/IMG_6651.jpg",
    "resources/img/honeymoon/IMG_6652.jpg",
    "resources/img/honeymoon/IMG_6653.jpg",
    "resources/img/honeymoon/IMG_6654.jpg",
    "resources/img/honeymoon/IMG_6655.jpg",
    "resources/img/honeymoon/IMG_6656.jpg",
    "resources/img/honeymoon/IMG_6658.jpg",
    "resources/img/honeymoon/IMG_6659.jpg"
]


$(document).ready(function () {

    /***************** Waypoints ******************/

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /***************** Header BG Scroll ******************/

    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $('section.navigation').addClass('fixed');
                $('header').css({
                    "border-bottom": "none",
                    "padding": "25px 0"
                });
                $('header .member-actions').css({
                    "top": "25px",
                })
                $('header .navicon').css({
                    "top": "30px",
                });;

            } else {
                $('section.navigation').removeClass('fixed');
                $('header').css({
                    "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                    "padding": "35px 0"
                });
                $('header .member-actions').css({
                    "top": "35px",
                });
                $('header .navicon').css({
                    "top": "42px",
                });
            }
        });
    });
    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 90
                    }, 2000);
                    return false;
                }
            }
        });

    });

    /********************** RSVP **********************/
    $('#rsvp-form').on('submit', function (e) {
        e.preventDefault();
        
        $('#alert-wrapper').html(alert_markup('info', dictionary[current_lang]['_loading']));
        var md5_hash = md5($('#invite_code').val());
                
        if (md5_hash !== 'a9dd14d824822d6d78d0fe3e55dbd7fb' && md5_hash !== '2cbca44843a864533ec05b321ae1f9d1') {
            $('#alert-wrapper').html(alert_markup('danger', dictionary[current_lang]['_invalid_code']));
        } else {
            var data = {
                'name': $(this).find('input[name="name"]').val(),
                'extras': $(this).find('input[name="extras"]').val(),
                'invite_code': md5_hash,
                'diet': $(this).find('select[name="diet"]').val(),
            };

            $.post('https://script.google.com/macros/s/AKfycbwuHpPyRUo5paqOWbDc-rwG3_wVHxb-IhqkCgWo4udo2K4VwgmRcUF__OO-P3d6gyrZ/exec', data)
                .done(function (data) {
                    if (data.result === "error") {
                        $('#alert-wrapper').html(alert_markup('danger', data.message));
                    } else {
                        $('#alert-wrapper').html('');
                        $('#rsvp-modal').modal('show');
                    }
                })
                .fail(function (data) {
                    $('#alert-wrapper').html(alert_markup('danger', dictionary[current_lang]['_server_issue']));
                });
        }
    });

    /********************** Localization **********************/

    var set_lang = function (dictionary) {
        $("[data-localized]").html(function () {
            var key = $(this).data("localized");
            if (dictionary.hasOwnProperty(key)) {
                return dictionary[key];
            }
        });
    };

    $("#lang").on("change", function () {
        var language = $(this).val().toLowerCase();
        if (dictionary.hasOwnProperty(language)) {
            current_lang = language;
            set_lang(dictionary[language]);
        }
    });

    if (navigator.language) {
        var language = navigator.language.split('-')[0]
        if (dictionary.hasOwnProperty(language)) {
            current_lang = language;
            set_lang(dictionary[language]);
        }
    } else {
        set_lang(dictionary.en);
    }

    /********************** Honeymoon fund **********************/
    var create_carousel = function() {
        var w = window.innerWidth;
        if (w > 768) {
            var chunkSize = 3;
            var col = 'col-4';
            var carousel_array = honeymoon_items;
        } else {
            var chunkSize = 2;
            var col = 'col-6';
            var carousel_array = honeymoon_items.length % chunkSize === 1 ? honeymoon_items.slice(0, -1) : honeymoon_items;
        }
        
        $("#honeymoon-carousel-inner").html('');
        for (let i = 0; i < carousel_array.length; i += chunkSize) {
            var chunks = carousel_array.slice(i, i + chunkSize);
            $("#honeymoon-carousel-inner").append(
                `<div class="carousel-item row${i == 0 ? ' active' : ''}">
                    ${chunks.map(item => {
                        return `<div class="${col} float-left">
                            <img src="${item}" class="img-fluid"></a>
                        </div>`
                    }).join("\n")}
                </div>`
            )
        }
    }

    create_carousel();
    window.addEventListener('resize', create_carousel)
})

/********************** Extras **********************/

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}


