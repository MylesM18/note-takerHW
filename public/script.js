var el = `<button class="delNote" onclick="deleteNote()">Delete</button>`

$("#new").on("click", () => {
  $("#main").show();
});

$("#saveNote").on("click", () => {
  let title = $("#titleInput").val().trim();
  let text = $("#mainText").val().trim();
  if (title && text) {
    save({ title, text });
  }
  
});

function deleteNote(id) {   
    
 $.ajax("/api/note/"+id, {
    type: "DELETE",
  }).then(function () {
    console.log("deleted id ");

    getNotes()
  });
};

function save(data) {
  console.log(data);
  $.ajax({
    method: "POST",
    url: "/api/note",
    data,
  }).then((res) => getNotes());
}

function getNotes() {
  $.ajax({
    method: "GET",
    url: "/api/note",
  }).then(function (data) {
    $(".card-body").empty()
    for (var i = 0; i <= data.length; i++) {
      $(".card-body").append(`<ul>
                 <li>
                <p>Title - ${data[i].title}</p>
                <p>Note - ${data[i].text}</p>
                <button class="delNote" onclick="deleteNote(${data[i].id})">Delete</button>
                </li>
                </ul>`);
      
    }
  });
}

$('.btn-link').on('click', function(){
    
    getNotes();
});

// getNotes();
