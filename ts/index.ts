enum work {
    developer,
    engineer,
    IT
}
function checkWork(type: work) {
    if (type === work.developer || type === work.engineer || type === work.IT) {
        return true
    } else {
        return false
    }
}
console.log(checkWork(work.developer));
console.log(checkWork(work.engineer));
console.log(checkWork(work.IT));