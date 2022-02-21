export function phoneMask(phone?: string): string {
    if (!phone) return '';
    
    if (phone.length <= 14) {
        phone = phone.replace(/\D/g, "");
     
        phone = phone.replace(/(\d{0})(\d)/, "$1($2");
        phone = phone.replace(/(\d{2})(\d)/, "$1) $2");
        phone = phone.replace(/(\d{4})(\d)/, "$1-$2");
    } else if (phone.length === 15) {
        phone = phone.replace(/\D/g, "");
     
        phone = phone.replace(/(\d{0})(\d)/, "$1($2");
        phone = phone.replace(/(\d{2})(\d)/, "$1) $2");
        phone = phone.replace(/(\d{5})(\d)/, "$1-$2");
    } else {
        phone = phone.slice(0, 15);
    }
    return phone;
}

export function cnpjMask(cnpj?: string): string {
    if (!cnpj) return '';

    cnpj = cnpj.replace(/\D/g, "");
 
    cnpj = cnpj.replace(/(\d{2})(\d)/, "$1.$2");
    cnpj = cnpj.replace(/(\d{3})(\d)/, "$1.$2");
    cnpj = cnpj.replace(/(\d{3})(\d)/, "$1/$2");
    cnpj = cnpj.replace(/(\d{4})(\d{1,2})$/, "$1-$2");

    return cnpj;
}