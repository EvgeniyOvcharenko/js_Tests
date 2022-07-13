function rentalCarCost(days){
  let price = days*40;
  if(days >= 3){
    price -= 20;
  }
  if(days >= 7){
    price -= 30;
  }
  console.log(`Price: ${price}$`);
}
rentalCarCost(10);