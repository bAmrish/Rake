/**
 * @fileDescription This file defines model for
 */
define(['rake/base', 'rake/util'], function(Rake, Util){
    Rake.Note = Backbone.Model.extend({

        defaults: function(){
            return {
                'id': Util.UUID()
                , 'title': 'New Note'
                , 'content' : 'Double Click on this note to edit.'
            }
        }
    });

    return Rake.Note;
});