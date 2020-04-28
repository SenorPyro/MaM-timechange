// ==UserScript==
// @name				MaM Clock changer
// @namespace			https://nowhere.com
// @version				1.0
// @description		Changes site clock from UTC to Nepal time
// @author				pyrokiller
// @match				https://www.myanonamouse.net/*
// @match				http://www.myanonamouse.net/*
// @icon				https://www.myanonamouse.net/favicon.ico
// ==/UserScript==

window.addEventListener('load', embedFunction);

function dT() {
  var a = new Date();
  a.setSeconds((new Date).getSeconds() - timeOffset + 4 * 3600);
  $.each($('.tP'), function (b, c) {
    if ($(this).attr('data-dtype') == '1') {
      $(this).html(a.toUTCString().replace('GMT', ''))
    } else {
      $(this).html(a.toISOString().replace('T', ' ').substring(0, 19))
    }
  })
}

function embedFunction() {
document.body.appendChild(document.createElement('script'))
.innerHTML=dT.toString().replace(/([\s\S]*?return;){2}([\s\S]*)}/,'$2');
}
