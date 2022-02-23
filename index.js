const drivers=['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers= function(){
    return drivers.slice(2)
}

const selectingDrivers = [
        returnFirstTwoDrivers,
        returnLastTwoDrivers,
]

const createFareMultiplier = function(x){
    return function(){
        return x**2
    }
}

const fareDoubler = function(x){
    return x*2
}

const fareTripler = function(x){
    return x*3
}

const selectDifferentDrivers = (arrayofDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayofDrivers)
}