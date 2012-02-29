define(['rake/model/note'], function(Note){
    Rake.NoteView = Backbone.View.extend({
        tagname : "div",

        className: "rake-note-container",

        template: _.template('<div class="rake-note-title"><%=title%></a></div><div class="rake-note-content"><%=content%></div>'),

        initialize : function(){
            if(!this.model){
                this.model = new Note();
            }
        },

        render: function() {
          this.$el.html(this.template(this.model)).draggable();
          return this;
        }

    });
});