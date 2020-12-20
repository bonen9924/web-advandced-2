// EX 1

// const a = [];
// function findEven(number) {
//     for (i = 0; i < number;i++){
//         if (i % 2 == 0) {
//             a.push(i)

//         }
//     }
    
// }
// findEven(prompt("Nhap gia tri: "));
// console.log(a);


// EX 3

let text = document.getElementById("lmao")
function numberOneTriangle(){
    let line = ""
    for(let i = 1; i <= 5; i++){
        for(let j = 1; j<= i;j++){
            line += "*"
        }
        line += "\n"
    }
    return line
}
text.innerText = numberOneTriangle();


//EX 4
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();