function kilometerToMeter(inputKilometer) {
    //checking function parameter is number or not
    if (typeof inputKilometer != "number") {
        return "Please input a number.";
    }
    //checking function parameter is negative number or not
    else if (inputKilometer < 0) {
        return "The distance cannot be negative! Please insert a positive number.";
    }
    else {
        var oneKilometer = 1000; // 1 kilometer = 1000 meter 
        var convertedMeter = inputKilometer * oneKilometer;//convert kilometer to meter
        return convertedMeter;
    }
}

function budgetCalculator(amountOfWatch, amountOfPhone, amountOfLaptop) {
    //checking function parameter is number or not
    if (typeof amountOfWatch != "number") {
        return "Please input a number for amount of watch.";
    }
    if (typeof amountOfPhone != "number") {
        return "Please input a number for amount of Phone.";
    }
    if (typeof amountOfLaptop != "number") {
        return "Please input a number for amount of Laptop.";
    }

    //checking function parameter is integer number or not
    if (Number.isInteger(amountOfWatch) == false) {
        return "Please input a integer number for amount of Watch.";
    }
    if (Number.isInteger(amountOfPhone) == false) {
        return "Please input a integer number for amount of Phone.";
    }
    if (Number.isInteger(amountOfLaptop) == false) {
        return "Please input a integer number for amount of Laptop.";
    }

    //checking function parameter is negative number or not
    if (amountOfWatch < 0) {
        return "The amount of Watch cannot be negative! Please insert a positive number.";
    }
    if (amountOfPhone < 0) {
        return "The amount of Phone cannot be negative! Please insert a positive number.";
    }
    if (amountOfLaptop < 0) {
        return "The amount of Laptop cannot be negative! Please insert a positive number.";
    }
    else {
        var watchPrice = 50;
        var phonePrice = 100;
        var laptopPrice = 500;
        var totalBudget = (amountOfWatch * watchPrice) + (amountOfPhone * phonePrice) + (amountOfLaptop * laptopPrice);
        return totalBudget;
    }
}

function hotelCost(numberOfDaysStayAtHotel) {
    //checking function parameter is number or not
    if (typeof numberOfDaysStayAtHotel != "number") {
        return "Please input a number.";
    }
    //checking function parameter is integer number or not
    if (Number.isInteger(numberOfDaysStayAtHotel) == false) {
        return "Please input a integer number for number of days stay at Hotel.";
    }
    //checking function parameter is negative number or not
    if (numberOfDaysStayAtHotel < 0) {
        return "The days cannot be negative! Please insert a positive number.";
    }
    var dailyRoomRateForFirstTenDays = 100;
    var dailyRoomRateAfterTenDays = 80;
    var dailyRoomRateAfterTwentyDays = 50;
    //calculate maximum first 10 days hotel cost
    if (numberOfDaysStayAtHotel <= 10) {
        return numberOfDaysStayAtHotel * dailyRoomRateForFirstTenDays;
    }
    //calculate maximum first 20 days hotel cost
    else if (numberOfDaysStayAtHotel <= 20) {
        var hotelCostForFirstTenDays = (10 * dailyRoomRateForFirstTenDays);
        var restOfTheDaysAfterTenDays = numberOfDaysStayAtHotel - 10;
        var totalHotelCost = hotelCostForFirstTenDays + (restOfTheDaysAfterTenDays * dailyRoomRateAfterTenDays);
        return totalHotelCost;
    }
    //calculate total days hotel cost
    else {
        var hotelCostForFirstTenDays = (10 * dailyRoomRateForFirstTenDays);
        var hotelCostForNextTenDays = (10 * dailyRoomRateAfterTenDays);
        var restOfTheDaysAfterTwentyDays = numberOfDaysStayAtHotel - 20;
        var totalHotelCost = hotelCostForFirstTenDays + hotelCostForNextTenDays + (restOfTheDaysAfterTwentyDays * dailyRoomRateAfterTwentyDays);
        return totalHotelCost;
    }
}

function megaFriend(friendsNameList) {

    //check function parameter is array or not
    if (typeof friendsNameList != "object") {
        return "Please pass an array as input.";
    }
    //check length of array 
    if (!friendsNameList.length > 0) {
        return "No friends name found.Please add atleast one friend name.";
    }
    var megaFriendName = friendsNameList[0];
    //check first array element is null or not
    if (typeof megaFriendName == "undefined") {
        return "Please check all array elements. All elements should be a string.";
    }

    var megaFriendNameLength = friendsNameList[0].length;
    for (var i = 0; i < friendsNameList.length; i++) {
        //check all array element is string or not
        if (typeof friendsNameList[i] != "string") {
            return "Please check all array elements. All elements should be a string.";
        }
        //find mega friend
        if (megaFriendNameLength < friendsNameList[i].length) {
            megaFriendName = friendsNameList[i];
            megaFriendNameLength = friendsNameList[i].length;
        }
    }
    return megaFriendName;
}
var kiloMeterToMeter = kilometerToMeter(.1);
console.log(kiloMeterToMeter);
var budgetCalculation = budgetCalculator(1, 2, 2);
console.log(budgetCalculation);
var hotetCostCalculation = hotelCost(21);
console.log(hotetCostCalculation);
var friendsName = ["", "", "", "", ""];
var checkMegaFriend = megaFriend(friendsName);
console.log(checkMegaFriend);