package rake

import org.springframework.dao.DataIntegrityViolationException
import grails.converters.JSON

class NoteController {

    static allowedMethods = [save: "POST", update: "POST", delete: "POST"]

    def index() {
        redirect(action: "list", params: params)
    }

    def list() {
        params.max = Math.min(params.max ? params.int('max') : 10, 100)
        render Note.list(params) as JSON
//        [noteInstanceList: Note.list(params), noteInstanceTotal: Note.count()] as JSON
    }

    def create() {
        [noteInstance: new Note(params)]
    }

    def save() {
        def noteInstance = new Note(params)
        if (!noteInstance.save(flush: true)) {
            render(view: "create", model: [noteInstance: noteInstance])
            return
        }

		flash.message = message(code: 'default.created.message', args: [message(code: 'note.label', default: 'Note'), noteInstance.id])
        redirect(action: "show", id: noteInstance.id)
    }

    def show() {
        def noteInstance = Note.get(params.id)
        if (!noteInstance) {
			flash.message = message(code: 'default.not.found.message', args: [message(code: 'note.label', default: 'Note'), params.id])
            redirect(action: "list")
            return
        }

        [noteInstance: noteInstance]
    }

    def edit() {
        def noteInstance = Note.get(params.id)
        if (!noteInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'note.label', default: 'Note'), params.id])
            redirect(action: "list")
            return
        }

        [noteInstance: noteInstance]
    }

    def update() {
        def noteInstance = Note.get(params.id)
        if (!noteInstance) {
            flash.message = message(code: 'default.not.found.message', args: [message(code: 'note.label', default: 'Note'), params.id])
            redirect(action: "list")
            return
        }

        if (params.version) {
            def version = params.version.toLong()
            if (noteInstance.version > version) {
                noteInstance.errors.rejectValue("version", "default.optimistic.locking.failure",
                          [message(code: 'note.label', default: 'Note')] as Object[],
                          "Another user has updated this Note while you were editing")
                render(view: "edit", model: [noteInstance: noteInstance])
                return
            }
        }

        noteInstance.properties = params

        if (!noteInstance.save(flush: true)) {
            render(view: "edit", model: [noteInstance: noteInstance])
            return
        }

		flash.message = message(code: 'default.updated.message', args: [message(code: 'note.label', default: 'Note'), noteInstance.id])
        redirect(action: "show", id: noteInstance.id)
    }

    def delete() {
        def noteInstance = Note.get(params.id)
        if (!noteInstance) {
			flash.message = message(code: 'default.not.found.message', args: [message(code: 'note.label', default: 'Note'), params.id])
            redirect(action: "list")
            return
        }

        try {
            noteInstance.delete(flush: true)
			flash.message = message(code: 'default.deleted.message', args: [message(code: 'note.label', default: 'Note'), params.id])
            redirect(action: "list")
        }
        catch (DataIntegrityViolationException e) {
			flash.message = message(code: 'default.not.deleted.message', args: [message(code: 'note.label', default: 'Note'), params.id])
            redirect(action: "show", id: params.id)
        }
    }
}
