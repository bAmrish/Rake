define(['rake/model/note'], function(Note){
    Rake.NoteView = Backbone.View.extend({
        tagname : "div",

        className: "rake-note",

        template: _.template('<div id=<%=id%> class="rake-note-container"><div class="rake-note-title"><%=title%></a></div><div class="rake-note-content"><%=content%></div></div>'),

        initialize : function(){
            if(!this.model){
                this.model = new Note();
            }
        },

        render: function() {
          this.$el.html(this.template(this.model.toJSON())).draggable();

          return this;
        }

    });
});