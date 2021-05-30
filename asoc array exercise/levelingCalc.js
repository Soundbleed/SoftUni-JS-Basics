// var prices = [];
// prices.push(
//     { start: 1, end: 2, q: 0.20 },
//     { start: 2, end: 3, q: 0.35 },
//     { start: 3, end: 4, q: 0.45 },
//     { start: 4, end: 5, q: 0.65 },
//     { start: 5, end: 6, q: 1.0 },
//     { start: 6, end: 7, q: 1.20 },
//     { start: 7, end: 8, q: 1.50 },
//     { start: 8, end: 9, q: 1.70 },
//     { start: 9, end: 10, q: 2.00 },
//     { start: 10, end: 11, q: 2.30 },
//     { start: 11, end: 12, q: 2.50 },
//     { start: 12, end: 13, q: 2.80 },
//     { start: 13, end: 14, q: 3.00 },
//     { start: 14, end: 15, q: 3.30 },
//     { start: 15, end: 16, q: 3.60 },
//     { start: 16, end: 17, q: 3.90 },
//     { start: 17, end: 18, q: 4.20 },
//     { start: 18, end: 19, q: 4.40 },
//     { start: 19, end: 20, q: 4.60 },
//     { start: 20, end: 21, q: 4.80 },
//     { start: 21, end: 22, q: 5.00 },
//     { start: 22, end: 23, q: 5.20 },
//     { start: 23, end: 24, q: 5.40 },
//     { start: 24, end: 25, q: 5.60 },
//     { start: 25, end: 26, q: 5.80 },
//     { start: 26, end: 27, q: 6.0 },
//     { start: 27, end: 28, q: 6.20 },
//     { start: 28, end: 29, q: 6.40 },
//     { start: 29, end: 30, q: 6.60 },
//     { start: 30, end: 31, q: 6.80 },
//     { start: 31, end: 32, q: 7.00 },
//     { start: 32, end: 33, q: 7.20 },
//     { start: 33, end: 34, q: 7.40 },
//     { start: 34, end: 35, q: 7.80 },
//     { start: 35, end: 36, q: 8.20 },
//     { start: 36, end: 37, q: 8.60 },
//     { start: 37, end: 38, q: 9.00 },
//     { start: 38, end: 39, q: 9.40 },
//     { start: 39, end: 40, q: 9.80 },
//     { start: 40, end: 41, q: 10.20 },
//     { start: 41, end: 42, q: 10.60 },
//     { start: 42, end: 43, q: 11.00 },
//     { start: 43, end: 44, q: 11.40 },
//     { start: 44, end: 45, q: 11.80 },
//     { start: 45, end: 46, q: 12.20 },
//     { start: 46, end: 47, q: 12.60 },
//     { start: 47, end: 48, q: 13.00 },
//     { start: 48, end: 49, q: 13.40 },
//     { start: 49, end: 50, q: 13.80 },
//     { start: 50, end: 51, q: 14.20 },
//     { start: 51, end: 52, q: 14.60 },
//     { start: 52, end: 53, q: 15.00 },
//     { start: 53, end: 54, q: 15.50 },
//     { start: 54, end: 55, q: 16.00 },
//     { start: 55, end: 56, q: 16.50 },
//     { start: 56, end: 57, q: 17.00 },
//     { start: 57, end: 58, q: 17.50 },
//     { start: 58, end: 59, q: 18.00 },
//     { start: 59, end: 60, q: 19.00 },
// );

// var intervalDifference = b - a;
// var discountStartLevel = 15;
// var stopsNeeded = 5;
// var hasDiscount = false;
// var price = 0;
// var begin = false;



// for (var i = 0; i < prices.length; i++) {
//     var start = prices[i].start;
//     var end = prices[i].end;
//     var value = prices[i].q;
//     var amount = 0;

//     if (a >= start &&
//         a < end &&
//         begin == false) {
//         begin = true;

//         if (b < end) {
//             amount = b - a;
//         } else {
//             amount = end - a;
//         }

//     }
//     if (begin) {

