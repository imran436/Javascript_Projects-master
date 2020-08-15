function makeFullSentence(){
    var sentenceP1="I have ";
    var sentenceP2="used the ";
    var sentenceP3="concat method ";
    var sentenceP4="to build this ";
    var sentenceP5="sentence.";
    var fullSentence= sentenceP1.concat(sentenceP2,sentenceP3,sentenceP4,sentenceP5);
    document.getElementById("p_1").innerHTML = fullSentence;
}
function slice_method(){
    var sliceSent="this sentence is to be sliced";
    var x = 130.2070202;
    var slicedPart= sliceSent.slice(sliceSent.search("sentence"),13);
    document.getElementById("sliced").innerHTML= x.toPrecision(7).toString() + slicedPart.toUpperCase().valueOf() + x.toFixed(2).toString();
}
