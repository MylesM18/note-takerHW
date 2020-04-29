$('#new').on('click', ()=>{
    $('#main').show()
})

$('#saveNote').on('click', ()=>{
    let title = $('#titleInput').val().trim();
    let text = $('#mainText').val().trim();
    if(title && text){
        save({title,text})
    }
})

function save(data){
    console.log(data)
    $.ajax({
        method: "POST",
        url: '/api/note',
        data
    }).then(res=>getNotes())
}

function getNotes(){
    $.ajax({
        method:"GET",
        url: '/api/note'
    }).then(function (data){
        for(var i = 0; i <= data.length; i++){

        $('.card-body').append(Object.values(data[i]));
        
        }
    
    })

};

getNotes()

