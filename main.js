// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function ageToAbilities(age) {
        if(age < 16) 
        return "You can't drive."
        if(age >= 16 && age <= 17) 
        return "You can drive but not vote."
        if(age >= 18 && age <= 24)
        return "You can vote but not rent a car."
        if(age >= 25)
        return "You can do pretty much anything."

}

function oddIndices(arr) {
    newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function numOddValues(array){
    var oddCount= 0;
    for(i = 0; i < array.length; i++){
        if(array[i] % 2 === 1){
            oddCount +=1;
        }
    }
    return oddCount;
}


function averageStringLength(arr){
    let num = 0;
    if (arr.length !== 0){
        for (const word of arr){
            for (const letter of word){
                num++
            }
        } num = num / arr.length
    }
    return num
}

function firstPunctuationIndex(str) {
    for(i = 0; i < str.length; i++) {
        if(str[i] === "!" || str[i] === "?" || str[i] === ".")
        return str.indexOf(str[i])
        
    }
    return -1
}

function getPlace(highScores,score) {
    let temp = highScores.concat(score)
    temp
    temp.sort(function(highScores,score) {
        return score - highScores;
    });
    scoreindex = temp.indexOf(score)
    scoreplace = scoreindex+1
    
    function ordinal(scoreplace) {
        var s = ["th place", "st place", "nd place", "rd place"];
        var v = scoreplace%100;
        return scoreplace + (s[(v-20)%10] || s[v] || s[0]);
      }
    return ordinal(scoreplace)      

    }
    

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace
};
