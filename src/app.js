const notes = [
  {
    // object is between squiggly brackets
    title: "first note",
    noteBody: "this is an example note",
    id: 1
  }
]

const readArea = document.querySelector(".read-note-area")
const noteArea = document.querySelector(".write-note-area")
const themeButton = document.querySelector(".theme-toggle")
const btn = document.querySelector(".icons")
// selecting classes from the HTML page
const isLightModeOn = false;

const TextArea =
  `
  <textarea name="newNote" id='newNote' class="newNote" cols="200" rows="50"
  placeholder="Welcome to Andrews Note Pad :) Write here. "></textarea>
  <button class='saveBtn' id=save>Save</button>
  <button class="clearBtn" id='clearBtn' type="submit" value="clear the doc"
  >Clear</button>
  <button class="cancelBtn" id='cancelBtn' type="reset" value="reset the doc"
  >Cancel</button>
  `

const actionNote = () => {
  console.log('click here')
  noteArea.innerHTML = TextArea

  const cancelBtn = document.getElementById('cancelBtn')
  cancelBtn.addEventListener('click', justAddButton)

  const saveButton = document.getElementById("save")
  saveButton.addEventListener('click', saveNote)

  const clearBtn = document.getElementById('clearBtn')
  clearBtn.addEventListener('click', actionNote)
  btn.innerHTML = ''
}

btn.addEventListener('click', actionNote)
themeButton.addEventListener("click", darkMode)


const saveNote = (e) => {
  const noteObject = document.getElementById("newNote")
  const noteText = noteObject.value.split("\n")
  const title = noteText[0]
  const body = noteText.splice(1)
  const bodyFinal = body.join("\n")
  const titleAndBody = [title, bodyFinal]
  if (title.length != 0) {
    notes.push({ title: titleAndBody[0], noteBody: titleAndBody[1], id: notes.length + 1 })
    sideNoteBar()
  }
  justAddButton()

}

const sideNoteBar = () => {
  const nlist = document.querySelector(".notes-list")
  nlist.innerHTML = ""
  for (const note of notes) {
    const li = document.createElement("li")
    li.className = "saved-note"
    li.setAttribute("id", note.id)
    li.appendChild(document.createTextNode(note.title))
    nlist.appendChild(li)
  }
  document.querySelectorAll(".saved-note").forEach((item) => {
    item.addEventListener("click", viewNote)
  })
}

const viewNote = (evt) => {
  const viewingArea = document.querySelector(".read-note-area")
  const note = notes[evt.currentTarget.id - 1]
  // finding the clicked note in our stored list of notes
  const body = note.noteBody
  viewingArea.innerHTML = `<button id=close-view>close</button><p>${body}</p>`
  const closeView = document.getElementById("close-view")
  closeView.addEventListener("click", () => {
    closeNoteView()
  })
}

const closeNoteView = () => {
  const viewingArea = document.querySelector(".read-note-area")
  viewingArea.innerHTML = ""
}

const justAddButton = () => {
  noteArea.innerHTML = ""
  btn.innerHTML = '<i class="fa-solid fa-circle-plus">'
}
// .toggle
let darkTheme = () => {
  let switchDarkTheme = document.querySelector(".main-container");
  switchDarkTheme.classList.toggle("dark-theme");
}

// const lightTheme = () => {
//   let switchLightTheme = document.querySelector(".main-container");
//   switchLightTheme.classList.replace("dark-theme", "light-theme");
// }

function darkMode() {
  if (isLightModeOn == false) {
    darkTheme()
    isLightModeOn = true
  } else {
    lightTheme()
    isLightModeOn = false
  }
}
sideNoteBar()