/* E X P O R T
* * * * * * */

// Deep clone
// ==> Includes polyfill
export default function deepClone(value) {
    if (typeof structuredClone === 'function')
        return structuredClone(value);
    return JSON.parse(JSON.stringify(value));
}