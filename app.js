// Assignments 6

 const studentsData = [
    ['MD Shirajam Munir', 1, 10, 'Three', 'Male', 'Thakugaon', 1200],
    ['Roman', 2, 26, 'Four', 'Female', 'Dinajpur', 1600],
    ['Jillur vai', 3, 12, 'Five', 'Female', 'Dhaka', 2500],
    ['Sabbir mondol', 4, 13, 'Three', 'Female', 'Chattogram', 1400],
    ['Raju mia', 5, 20, 'Four', 'Female', 'Thakugaon', 1900],
    ['Montajul', 6, 22, 'Five', 'Male', 'Dhaka', 1300],
    ['Biplob ', 8, 20, 'Four', 'Male', 'Chattogram', 1500],
    ['Mukta Akter', 9, 23, 'Five', 'Female', 'Thakugaon', 1500],
    ['Ratul Bormon', 10, 26, 'Three', 'Female', 'Dhaka', 1600],
    ['Mahid ', 11, 20, 'Four', 'Male', 'Dinajpur', 1500],
    ['Shawn hasan', 12, 27, 'Five', 'Male', 'Thakugaon', 1500],
    ['Rabbi ', 13, 21, 'Five', 'Female', 'Sylhet', 2000],
    ['Nahid khan', 14, 17, 'Three', 'Male', 'Dhaka', 1600],
    ['Limon Khan', 15, 29, 'Four', 'Male', 'Chattogram', 1500],
    ['Akash Paul', 16, 21, 'Four', 'Male', 'Thakugaon', 1700],
    ['Redwan Khan', 17, 30, 'Five', 'Male', 'Dinajpur', 1500],
    ['Tania Akter', 18, 21, 'Three', 'Female', 'Dhaka', 1500],
    ['Nourin  Akter', 19, 28, 'Four', 'Female', 'Thakugaon', 1500],
    ['MD Zakariya ', 20, 10, 'Five', 'Male', 'Dhaka', 1800],
    ['Tania Tasmin', 21, 18, 'Five', 'Female', 'Dinajpur', 1500],
    ['Nafiul Islam', 22, 25, 'Three', 'Male', 'Chattogram', 1500],
    ['Riya Aktar ', 23, 30, 'Four', 'Female', 'Dhaka', 1500],
    ['Rony Babu', 24, 20, 'Five', 'Male', 'Dinajpur', 1500],
    ['Sohag Islam', 25, 14, 'Three', 'Male', 'Sylhet', 1500],
    ['Tusha Chawdhory', 26, 22, 'Four', 'Female', 'Thakugaon', 1500],
    ['Ripon Mohonto', 27, 19, 'Five', 'Male', 'Dinajpur', 1600],
    ['Israt Jahan', 28, 20, 'Three', 'Female', 'Dhaka', 1800],
    ['Fatema Akter', 29, 27, 'Four', 'Female', 'Chattogram', 1500],
    ['Jannat Faria', 30, 20, 'Five', 'Female', 'Sylhet', 1500]
];





//  Total Admnission fees 


// let total_add_fee = 0;

// studentsData.sort().map( ( data , i ) => {
//     total_add_fee += +data[6];
// });


// studentsData.sort().forEach( ( data , index ) => {
//     console.log(`
//         Serial ID       : ${index + 1}
//         Name            : ${data[0]}
//         Roll Number     : ${data[1]}
//         Age             : ${data[2]}
//         Class           : ${data[3]}
//         Gender          : ${data[4]}
//         Address         : ${data[5]}
//         Addmission Fee  : ${data[6]}
//     `);
// } );

// console.log(`
// ------------------------------------------------------------->
// Total Admission Fee     => ${total_add_fee}
// `);
 






// Find All Female Students







// let totalFStudent = 0 ;

// studentsData.sort().map( ( data , i ) => {
// });

// studentsData.sort().map( ( data , i ) => {
//     if(data[4] === 'Female'){
//         console.log(`
//         Serial ID       : ${i + 1}
//         Name            : ${data[0]}
//         Roll Number     : ${data[1]}
//         Age             : ${data[2]}
//         Class           : ${data[3]}
//         Gender          : ${data[4]}
//         Address         : ${data[5]}
//         Addmission Fee  : ${data[6]}
//     `);
//     totalFStudent++
//     }
// });

// console.log(`
// ------------------------------------------------------------->
// Female Students         : ${totalFStudent}

// `);
 





//   Find class wise student result








// let totalCls3Student = 0 ;

// studentsData.sort().map( ( data , i ) => {
// });

// studentsData.sort().map( ( data , i ) => {
//     if(data[3] === 'Three'){
//         console.log(`
//         Serial ID       : ${i + 1}
//         Name            : ${data[0]}
//         Roll Number     : ${data[1]}
//         Age             : ${data[2]}
//         Class           : ${data[3]}
//         Gender          : ${data[4]}
//         Address         : ${data[5]}
//         Addmission Fee  : ${data[6]}
//     `);
//     totalCls3Student++
//     }
// });

// let totalCls4Student = 0 ;

// studentsData.sort().map( ( data , i ) => {
// });

// studentsData.sort().map( ( data , i ) => {
//     if(data[3] === 'Four'){
//         console.log(`
//         Serial ID       : ${i + 1}
//         Name            : ${data[0]}
//         Roll Number     : ${data[1]}
//         Age             : ${data[2]}
//         Class           : ${data[3]}
//         Gender          : ${data[4]}
//         Address         : ${data[5]}
//         Addmission Fee  : ${data[6]}
//     `);
//     totalCls4Student++
//     }
// });


// let totalCls5Student = 0 ;

// studentsData.sort().map( ( data , i ) => {
// });

// studentsData.sort().map( ( data , i ) => {
//     if(data[3] === 'Five'){
//         console.log(`
//         Serial ID       : ${i + 1}
//         Name            : ${data[0]}
//         Roll Number     : ${data[1]}
//         Age             : ${data[2]}
//         Class           : ${data[3]}
//         Gender          : ${data[4]}
//         Address         : ${data[5]}
//         Addmission Fee  : ${data[6]}
//     `);
//     totalCls5Student++
//     }
// });

// console.log(`
// ------------------------------------------------------------->
// Class Three Students    : ${totalCls3Student}
// Class Four Students     : ${totalCls4Student}
// Class Five Students     : ${totalCls5Student}

// ----------------------------------------------
// Total                   : ${ totalCls3Student + totalCls4Student + totalCls5Student }

// `);
 





//  Location wise student result







 
// studentsData.sort().map( ( data , i ) => {
//     if( data[5] === 'Thakugaon' || data[5] === 'Dinajpur' || data[5] === 'Dhaka' || data[5] === 'Chattogram' || data[5] === 'Sylhet' ){
//         console.log(`
//         Serial ID       : ${i + 1}
//         Name            : ${data[0]}
//         Roll Number     : ${data[1]}
//         Age             : ${data[2]}
//         Class           : ${data[3]}
//         Gender          : ${data[4]}
//         Address         : ${data[5]}
//         Addmission Fee  : ${data[6]}
//     `);
//     }
// });








//  find student between 10 - 25 age








/**
 * 

studentsData.map( ( data, i ) => {
    
    if( data[2] >= 10 && data[2] <= 25 ){
        console.log(`
        Serial ID       : ${i + 1}
        Name            : ${data[0]}
        Roll Number     : ${data[1]}
        Age             : ${data[2]}
        Class           : ${data[3]}
        Gender          : ${data[4]}
        Address         : ${data[5]}
        Addmission Fee  : ${data[6]}
    `);
    }
} );
 */



