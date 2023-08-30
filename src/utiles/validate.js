export const validate=(email,password,name)=>{

const isEmailVaild=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
const isPasswordVaild =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
const isNameValid =/^[A-Za-z][A-Za-z0-9_]{2,29}$/.test(name);

if(email==="" || password==="" || name==="") {
    return "All fields are mandatory"
}

if(!isEmailVaild){
    return "Invaild Email"
};

if(!isPasswordVaild){
    return "Invaild Password"
}
if(!isNameValid){
    return "Invaild Name"
}
return null;

}