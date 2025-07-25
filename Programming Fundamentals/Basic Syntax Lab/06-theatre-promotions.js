function theatrePromotions(arg1, arg2) {
  let day = arg1;
  let age = Number(arg2);
  let ticketPrice = 0;

 if (age >=0 && age <= 18) {
   switch (day) {
     case 'Weekday':
       ticketPrice = 12;
       break;
     case 'Weekend':
       ticketPrice = 15;
       break;
     case 'Holiday':
       ticketPrice = 5;
       break;
     default:
       console.log(`Error!`)
   }
 } else if (age > 18 && age <= 64) {
   switch (day) {
     case 'Weekday':
       ticketPrice = 18;
       break;
     case 'Weekend':
       ticketPrice = 20;
       break;
     case 'Holiday':
       ticketPrice = 12;
       break;
     default:
       console.log(`Error!`)
   }
 } else if (age > 63 && age <= 122) {
   switch (day) {
     case 'Weekday':
       ticketPrice = 12;
       break;
     case 'Weekend':
       ticketPrice = 15;
       break;
     case 'Holiday':
       ticketPrice = 10;
       break;
     default:
       console.log(`Error!`)
   }
 } else {
   console.log(`Error!`)
   return;
 }

  console.log(`${ticketPrice}$`)
}

theatrePromotions('Weekday', 42);
theatrePromotions('Holiday', -12);
theatrePromotions('Holiday', 15);
