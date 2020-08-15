function displayClass(character){
    var characterClass= character.getAttribute("data-CharacterClass");
    alert("The " + characterClass + " is the primary " + character.innerHTML );
}