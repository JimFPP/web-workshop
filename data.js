var students = [
    {id:1, name: "John", score: 90 }, 
    {id:2, name: "Larry", score: 60 }, 
    {id:3, name: "Joseph", score: 50 },
    {id:4, name: "John", score: 90 }, 
];

//document.writeln(students.length);
// document.write("<pre>");
// document.write(JSON.stringify(students, undefined, 2));
// document.write("</pre>");

// var names = [];

// students.forEach(student => {
//     names.push(student.name);
// });

// document.writeln(names);


function* Datos(){

    yield* students;
 
}

d = Datos()
scores = []

function studentsInfo(){

    record = d.next()
    
    if (!record.done){
    scores.push(record.value.score)

    var tbl = document.getElementById('body') // table reference
    row = tbl.insertRow(-1) // append table row

    if(record.value.score < 60){
        
    row.classList.add('failed')

    }
    else
    {
        row.classList.add('approved');
    }

    console.log(record.value.score)

    T_id = row.insertCell()
    T_name = row.insertCell()
    T_score = row.insertCell()
   
    T_id.innerText = record.value.id
    T_name.innerText = (record.value.name)
    T_score.innerText = (record.value.score)

    // Div_average.innerText = 'Average: '
    Avg_badge.innerText = `Average: ${average()}`

    }
    else
    {
        load.disabled = true
    }

}

function average(){
    var avg = 0;

    for (i=0 ;i < scores.length ;i++)
    {

    avg = avg + scores[i]
    
    }

    avg = avg / scores.length
    
    // Avg.innerText = `Average: ${avg}`
    return avg.toFixed(2)
}


function loadData(){

    var i = 0;
    let dataList = document.getElementById("dataList");
    
    while (i < students.length)
    {
        var listItem = document.createElement("li");
        
        console.log(students[i]);
        listItem.innerText = students[i].name;

        dataList.appendChild(listItem);
        i = i + 1; 
    }
}


function addStudent(){


    // if (name.value != "" && score.value != "")
    // {
    var S_name = names.value
    var S_score = score.value
    console.log(S_score)

    students.push({id:(students.length + 1), name: S_name, score: parseInt(S_score) })


    names.value = "";
    score.value = "";

    load.disabled = false
    // }

}