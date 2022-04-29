const ftoc = function(fTemp) {
  result = (fTemp -32) * (5 / 9);
  cTemp =Number(result.toFixed(1));
  return cTemp;
};

const ctof = function(cTemp) {
  result = cTemp * (9 / 5) + 32;
  fTemp = Number(result.toFixed(1));
  return fTemp;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
