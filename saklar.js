function checktidur() {
  let toggle1 = document.getElementById("default-toggle1");
  let lampu1 = document.getElementById("lampu1");
  let toggleall = document.getElementById("default-toggleall");
  if (toggleall.checked) {
    lampu1.src = "assets/images/on.png";
    toggle1.checked = true;
  } else {
    lampu1.src = "assets/images/off.png";
    toggle1.checked = false;
  }
}

function saklar() {
  let toggle1 = document.getElementById("default-toggle1");
  let toggle2 = document.getElementById("default-toggle2");
  let toggle3 = document.getElementById("default-toggle3");
  let toggle4 = document.getElementById("default-toggle4");
  let toggleall = document.getElementById("default-toggleall");
  // let checkboxes = document.getElementsByTagName("input");

  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let lampu3 = document.getElementById("lampu3");
  let lampu4 = document.getElementById("lampu4");

  if (toggle1.checked) {
    lampu1.src = "assets/images/on.png";
    toggleall.checked = true;
  } else {
    lampu1.src = "assets/images/off.png";
    toggleall.checked = false;
  }

  if (toggle2.checked) {
    if (toggle1.checked) {
      toggleall.checked = true;
    }
    lampu2.src = "assets/images/on.png";
  } else {
    lampu2.src = "assets/images/off.png";
    toggleall.checked = false;
  }

  if (toggle3.checked) {
    if (toggle1.checked && toggle2.checked) {
      toggleall.checked = true;
    }
    lampu3.src = "assets/images/on.png";
  } else {
    lampu3.src = "assets/images/off.png";
    toggleall.checked = false;
  }

  if (toggle4.checked) {
    if (toggle1.checked && toggle2.checked && toggle3.checked) {
      toggleall.checked = true;
    }
    lampu4.src = "assets/images/on.png";
  } else {
    lampu4.src = "assets/images/off.png";
    toggleall.checked = false;
  }
}

function checkAll(ele) {
  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let lampu3 = document.getElementById("lampu3");

  let checkboxes = document.getElementsByTagName("input");
  if (ele.checked) {
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == "checkbox") {
        checkboxes[i].checked = true;
        lampu1.src = "assets/images/on.png";
        lampu2.src = "assets/images/on.png";
        lampu3.src = "assets/images/on.png";
      }
    }
  } else {
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == "checkbox") {
        checkboxes[i].checked = false;
        lampu1.src = "assets/images/off.png";
        lampu2.src = "assets/images/off.png";
        lampu3.src = "assets/images/off.png";
      }
    }
  }
}

function checkmakan(ele) {
  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let checkboxes = document.getElementsByTagName("input");
  if (ele.checked) {
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == "checkbox") {
        checkboxes[i].checked = true;
        lampu1.src = "assets/images/on.png";
        lampu2.src = "assets/images/on.png";
      }
    }
  } else {
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == "checkbox") {
        checkboxes[i].checked = false;
        lampu1.src = "assets/images/off.png";
        lampu2.src = "assets/images/off.png";
      }
    }
  }
}

function checktamu(ele) {
  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let lampu3 = document.getElementById("lampu3");
  let lampu4 = document.getElementById("lampu4");
  let checkboxes = document.getElementsByTagName("input");
  if (ele.checked) {
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == "checkbox") {
        checkboxes[i].checked = true;
        lampu1.src = "assets/images/on.png";
        lampu2.src = "assets/images/on.png";
        lampu3.src = "assets/images/on.png";
        lampu4.src = "assets/images/on.png";
      }
    }
  } else {
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == "checkbox") {
        checkboxes[i].checked = false;
        lampu1.src = "assets/images/off.png";
        lampu2.src = "assets/images/off.png";
        lampu3.src = "assets/images/off.png";
        lampu4.src = "assets/images/off.png";
      }
    }
  }
}
