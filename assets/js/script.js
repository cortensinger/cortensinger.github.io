function stopPlus() {
    $('#plus').css({
        'animation-play-state': 'paused',
        '-webkit-animation-play-state': 'paused'
    });
}

function spinPlus() {
    $('#plus').removeClass('pulse');
    $('#plus').addClass('spin');
}

function spinLittlePlus() {
    $('#menu-logo-plus').addClass('spin-little');
}

function moveTitle() {
    $('#t').css({
        'position': 'fixed',
        'top': '0.1em',
        'left': '0.5em'
    });
    $('#o').css({
        'position': 'fixed',
        'top': '0.1em',
        'left': '1em'
    });
    $('#plus').css({'color': '#FFFEFC'});
}

function showPanels() {
    $('#panels').fadeIn(300);
    $('#panel-about').fadeIn(300);
}

function showMenu() {
    $('#menu').show();
    $('#container').addClass('adjust-container');
    setTimeout(function () {
        $('#menu').addClass('show-menu');
        $('#menu-logo').addClass('show-menu-logo');
    }, 50);
    setTimeout(function () {
        $('#menu-line').css({'bottom': '0px'});
    }, 250);
    setTimeout(function () {
        var position = $('#about').position().left,
            width = $('#about').innerWidth();
        console.log(width);
        $('#menu-current').css({
            'left': position,
            'width': width
        });
    }, 1000);
}

function cleanProjects() {
    $(".project-content").addClass('display-none');

    setTimeout(function () {
        $('#project-container').removeClass('project-full');
        $('#project-container').css({
            'display': 'none'
        });
    }, 500);
    $('#container').removeClass('no-scroll');
}

$(document).ready(function () {
    var currentPanel = '#panel-about';
    var currentButton = '#about';
    $('#plus-cover, #plus').click(function () {
        $('#plus-cover').css({'display': 'none'});
        $('#t, #o, #plus').css({'transition': '0.5s', '-webkit-transition': '0.5s'});
        $('#t, #o').addClass('shrink-title');
        $('#plus').css({'color': ''});
        setTimeout(function () {
            showMenu();
            spinLittlePlus();
            $('#plus').css({'color': '#FFFEFC'});
        }, 600);
        setTimeout(function () {
            $('.letter').fadeOut(500);
        }, 800);
        setTimeout(function () {
            showPanels();
        }, 1600);
        setTimeout(function () {
            $('#plus').css({
                'animation-play-state': 'paused',
                '-webkit-animation-play-state': 'paused'
            });
        }, 2000);
    });

    $('#plus-cover').hover(function () {
        spinPlus();
    });

    $('.menu-item').click(function () {
        var id = $(this).attr('id'),
            panel = "#panel-" + id,
            position = $(this).position().left,
            width = $(this).innerWidth();
        if (currentPanel !== panel) {
            $('.panel').fadeOut(500);
            $('#menu-current').css({
                'left': position,
                'width': width
            });
            setTimeout(function () {
                $(panel).fadeIn(500);
            }, 500);
            currentPanel = panel;
            currentButton = "#"+id;
            cleanProjects();
        }
    });

    $('#button-download').hover(function () {
        $(this).addClass('button-effect');
        $('#button-popup').addClass('button-popup-effect');
    }, function () {
        $(this).addClass('button-effect-reverse');
        $('#button-popup').addClass('button-popup-effect-reverse');
        $(this).removeClass('button-effect');
        $('#button-popup').removeClass('button-popup-effect');
        setTimeout(function () {
            $(this).removeClass('button-effect-reverse');
            $('#button-popup').removeClass('button-popup-effect-reverse');
        }, 1000);
    });
    
    $('.contact-element').click(function () {
        var links = {
            'linkedin': 'https://www.linkedin.com/in/vegatomas',
            'github': 'https://github.com/tomasero',
            'email': 'mailto:me@tomasvega.com'
        },
            dest = $(this).text().trim().toLowerCase();
        console.log(dest);
        window.open(links[dest], '_blank');
    });
    
    $('#button-download').click(function () {
        var win = window.open('/assets/docs/TomasVega.pdf', '_blank');
        win.focus();
    });
    
    $(window).resize(function () {
        setTimeout(function () {
            $('#menu-current').css({
                'left': $(currentButton).position().left,
                'width': $(currentButton).innerWidth()
            });             
        }, 500);
    });
    
    $('.project-cell').click(function () {
    var id = $(this).attr('id').split('-')[2],
        project = "#project-" + id,
        position = $(this).position(),
        width = $(this).innerWidth(),
        height = $(this).innerHeight(),
        borderRadius = $(this).css('border-radius');
        console.log(id);
        console.log(project);
        console.log(position);
        console.log(width);
        console.log(height);
        $('#project-container').css({
            'top': position.top,
            'left': position.left,
            'width': width,
            'height': height,
            'border-radius': borderRadius,
            'display': 'block'
        });
        setTimeout(function () {
            $('#project-container').addClass('project-full');
        }, 200);
        setTimeout(function () {
            $(project).removeClass('display-none');
        }, 700);
        $('#container').addClass('no-scroll');
    });
    
    $('.project-back').click(function () {
        var id = $(this).attr('id').split('-')[2],
            project = "#project-" + id;
        console.log("back");
        console.log(project);
        $(project).addClass('display-none');
        
        setTimeout(function () {
            $('#project-container').removeClass('project-full');
            $('#project-container').css({
                'display': 'none'
            });
        }, 500);
        $('#container').removeClass('no-scroll');
    });
    
    $('.link-svg').click(function () {
        var id = $(this).attr('id').split('-')[2];
        var links = {
            1: 'https://github.com/lambdaloop/wheelsense',
            4: 'http://elblog.tomasvega.com',
            5: 'https://docs.google.com/presentation/d/1I3RU1kvsPxRFHs33R6WiZtBUyDdlfxgRLMnOsz0lfmY/edit?usp=sharing',
            6: 'https://www.hackster.io/synthsense/synthsense-f62fc1',
            7: 'https://www.hackster.io/golden-goats/biokneek-74752f',
            8: 'https://youtu.be/rUajyflnPHQ',         
            9: 'https://www.hackster.io/team-taboo/my-flow',
            10: 'https://github.com/tomasero/mind-kinetics',
            11: 'http://challengepost.com/software/mydrone',
            12: 'https://github.com/tomasero/haptic-braille'
            
            
        };
        console.log(parseInt(id));
        window.open(links[parseInt(id)], '_blank');
    });
    
});