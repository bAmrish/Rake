/**
 * @fileDescription This file defines model for
 */
define(['rake/base'], function(Rake){
    Rake.Note = Backbone.Model.extend({
        defaults: {
            'title': 'New Note',
            'content' : 'Double Click on this note to edit.'
        }
    });

    return Rake.Note;
});