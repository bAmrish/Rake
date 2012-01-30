<%@ page import="rake.Note" %>



<div class="fieldcontain ${hasErrors(bean: noteInstance, field: 'title', 'error')} ">
	<label for="title">
		<g:message code="note.title.label" default="Title" />
		
	</label>
	<g:textField name="title" maxlength="512" value="${noteInstance?.title}"/>
</div>

<div class="fieldcontain ${hasErrors(bean: noteInstance, field: 'content', 'error')} ">
	<label for="content">
		<g:message code="note.content.label" default="Content" />
		
	</label>
	<g:textArea cols="40" rows="5" name="content" value="${noteInstance?.content}"/>
</div>

