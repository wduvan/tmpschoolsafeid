function testanticip() {
    //var dateString = '3/13/18', dateParts = dateString.split('/'), date; var day = dateParts[1], mon = (parseInt(dateParts[0], 10) - 1), year = dateParts[2]; date = new Date("20" + year, mon, day); if (dateParts[2].length <= 2) { var now = new Date(); if (date > now) { date = new Date(parseInt("19" + year), mon, day); } else { date = new Date(parseInt("20" + year), mon, day); } } return (date.getTime() / 1000);
    console.log("Date:");
    console.log(process());
}

function process() {
    var valEvaluate = data['EMAIL_CONSENT'].trim(), dateReturn = false;
    if (!(valEvaluate === '' || valEvaluate === '0') && (valEvaluate === 'Y')) {
        dateReturn = true;
    }
    return dateReturn;
}

// function process() {
//     var data = { 'B_DOB': '11/11/20' };
//     var dateConvert = data['B_DOB'], dateReturn = '';
//     var dateParts = dateConvert.split('/');
//     if (!(dateConvert === '' || dateConvert === '0' || (dateParts).length < 3)) {
//         year = dateParts[2];
//         date = new Date('20' + year, dateParts[0], dateParts[1]);
//         if (year.length <= 2) {
//             var now = new Date();
//             if (date > now) {
//                 dateReturn = '\"' + '19' + year + '\"';
//             } else {
//                 dateReturn = '\"' + '20' + year + '\"';
//             }
//         } else {
//             dateReturn = '\"' + year + '\"';
//         }
//     }
//     return dateReturn;
// }

// function process() { 
//     var data = { 'CONTRACT_DATE': '1/8/15' }; 
//     var dateString = data.CONTRACT_DATE, dateParts = dateString.split('/'), date; 
//     var day = dateParts[1], mon = (parseInt(dateParts[0], 10) - 1), year = dateParts[2]; 
//     date = new Date('20' + year, mon, day); 
//     if (dateParts[2].length <= 2) { 
//         var now = new Date(); if (date > now) { 
//             date = new Date(parseInt('19' + year), mon, day); 
//         } else { 
//             date = new Date(parseInt('20' + year), mon, day); 
//         } 
//     } 
//     return (date.getTime() / 1000); 
// }

// function process() {
//     var data = { 'CONTRACT_DATE': '1/8/19' };
//     var dateParts = data.CONTRACT_DATE.split('/');
//     year = dateParts[2];
//     date = new Date('20' + year, dateParts[0], dateParts[1]);
//     if (year.length <= 2) {
//         var now = new Date();
//         if (date > now) {
//             return '\"'+'19' + year+'\"';
//         } else {
//             return '\"'+ 20 + year+'\"';
//         }
//     } else {
//         return year;
//     }
// }

// function process() {
//     var data = { 'CONTRACT_DATE': '011' };
//     var validation = data['CONTRACT_DATE'], returnVal = "";
//     if (!(validation === '0' || validation === '')) {
//         returnVal = validation;
//     }
//     return returnVal;
// }

// function process() {
//     var data = { 'B_DOB': '11/11' };
//     var dateConvert = data['B_DOB'], dateReturn = '';
//     if (!(dateConvert === '' || dateConvert === '0' || (dateConvert.split('/').length < 3)) ) {
//         dateReturn = '\"' + dateConvert.split('/')[1] + '\"'
//     } 
//     return dateReturn;
// }

function writeconsole(data) {
    var dia = data.BIRTH_DATE.split('/')[1];
    return dia;
}
