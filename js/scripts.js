window.onscroll = scrollFunction;

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById('team-logo').style.maxHeight = '4vw';
    document.getElementById('team-logo').style.margin = '1vw 0vw 1vw 1vw';
    document.getElementById('team-name').style.fontSize = '2vw';
    document.getElementById('team-name').style.marginTop = '0px';
    document.getElementById('team-number').style.fontSize = '1vw';
    for (let logo of document.getElementsByClassName('social-logo')) {
        logo.style.width = '0vw';
    }
  }
  else {
    document.getElementById('team-logo').style.maxHeight = '8vw';
    document.getElementById('team-logo').style.margin = '2vw 0vw 2vw 0vw';
    document.getElementById('team-name').style.fontSize = '3vw';
    document.getElementById('team-name').style.marginTop = '20px';
    document.getElementById('team-number').style.fontSize = '2vw';
    for (let logo of document.getElementsByClassName('social-logo')) {
        logo.style.width = '1.5vw';
    }
  }
}