//  Eligibilty Cecking
var age = 14;
var gender = "female"
var guardian = "yes"

if ( age >= 25){
    document.write("Congratulations! you are eligible for traveling without any restriction, it doesn't metter you are a man or woman.");

}else if ( age>=20 && gender == "male" ){
    document.write("You are eligible to travel for being a 20 years old man or more than!");

}else if ( age>=20 && guardian == "yes" && gender == "female"){
    document.write("Yes, you can travel with a guardian for your safety!");

}else if ( age>=15 && guardian=="yes" && gender=="male"){
    document.write("You also can travel with a guardian for being a teen!");

}else if ( age>=15 && gender=="female"){
    document.write("You also can travel with a guardian for being a teen girl!");


}else{
    document.write("Ops! you aren't eligible for traveling right now, because till now you are a kid. Please try after a few days! <br> <br>");
};