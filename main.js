//function for Interest
function forInterest() {
  const principal = document.getElementById('p').value;
  const Ratepercentage = document.getElementById('r').value;
  var time = document.getElementById('t').value;
  
  //convert percentage to decimal
  const Rateindecimal = Ratepercentage/100;

  //formula Interest = prt
  const interest = principal * Rateindecimal * time;
  document.getElementById('output').innerHTML = `${interest} Interest`;
}

//function for Principal
function forPrincipal () {
  const interestP = document.getElementById('i-p').value;
  const timeP = document.getElementById('t-p').value;
  var ratePP = document.getElementById('r-p').value;
  
  //converts percentage to decimal
  var ratePD = ratePP/100;
  
  //formula Principal= i/rt
  let rtimest = ratePD * timeP;
  let principalv = interestP/rtimest;
  document.getElementById('outputP').innerHTML = `${principalv} Principal Amount`;
}

//function for Rate
function forRate() {
  const interestR = document.getElementById('i-r').value;
  const timeR = document.getElementById('t-r').value;
  const principalR = document.getElementById('p-r').value;
  
  //formula for Rate r = i/pt
  const ptimest = principalR * timeR;
  var rateindecR = interestR/ptimest;
  
  //convert decimal to percentage
  const rateinpercent = rateindecR * 100;
  document.getElementById('outputR').innerHTML = ` ${rateindecR} or ${rateinpercent} %  `
}

//function for Time
function forTime() {
  const interestT = document.getElementById('i-t').value;
  var rateTinP = document.getElementById('r-t').value;
  const principalT = document.getElementById('p-t').value;
  
  //convert Rate % to decimal
  let rateTinD = rateTinP/100
  
  //formula for Time t = i/pr
  let PtimesR = principalT * rateTinD
  let timeT = interestT/PtimesR
  
  document.getElementById('outputT').innerHTML = `${timeT} year's`
}