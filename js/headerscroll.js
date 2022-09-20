window.onscroll = scrollFunction;

scrollFunction();

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById('team-logo').style.maxHeight = '7vh';
    document.getElementById('team-logo').style.margin = '1vh 0 1vh 0';
    document.getElementById('team-name').style.fontSize = '1vw';
    document.getElementById('team-name').style.marginTop = '0px';
    document.getElementById('team-number').style.fontSize = '1vw';
  }
  else {
    document.getElementById('team-logo').style.maxHeight = '11vh';
    document.getElementById('team-logo').style.margin = '2vh 0 2vh 0';
    document.getElementById('team-name').style.fontSize = '2.5vw';
    document.getElementById('team-name').style.marginTop = '0px';
    document.getElementById('team-number').style.fontSize = '2vw';
  }
}
