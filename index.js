function scuberGreetingForFeet(distanceInFeet) {
  let result;
  
  if (distanceInFeet <= 400) {
    result = 'This one is on me!';
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    result = 'That will be twenty bucks.';
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    result = 'I will gladly take your thirty bucks.';
  } else {
    result = 'No can do.';
  }

  return result;
}

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
  
}