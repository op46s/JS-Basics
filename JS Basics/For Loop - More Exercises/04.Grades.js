function grades (input) {

    let studentsCount = Number(input[0]);

    let topStudents = 0;
    let between45 = 0;
    let between34 = 0;
    let fail = 0;
    
    let totalAverage = 0;

    for (i = 1; i <=studentsCount; i++) {
        let grades = Number(input[i])
        totalAverage += grades;
        
        if (grades < 3) {
            fail++;
        } else if (grades >= 3 && grades < 4) {
            between34++;
        } else if (grades >= 4 && grades < 5){
            between45++;
        } else {
            topStudents++;
        }
    }
        console.log(`Top students: ${(topStudents / studentsCount * 100).toFixed(2)}%`);
        console.log(`Between 4.00 and 4.99: ${(between45 / studentsCount * 100).toFixed(2)}%`);
        console.log(`Between 3.00 and 3.99: ${(between34 / studentsCount * 100).toFixed(2)}%`);
        console.log(`Fail: ${(fail / studentsCount * 100).toFixed(2)}%`);
        console.log(`Average: ${(totalAverage / studentsCount).toFixed(2)}`);
}
grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
//grades(["6", "2", "3", "4", "5", "6", "2.2"]);