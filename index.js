
const Form = document.getElementById("form");
const Category = document.getElementById("category");
const Company = document.getElementById("company");
const addtitle = document.getElementById("title");
const Discription = document.getElementById("discription");
const Location1 = document.getElementById("location");
const City = document.getElementById("city");
const Neighbourhood = document.getElementById("neighbourhood");
const Price = document.getElementById("price");
const Name = document.getElementById("name");
const Phonenumber = document.getElementById("phonenumber");
const Carname= document.getElementById("carname");
const Newpagebox=document.getElementById("newpagebox");
const Newpage=document.getElementById("newpage");

const showpage = () => {
    if (validinputs()) { // Ensure validation passes first
        Newpage.innerText = "Registration Successful!";
        Newpagebox.style.display = "block"; 
        Newpagebox.scrollIntoView({ behavior: "smooth" });
    }
};


Form.addEventListener("submit", e => {
    e.preventDefault();
    if (validinputs()) { // Ensure all inputs are valid before showing the success message
        showpage();
    }
});

const setError = (element, message) => {
    const errorDisplay = element.parentElement.querySelector(".error");
    errorDisplay.innerText = message;
    element.parentElement.classList.add("error");
    element.parentElement.classList.remove("success");
};
const setSuccess = element => {
    const errorDisplay = element.parentElement.querySelector(".error");
    errorDisplay.innerText = "";
    element.parentElement.classList.add("success");
    element.parentElement.classList.remove("error");
};
const validinputs=()=>{
    let isvalid=true;
    if(Category.value===""){
        setError(Category,"this field is required")
        isvalid=false;
    }
    else{
    setSuccess(Category)
    }
    if(Company.value===""){
        setError(Company,"this field is required")
        isvalid=false;
    }
    else{
    setSuccess(Company)
    }
    if(Carname.value===""){
        setError(Carname,"this field is required")
        isvalid=false;
    }
    else{
    setSuccess(Carname)
    }
    if(addtitle.value===""){
        setError(addtitle,"this field is required")
        isvalid=false;
    }
    else{
    setSuccess(addtitle)
    }
    if(Discription.value===""){
        setError(Discription,"this field is required")
        isvalid=false;
    }
    else{
    setSuccess(Discription)
    }
    if(Location1.value===""){
        setError(Location1,"this field is required")
        isvalid=false;
    }
    else{
    setSuccess(Location1)
    }
    if(City.value===""){
        setError(City,"this field is required")
        isvalid=false;
    }
    else{
    setSuccess(City)
    }
    if(Neighbourhood.value===""){
        setError(Neighbourhood,"this field is required")
        isvalid=false;
    }
    else{
    setSuccess(Neighbourhood)
    }
    if(Price.value===""){
        setError(Price,"this field is required")
        isvalid=false;
    }
    else{
    setSuccess(Price)
    }
    if(Name.value===""){
        setError(Name,"this field is required")
        isvalid=false;
    }
    else{
    setSuccess(Name)
    }
    if (Phonenumber.value === "") {
        setError(Phonenumber, "This field is required");
        isvalid = false;
    } else if (isNaN(Phonenumber.value) || Phonenumber.value.length < 10) {
        setError(Phonenumber, "Enter a valid phone number");
        isvalid = false;
    } else {
        setSuccess(Phonenumber);
    }    
    return isvalid;
}