/* E X P O R T
* * * * * * */

// Wait
// ==> Wait for set amount of time
export default function wait(duration = 1000) {
    return new Promise((resolve) => setTimeout(resolve, duration));
}