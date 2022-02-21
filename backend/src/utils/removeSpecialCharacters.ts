export function removeSpecialCharacters(unformattedStr: string): string {
    return unformattedStr.replace(/[^\d]+/g, '');
}