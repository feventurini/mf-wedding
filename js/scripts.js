/********************** Localization **********************/

var current_lang = "en";
var dictionary = {
    "en": {
        "_events": "Events",
        "_where": "Where",
        "_venue": "Venues",
        "_rsvp": "RSVP",
        "_intro": "We are getting married!",
        "_subtitle": "9th November '23 and we would like you to be a part of it",
        "_church": "Church",
        "_church_blurb": "Some church blurb",
        "_train": "Train Tour",
        "_train_blurb": "Some Train blurb",
        "_dinner": "Dinner and celebration",
        "_dinner_blurb": "Some celebration blurb",
        "_dress_code_btn": "Dress Code",
        "_dress_code_header": "Dress Code",
        "_dress_code_item": "Formal",
        "_dress_code_blurb": "Some examples of formalwear from pinterest.",
        "_map_header": "How do I get there?",
        "_loc1": "Chiesa di San Benedetto",
        "_loc1_blurb": "Via dell'Indipendenza, 64, Bologna",
        "_loc2": "Palazzo Gnudi",
        "_loc2_blurb": "Via Riva di Reno, 77, Bologna",
        "_rsvp_header": "RSVP?",
        "_rsvp_blurb": "We would greatly appreciate if you could RSVP before August 2024",
        // "_email": "Your email",
        "_plusones": "Husband/Wife or kids",
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
        "_events": "Eventi",
        "_where": "Dove",
        "_venue": "Location",
        "_rsvp": "RSVP",
        "_intro": "Sei invitato al nostro matrimonio!",
        "_subtitle": "Ci sposeremo il 9 di Novembre 2024 e ti invitiamo a festeggiare con noi!",
        "_church": "Chiesa",
        "_church_blurb": "TBD",
        "_train": "Trenino",
        "_train_blurb": "TBD",
        "_dinner": "Cena e ricevimento",
        "_dinner_blurb": "TBD",
        "_dress_code_btn": "Dress Code",
        "_dress_code_header": "Dress Code",
        "_dress_code_item": "Formale",
        "_dress_code_blurb": "Qualcosa di formale.",
        "_map_header": "Come ci arrivo?",
        "_loc1": "Chiesa di San Benedetto",
        "_loc1_blurb": "Via dell'Indipendenza, 64, Bologna",
        "_loc2": "Palazzo Gnudi",
        "_loc2_blurb": "Via Riva di Reno, 77, Bologna",
        "_rsvp_header": "RSVP?",
        "_rsvp_blurb": "Apprezzeremmo una risposta prima di Agosto 2024",
        // "_email": "La tua email",
        "_plusones": "Compagno/a",
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
        "_where": "Onde?",
        "_venue": "Local",
        "_rsvp": "RSVP",
        "_intro": "Vamos nos casar",
        "_subtitle": "no dia 9 de Novembro de 2024, e gostaríamos muito de ter você com a gente",
        "_church": "Igreja",
        "_church_blurb": "San Benedetto é uma igreja católica romana no centro de Bologna. Fundada no século XII, a igreja hoje tem fachada (1606) projetada por Giovanni Battista Ballerini. O interior contém obras de Giacomo Cavedoni, Alessandro Tiarini, Cesare Aretusi, Lucio Massari, Ercole Procaccini il Vecchio, Ubaldo Gandolfi e uma escultura de Angelo Gabriello Piò.",
        "_train": "Tour em Bologna",
        "_train_blurb": "Some Train blurb",
        "_dinner": "O jantar e a celebraçao",
        "_dinner_blurb": "Some celebration blurb",
        "_dress_code_btn": "Dress Code",
        "_dress_code_header": "Dress Code",
        "_dress_code_item": "Formal",
        "_dress_code_blurb": "Some examples of formalwear from pinterest.",
        "_map_header": "Como chegar",
        "_loc1": "Chiesa di San Benedetto",
        "_loc1_blurb": "Via dell'Indipendenza, 64, Bologna",
        "_loc2": "Palazzo Gnudi",
        "_loc2_blurb": "Via Riva di Reno, 77, Bologna",
        "_rsvp_header": "RSVP?",
        "_rsvp_blurb": "Por favor, confirme antes do dia 1 de Agosto 2024",
        // "_email": "Seu e-mail",
        "_plusones": "Acompanhante (s)",
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
    
    // /********************** Add to Calendar **********************/
    // var myCalendar = createCalendar({
    //     options: {
    //         class: '',
    //         // You can pass an ID. If you don't, one will be generated for you
    //         id: ''
    //     },
    //     data: {
    //         // Event title
    //         title: "Federico and Marcella's Wedding",

    //         // Event start date
    //         start: new Date('Nov 27, 2017 10:00'),

    //         // Event duration (IN MINUTES)
    //         // duration: 120,

    //         // You can also choose to set an end time
    //         // If an end time is set, this will take precedence over duration
    //         end: new Date('Nov 29, 2017 00:00'),

    //         // Event Address
    //         address: 'ITC Fortune Park Hotel, Kolkata',

    //         // Event Description
    //         description: "We can't wait to see you on our big day. For any queries or issues, please contact Mr. Amit Roy at +91 9876543210."
    //     }
    // });

    // $('#add-to-cal').html(myCalendar);    

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
            };

            $.post('https://script.google.com/macros/s/AKfycbwuHpPyRUo5paqOWbDc-rwG3_wVHxb-IhqkCgWo4udo2K4VwgmRcUF__OO-P3d6gyrZ/exec', data)
                .done(function (data) {
                    console.log(data);
                    if (data.result === "error") {
                        $('#alert-wrapper').html(alert_markup('danger', data.message));
                    } else {
                        $('#alert-wrapper').html('');
                        $('#rsvp-modal').modal('show');
                    }
                })
                .fail(function (data) {
                    console.log(data);
                    $('#alert-wrapper').html(alert_markup('danger', dictionary[current_lang]['_server_issue']));
                });
        }
    });

    var set_lang = function (dictionary) {
        $("[data-localized]").text(function () {
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
});

/********************** Extras **********************/

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}
