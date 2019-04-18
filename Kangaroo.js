function kangaroo(x1, v1, x2, v2) {
    let diff = Math.abs(x2 - x1);
    if (x1 == x2) {
        return "YES";
    }
    while (x1 != x2) {
        x1 += v1;
        x2 += v2;
        if (x1 == x2) {
            return "YES";
        }
        if ((Math.abs(x1 - x2)) >= diff) {
            return "NO";
        }
    }

}

console.log(kangaroo(0, 3, 4, 2)); //yes
console.log(kangaroo(0, 2, 5, 3)); //no
console.log(kangaroo(4523, 8092, 9419, 8076)); //yes
console.log(kangaroo(21, 6, 47, 3)); //no
console.log(kangaroo(43, 2, 70, 2)); //no


