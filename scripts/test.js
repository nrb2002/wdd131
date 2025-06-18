let esomeprazole = {'id':'mnb78932','amount':23145,'amountType':'ct','expDate':'10/01/2021'}

let dose = esomeprazole.amount;

console.log(dose);

dose = esomeprazole['amount'];
console.log(dose);

const countries = ["Canada", "Chili", "Colombia", "Croatia", "Costa Rica"];
const countriesLong = countries.filter((country) => country.length > 7);
console.log(countriesLong);

const points = [100, 88, 94, 78, 84, 69];

function convertPointsToStatus(pointTotal) {
  let status = 'Not Complete';
  if (pointTotal >= 93) {
    status = "Excellent";
  } else if (pointTotal >= 70) {
    status = "Complete";
  }
  return status;
}
const statusReport = points.filter(convertPointsToStatus);

console.log(statusReport);
