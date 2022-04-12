// INSTRUCTIONS

// **create note taking area 4 points**

// When the plus button is clicked a new note taking area is created below the plus button in the *create-note-area* (article in the HTML).

// The note taking area includes:
// - a textarea where the note will be written
// - a save button
// - a cancel button

// when the **cancel** button is clicked the note taking area is removed.
// See save a note for what happens when save is clicked

// **save a note 4 points**

// when the “save” button in the note taking area is clicked the note is saved in the **notes** array, which has been created for you in app.js.

// note rules:
// The first line of the note should be the title

// ```
// title
// note body begins on second line
// ```

// A new note is saved as an object with a **title**, a **noteBody** and an **id** 
// (since you don’t have to delete notes you could use `notes.length + 1` to set the id, or get the value of the last note id and increment that `notes[-1].id + 1`

// after clicking the save button the note taking area should be removed.

// **display notes in side nav 4 points**

// When a new note is created the title should be added to the ul inside of the nav in the .side-nav.
// These should include li elements which will be added to the ul element

// **read a note 4 points**

// When a note title is clicked in the note will be displayed in the *read-note-area* (article in the HTML).

// The note should include a subtle close button.
// When the close button is clicked the note display is removed,

// **git 4 points**

// break up your project into logical components. 
// Each component should have a git commit that clearly describes what was done.
// Original commit messages made by me should still be attached to the project

// Don’t use the GitHub dashboard to add content

// General: 

// - Complete the styling for all of the above items
//     - use only colors in the included color palette
// - follow naming conventions in the deliverables section
// - Your code should be properly formatted
// - Functions should be well structured (do only one thing, be flexible to avoid writing many similar functions)
// - Avoid obvious copy and paste from internet resources
// By this I mean don’t try to copy and paste entire solutions.
// Refer to the mdn documentation and class notes and try to figure things out on your own first.
// - Don’t use additional libraries other than the included font awesome icons.
// - For assignment 2 you don’t need to create a mobile friendly view, although you can if you want to.


// CODE


const notes = [
  {
    title: "first note",
    noteBody: "this is an example note",
    id: 1
  }
]

const readArea = document.querySelector(".read-note-area")
const noteArea = document.querySelector(".write-note-area")
const btn = document.querySelector(".icons")

const createNote = () => {



}



const displayNote = () => {

}


originalContainer.forEach(function (element) {
  // for each = for each element in list
  element.addEventListener('click', event => {
    if (event.target = 'div.original-container') {
      copyContainer.insertAdjacentHTML("beforeend", event.target.innerHTML + ' ')
      // insertAdjacentHTML(position, text), represents the position relative to the element
      // innerHTML sets the HTML markup within an element, in this case, its being copied
    }
  })
});
// const displayNote = () => {
//   noteArea = document.insertAdjacentHTML('write-note-area')

//   const cancelBtn = document.querySelector('.cancelBtn')
//   const saveBtn = document.querySelector('.saveBtn')

//   cancelBtn.addEventListener('click', cancelNote)
//   saveBtn.addEventListener("click", saveNote)


}