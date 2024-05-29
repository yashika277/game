const inputvalue = document.getElementById("input-box");
const listcontainer = document.getElementById("list-item");

function add() {
    if (inputvalue.value == "") {
        alert("please enter");
    } else {
        const oldData = JSON.parse(localStorage.getItem("userdata"));
        if (oldData && oldData.includes(inputvalue.value)) {
            alert("Value already exists");
        } else {
            if (oldData) {
                localStorage.setItem("userdata", JSON.stringify([...oldData, inputvalue.value]));
            } else {
                localStorage.setItem("userdata", JSON.stringify([inputvalue.value]));
            }
        }
    }
    inputvalue.value = "";
showdata();
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
       
    } else if (e.target.tagName === "SPAN") {
        const li = e.target.parentElement;
        const value = li.textContent.slice(0, -1); // Remove the 'X' character
        li.remove();
        let data = JSON.parse(localStorage.getItem("userdata"));
        data = data.filter(item => item !== value);
        localStorage.setItem("userdata", JSON.stringify(data));
    
    }
});
function showdata() {
    listcontainer.innerHTML = "";
    let data = localStorage.getItem("userdata");
    console.log(data);
    if (data) {
        const parsedata = JSON.parse(data);
        parsedata.map((item,index)=>{
            const li = document.createElement("li");
                li.innerHTML = item;
                listcontainer.appendChild(li);
                const span = document.createElement("span");
                span.innerHTML = "&#x2716";
                li.appendChild(span);
        })
    }
}

showdata();
