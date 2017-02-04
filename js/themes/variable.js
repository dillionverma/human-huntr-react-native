
const color = require('color');

// theme background
const primary = color('#2ad110');
// header
const secondary = color('#2ad110');
const info = color('#5bc0de');
const success = color('#5cb85c');
const danger = color('#d9534f');
const warning = color('#f0ad4e');
const sidebar = color('#252932');
const dark = color('rgba(0,0,0,0.8)');
const light = color('rgba(255,255,255,0.8)');

var theme1 = "#2ad110";		//theme background
var header1 = "#2ad110";	//header

// var theme2 = "#E74C3C";
// var header2 ="#CB4335";

// var theme3 = "#5DADE2";
// var header3 = "#3498DB";

// var theme4 = "#EB984E";
// var header4 = "#E67E22";

// var theme5 = "#5D6D7E";
// var header5 = "#34495E";

module.exports = {
  brandPrimary: primary.hexString().toString(),
  brandSecondary: secondary.hexString().toString(),
  brandInfo: info.hexString().toString(),
  brandSuccess: success.hexString().toString(),
  brandDanger: danger.hexString().toString(),
  brandWarning: warning.hexString().toString(),
  brandSidebar: sidebar.hexString().toString(),
  // darker: darken,
  dark: dark.hexString().toString(),
  light: light.hexString().toString(),
};
