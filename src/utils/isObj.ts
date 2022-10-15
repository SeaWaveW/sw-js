const isObj = (value: any): boolean => {
    return Object.prototype.toString.call(value) === '[object Object]'
}
export default isObj