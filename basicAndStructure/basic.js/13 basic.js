function areYouPlayBanjo(name) {
  if (name[0] === 'R' || name[0] === 'r') { // name[0].toLowerCase() === 'r';
    console.log(`${name} plays banjo`);
  } else {
    console.log(`${name} does not play banjo`);
  }
}
areYouPlayBanjo('Putler');
