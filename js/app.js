const inputBox = document.getElementById("input-button")
const searchButton = document.getElementById("search-btn")

searchButton.addEventListener("click", captureInputValue)

function captureInputValue(){
    const searchText = inputBox.value 
    inputBox.value = ""
    if(searchText.length===0){
       document.getElementById("error-message").innerHTML = "<h5 class='text-center p-3 bg-danger'><b>Please enter a  book Name...</b></h5>";
    }
   
    else {
        const url = `http://openlibrary.org/search.json?q=${searchText}`
        fetch(url)
        .then(res =>res.json())
        .then(data =>searchResult(data.docs))
    }
 
}
const searchResult = books =>{
 const foundedBook = document.getElementById("founded-books")
 foundedBook.textContent = ""
    books.forEach(book=> {
        const div = document.createElement("div")
        div.classList.add("col")
        div.innerHTML = `  
        <div class="card">
          <img src="https://covers.openlibrary.org/b/id/$%7BbooksLibrary.cover_i%7D-L.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Title: ${book.title}</h5>
            <h5 class="card-title">Athor Name: ${book.author_name}</h5>           
            <h5 class="card-title">publish Date: ${book.publish_data}</h5>        
          </div>
        </div>
      `
      foundedBook.appendChild(div)

    })
   
}