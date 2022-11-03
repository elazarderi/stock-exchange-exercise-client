export const isEmptyObject = (obj: Object): boolean => {
    return obj
        && Object.keys(obj).length === 0
        && Object.getPrototypeOf(obj) === Object.prototype;
};

export const removeItem = (arr: any[], value: any): any[] => {
    return arr.filter(e => e !== value);
} 