/* E X P O R T
* * * * * * */

// Clamp
// ==> Contain input between minimum and maximum value
export default function clamp(input, min = 0, max = 1) {
    const output = Math.min(max, Math.max(min, input));
    return output;
}