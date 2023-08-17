"use strict";
var work;
(function (work) {
    work[work["developer"] = 0] = "developer";
    work[work["engineer"] = 1] = "engineer";
    work[work["IT"] = 2] = "IT";
})(work || (work = {}));
function checkWork(type) {
    if (type === work.developer || type === work.engineer || type === work.IT) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkWork(work.developer));
console.log(checkWork(work.engineer));
console.log(checkWork(work.IT));
//# sourceMappingURL=index.js.map