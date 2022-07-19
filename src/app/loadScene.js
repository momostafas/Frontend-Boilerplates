import $ from 'jquery';
import typer from 'typer-js';

var windowsLoadedState = 0;

setTimeout(() => {
  if (windowsLoadedState === 0) {
    windowsLoadedState = 1;
  } else {
    $('.boot-data').remove();
    $('#profile-body').css('visibility', 'visible');
    typer('#profile-body_main-info_text')
      .line('Mohamed Mostafa Mostafa')
      .line('Bachelor of Computer Engineering , NU(2021)')
      .line('+3 years of expeirnce as front end developer')
      .line('+13 projects done')
      .line('1 Research Publication')
      .end(true, function () {
        $('.profile-body_main-info_social-icons').css('visibility', 'visible');
        // $('#profile-body_main-info_svg').fadeOut();
        // setTimeout(() => {
        //   $('#profile-body_main-info_img').fadeIn();
        // }, 1000);
        $('#profile-body_main-info_img').addClass('profile-body_main-info_image-colored');

        setTimeout(() => {
          $('.profile-body_main-info').toggle('explode');
        }, 2000);
      });
  }
}, 10500);

window.onload = function () {
  if (windowsLoadedState === 1) {
    $('.boot-data').remove();
    $('#profile-body').css('visibility', 'visible');
  }
  console.log('loaded');
  windowsLoadedState = 2;
};
