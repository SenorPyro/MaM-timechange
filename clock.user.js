// ==UserScript==
// @name				MaM Clock changer
// @namespace			https://nowhere.com
// @version				1.03
// @description		Changes site clock from UTC to whatever you like
// @author				pyrokiller
// @match				https://www.myanonamouse.net/*
// @match				http://www.myanonamouse.net/*
// @icon				https://www.myanonamouse.net/favicon.ico
// ==/UserScript==

window.addEventListener('load', embedFunction);

function dT() {
  // Change timeZoneOffset to suit your timezone
  var timeZoneOffset = 2;
  var a = new Date();
  a.setSeconds((new Date).getSeconds() - timeOffset + timeZoneOffset * 3600);
  $.each($('.tP'), function (b, c) {
    if ($(this).attr('data-dtype') == '1') {
      $(this).html(a.toUTCString().replace('GMT', ''))
    } else {
      $(this).html(a.toISOString().replace('T', ' ').substring(0, 19))
    }
  })
}

function embedFunction() {
  document.body.appendChild(document.createElement('script')).innerHTML=dT.toString();
}
