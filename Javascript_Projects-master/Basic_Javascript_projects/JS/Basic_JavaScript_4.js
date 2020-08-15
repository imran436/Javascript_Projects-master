function myDictionary(){
    var license = {
        name:"Ryhan",
        age: 21,
        weight: "150 lbs",
        hairColor: "black",
        eyeColor: "brown"
    };
    delete license.age;
    document.getElementById("Dictionary").innerHTML= license.age;
}