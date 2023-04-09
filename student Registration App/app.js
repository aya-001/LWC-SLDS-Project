
const btn = document.querySelector("button");
btn.addEventListener("click", (ev) => {
    ev.preventDefault(); //prevent auto page reflesh
    const btn = ev.target;
    btn.innerText = "Clicked";//as soon as clicked button, text changes

    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const cls = document.querySelector("#class").value;
    console.log(name, age, cls); //print in console

    //can see output under the inut areas
    const studentList = document.querySelector(".student-list");
    studentList.innerHTML += `
    <div class="student-list-item">
        <div class="student-name">${name}</div>
        <div class"student-datail">
            <div>Age : ${age}</div>
            <div>Class : ${cls}</div>
        </div>
    </div>
    `; 

    //make text box blank
    document.querySelectorAll("input").forEach(element => {
        element.value = "";  //as soon as input finished, all texts get blank
    });
});










