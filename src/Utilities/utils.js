export function checkValidEmail (email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(email)
}

export const checkDisability = (email, password, confirmPassword=password) => {
    const isValidEmail = checkValidEmail(email);
    const isEmpty = !(password !== "" && email !== "");
    const arePasswordsSame = password === confirmPassword
    const isDisabled = !(isEmpty !== true && isValidEmail !== false && arePasswordsSame);
    return isDisabled;
}

