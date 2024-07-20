var sname = document.getElementById('name');
var fname = document.getElementById('fname');
var position = document.getElementById('jposition');
var file = document.getElementById('file')
var exp = document.getElementById('exp')

function finish() {

    var genderRadios = document.getElementsByName('gender');
    var selectedGender;

    for (var i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            selectedGender = genderRadios[i].value;
            break;
        }
    }
    // console.log(sname.value);
    // console.log(fname.value);
    // console.log(position.value);
    // console.log(exp.value, 'Year experience ');
    // console.log(selectedGender, 'Gender');
    // console.log(file.value);
    let arr = [sname.value, fname.value, position.value, exp.value, selectedGender, file.value]
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '') {
            console.log('error')
            break
        }
    }


    console.log('hello');
}
