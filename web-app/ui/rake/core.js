define(['rake/base', 'rake/model/note', 'rake/view/noteView'], function(Rake){
    console.log("base loaded!!");
    $('#addNote').click(function(){
        var note = new Rake.NoteView();
        $('#content').append(note.render().el);
    });

    $.ajax("/rake/note/list", {
        success: function(data){
            $.each(data, function(index, note){
                var n = new Rake.NoteView({model: note});
                $('#content').append(n.render().el);
            });
        }
    });

});