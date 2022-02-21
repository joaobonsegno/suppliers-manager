import { removeSpecialCharacters } from "./removeSpecialCharacters";

export function validateEmail(email: string): boolean {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

export function validateCnpj(cnpj: string): boolean {
    cnpj = removeSpecialCharacters(cnpj);

    if (cnpj === '') return false;

    if (cnpj.length !== 14)
        return false;

    if (cnpj === "00000000000000" ||
        cnpj === "11111111111111" ||
        cnpj === "22222222222222" ||
        cnpj === "33333333333333" ||
        cnpj === "44444444444444" ||
        cnpj === "55555555555555" ||
        cnpj === "66666666666666" ||
        cnpj === "77777777777777" ||
        cnpj === "88888888888888" ||
        cnpj === "99999999999999")
        return false;

    let strLength = cnpj.length - 2
    let numbers = cnpj.substring(0, strLength);
    let digits = cnpj.substring(strLength);
    let sum = 0;
    let position = strLength - 7;

    for (let i = strLength; i >= 1; i--) {
        sum += parseInt(numbers.charAt(strLength - i)) * position--;
        if (position < 2)
            position = 9;
    }

    let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(digits.charAt(0)))
        return false;

    strLength = strLength + 1;
    numbers = cnpj.substring(0, strLength);
    sum = 0;
    position = strLength - 7;
    for (let i = strLength; i >= 1; i--) {
        sum += parseInt(numbers.charAt(strLength - i)) * position--;
        if (position < 2)
            position = 9;
    }

    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(digits.charAt(1)))
        return false;

    return true;
}

export function validatePhone(phone: string): boolean {
    phone = removeSpecialCharacters(phone);

    if (phone.length === 10 || phone.length === 11) 
        return true;

    return false;
}