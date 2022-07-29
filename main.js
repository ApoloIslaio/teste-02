//Tudo relacionado a tabela


//variables
let books = JSON.parse(localStorage.getItem('books')) || []
let newRow = document.getElementById('tbody')

//events
onload = () => {
  bookToTable(books)
}

document
  .getElementById('addBookToTable')
  .addEventListener('click', takeBookInfo)

//methods
function takeBookInfo() {
  let bond = document.getElementById('bond').value
  let author = document.getElementById('author').value
  let issn = document.getElementById('issn').value
  let publisher = document.getElementById('publisher').value
  let edition = document.getElementById('edition').value
  let title = document.getElementById('title').value
  let year = document.getElementById('year').value

  console.log(bond, author, issn, publisher, edition, title, year)

  let book = {
    bond: bond,
    author: author,
    issn: issn,
    pb: publisher,
    ed: edition,
    title: title,
    year: year
  }
  if (book.bond == '' || book.author == '' || book.title == '') {
    return
  }
  books.push(book)

  localStorage.setItem('books', JSON.stringify(books))

  bookToTable()
}

function bookToTable(bookInfo) {
  console.log('----- ', bookInfo)

  for (let i = 0; i < bookInfo.length; i++) {
    newRow.innerHTML += `
    <tr ondblclick="deleteBook(${i})">
      <td>${bookInfo[i].bond}</td>
      <td>${bookInfo[i].title}</td>
      <td>${bookInfo[i].author}</td>
      <td>${bookInfo[i].ed}</td>
      <td>${bookInfo[i].issn}</td>
      <td>${bookInfo[i].year}</td>  
      <td>${bookInfo[i].pb}</td>  
    </tr>
  `
  }
}

function deleteBook(pos) {
  
  if (pos >= 0) {
    books.splice(pos, 1)
    updateUI(books)
  }
  
}
function updateUI(books) {
  
  newRow.innerHTML = ''

  for (let i = 0; i < books.length; i++) {
    newRow.innerHTML += `
    <tr ondblclick="deleteBook(${i})">
      <td>${books[i].bond}</td>
      <td>${books[i].title}</td>
      <td>${books[i].author}</td>
      <td>${books[i].ed}</td>
      <td>${books[i].issn}</td>
      <td>${books[i].year}</td>  
      <td>${books[i].pb}</td> 
    </tr>
    `
  }
}

function deleteAll(){
  newRow.innerHTML = ''
  localStorage.removeItem('books')
}