function validateForm() //calling "validateForm" function after user clicks on submit 
{
    var FirstName= document.forms["messageform"]["fname"].value; //assiging the value of  input text name "fname" to variable "FirstName" 
    var LastName= document.forms["messageform"]["lname"].value;  //assiging the value of input text  name "lname" to variable "LastName" 
    var DateofBirth= document.forms["messageform"]["dob"].value; //assiging the value of date selector name "dob" to variable "DateofBirth" 
    var gender= document.forms["messageform"]["gender"].value;   //assiging the value of radio button name "gender" to variable "gender" 
    var Email= document.forms["messageform"]["email"].value;     //assiging the value of email holder name "email" to variable "Email" 
    var Password= document.forms["messageform"]["password"].value;  //assiging the value of password holder name "password" to variable "Password" 
    if (FirstName==""|| LastName==""|| DateofBirth==""|| gender==""|| Email==""||Password=="") 
    {
        alert("Please fill all the fields before submitting.")     //if any of the fields are empty then the form displays this alert message
    }
    else
    {
        alert("Thank you for wanting to be a part of us.")         //if all the fields are filled and form is submitted it displays thank you alert message
    }
}