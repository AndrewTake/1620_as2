const notes = [
  {
    title: "first note",
    noteBody: "this is an example note",
    id: 1
  }
]
const noteArea = document.querySelector(".write-note-area")
const btn = document.querySelector(".icons")

const displayNote = () => {
  noteArea = document.querySelector('write-note-area')

  const cancelBtn = document.querySelector('.cancelBtn')
  const saveBtn = document.querySelector('.saveBtn')

  cancelBtn.addEventListener('click', cancelNote)
  saveBtn.addEventListener("click", saveNote)


