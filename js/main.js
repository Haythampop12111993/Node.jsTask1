let allFrom = document.querySelector("#fromId");
let myShowDate = document.querySelector("#showDate");
let allUsersDate = JSON.parse(localStorage.getItem("allUsers")) || [];
let submitBTN = document.querySelector("#subBtn");
displayDate();
allFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  let myUserDate = {
    id: Date.now(),
    name: allFrom.elements.UserName.value,
    age: allFrom.elements.UserAge.value,
    status: allFrom.elements.UserStatus.value,
  };
  allUsersDate.push(myUserDate);
  localStorage.setItem("allUsers", JSON.stringify(allUsersDate));
  displayDate();
  allFrom.reset();
});
function createEle(parent, child, text, classname) {
  let ele = document.createElement(child);
  if (text) ele.textContent = text;
  if (classname) ele.classList = classname;
  parent.appendChild(ele);
  return ele;
}
function displayDate() {
  myShowDate.textContent = "";
  allUsersDate.forEach((ele, index) => {
    let tr = createEle(myShowDate, "tr", null, null);
    createEle(tr, "td", index + 1, null);
    createEle(tr, "td", ele.id, null);
    createEle(tr, "td", ele.name, null);
    createEle(tr, "td", ele.age, null);
    createEle(tr, "td", ele.status, null);
    let td = createEle(tr, "td", null, null);
    let updateBtn = createEle(td, "button", "UpDate", "btn btn-success mx-2");
    let deleBtn = createEle(td, "button", "Delete", "btn btn-danger");
    deleBtn.addEventListener("click", (e) => {
      allUsersDate.splice(index, 1);
      localStorage.setItem("allUsers", JSON.stringify(allUsersDate));
      displayDate();
    });
    // updateBtn.addEventListener("click", (e) => {
    //     let submitBtn = document.querySelector("#subBtn");
    //     submitBtn.value = "UpDate"
    //     if (submitBtn.value == "UpDate") {
    //       allFrom.elements.UserName.value = ele.name;
    //       allFrom.elements.UserName.setAttribute("disabled", null);
    //       allFrom.elements.UserAge.value = ele.age;
    //       allFrom.elements.UserAge.setAttribute("disabled", null);
    //         allFrom.elements.UserStatus.value = ele.status;
    //         if (submitBtn.value == "UpDate") {
    //             submitBtn.addEventListener("click", (e) => {
    //                 let myNewName = allFrom.elements.UserName.value;
    //                 let myNewAge = allFrom.elements.UserAge.value;
    //                 let myNewStart = allFrom.elements.UserStatus.value
    //                 ele.name = myNewName
    //                 ele.age = myNewAge
    //                 ele.status = myNewStart
    //             })
    //             submitBtn.value == "Submit"
    //         }

    //     }
    // })
    updateBtn.addEventListener("click",(e) => {
        let myNewStatus = prompt("Plz Inter Your New Status");
        ele.status = myNewStatus
      localStorage.setItem("allUsers", JSON.stringify(allUsersDate));
        displayDate()
    });
  });
}

// myShowDate.appendChild(tr)
