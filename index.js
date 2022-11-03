const url = "./data.json";

async function generateWorkList() {
  let res = await fetch(url);
  const listContainer = document.getElementById("listOfEducation");
  if (res.ok) {
    let cvList = await res.json();
    for (let index = 0; index < cvList.education.length; index++) {
      const element = cvList.education[index];
      let listObj = document.createElement("span");
      let newLine = document.createElement("br");
      listObj.className = `listObj ${element.checked}`;
      listObj.innerHTML = `- ${element.type} vid ${element.name}`;
      listContainer.appendChild(listObj);
      listContainer.appendChild(newLine);
    }
  } else {
    console.log("error");
  }
}
async function generateEducationList() {
  let res = await fetch(url);
  const listContainer = document.getElementById("listOfWork");
  if (res.ok) {
    let cvList = await res.json();
    for (let index = 0; index < cvList.work.length; index++) {
      const element = cvList.work[index];
      let listObj = document.createElement("span");
      let newLine = document.createElement("br");
      listObj.className = `listObj ${element.checked}`;
      listObj.innerHTML = `- ${element.role} vid ${element.company}`;
      listContainer.appendChild(listObj);
      listContainer.appendChild(newLine);
    }
  } else {
    console.log("error");
  }
}

function logoClick() {
    const talkBubble = document.getElementById('talkBubble')
    talkBubble.classList.toggle('hidden')
    console.log('tho')
}

generateWorkList();
generateEducationList();