//         if (amount == 0) {
//             if (end > b) {
//                 amount = b - start;
//             } else {
//                 amount = end - start;
//             }
//         }
//         if (intervalDifference > stopsNeeded && end > 35) {
//             value -= value * 0.4;
//             price += value * amount;
//         } else {
//             price += value * amount;
//         }
//     }

//     if (b >= start &&
//         b <= end) {
//         break;
//     }

// }

// return price;


var prices = [];
prices.push(
    { start: 1, end: 2, q: 0.20 },
    { start: 2, end: 3, q: 0.35 },
    { start: 3, end: 4, q: 0.45 },
    { start: 4, end: 5, q: 0.65 },
    { start: 5, end: 6, q: 1.0 },
    { start: 6, end: 7, q: 1.20 },
    { start: 7, end: 8, q: 1.50 },
    { start: 8, end: 9, q: 1.70 },
    { start: 9, end: 10, q: 2.00 },
    { start: 10, end: 11, q: 2.30 },
    { start: 11, end: 12, q: 2.50 },
    { start: 12, end: 13, q: 2.80 },
    { start: 13, end: 14, q: 3.00 },
    { start: 14, end: 15, q: 3.30 },
    { start: 15, end: 16, q: 3.60 },
    { start: 16, end: 17, q: 3.90 },
    { start: 17, end: 18, q: 4.20 },
    { start: 18, end: 19, q: 4.40 },
    { start: 19, end: 20, q: 4.60 },
    { start: 20, end: 21, q: 4.80 },
    { start: 21, end: 22, q: 5.00 },
    { start: 22, end: 23, q: 5.20 },
    { start: 23, end: 24, q: 5.40 },
    { start: 24, end: 25, q: 5.60 },
    { start: 25, end: 26, q: 5.80 },
    { start: 26, end: 27, q: 6.0 },
    { start: 27, end: 28, q: 6.20 },
    { start: 28, end: 29, q: 6.40 },
    { start: 29, end: 30, q: 6.60 },
    { start: 30, end: 31, q: 6.80 },
    { start: 31, end: 32, q: 7.00 },
    { start: 32, end: 33, q: 7.20 },
    { start: 33, end: 34, q: 7.40 },
    { start: 34, end: 35, q: 7.80 },
    { start: 35, end: 36, q: 8.20 },
    { start: 36, end: 37, q: 8.60 },
    { start: 37, end: 38, q: 9.00 },
    { start: 38, end: 39, q: 9.40 },
    { start: 39, end: 40, q: 9.80 },
    { start: 40, end: 41, q: 10.20 },
    { start: 41, end: 42, q: 10.60 },
    { start: 42, end: 43, q: 11.00 },
    { start: 43, end: 44, q: 11.40 },
    { start: 44, end: 45, q: 11.80 },
    { start: 45, end: 46, q: 12.20 },
    { start: 46, end: 47, q: 12.60 },
    { start: 47, end: 48, q: 13.00 },
    { start: 48, end: 49, q: 13.40 },
    { start: 49, end: 50, q: 13.80 },
    { start: 50, end: 51, q: 14.20 },
    { start: 51, end: 52, q: 14.60 },
    { start: 52, end: 53, q: 15.00 },
    { start: 53, end: 54, q: 15.50 },
    { start: 54, end: 55, q: 16.00 },
    { start: 55, end: 56, q: 16.50 },
    { start: 56, end: 57, q: 17.00 },
    { start: 57, end: 58, q: 17.50 },
    { start: 58, end: 59, q: 18.00 },
    { start: 59, end: 60, q: 19.00 },
);
var price = 0;
var begin = false;



for (var i = 0; i < prices.length; i++) {
    var start = prices[i].start;
    var end = prices[i].end;
    var value = prices[i].q;
    var amount = 0;

    if (a >= start &&
        a < end &&
        begin == false) {
        begin = true;

        if (b < end) {
            amount = b - a;
        } else {
            amount = end - a;
        }

    }
    if (begin) {

        if (amount == 0) {
            if (end > b) {
                amount = b - start;
            } else {
                amount = end - start;
            }
        }
            price += value * amount;
    }

    if (b >= start &&
        b <= end) {
        break;
    }

}

return price;