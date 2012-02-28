define(['rake/base', 'rake/model/note', 'rake/view/noteView'], function(Rake){
    console.log("base loaded!!");

//    $.ready(function(){
        $('#addNote').click(function(){
            var note = new Rake.NoteView();
            $('#content').append(note.render().el);
        });
//    });

});