
export const checkValidData = (name, email,password) =>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    let isNameValid = true;
    if(name){
        isNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);
    }

    if(!isEmailValid) return "Email Id is not in valid format"
    if(!isPasswordValid) return "Password is not in valid format"
    if(!isNameValid) return "Name is not in valid format"

    return null;

}