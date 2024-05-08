//QS => We are given array of marks of students. Filter out of the marks of Students the scored 90+;

let marks = [70, 79, 80, 99, 67, 90, 87, 95, 45, 75];

let newArray = marks.filter((val) => {
    return val > 90;
});

console.log(newArray);
