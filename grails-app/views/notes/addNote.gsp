<%--
  Created by IntelliJ IDEA.
  User: abharatiya
  Date: 1/29/12
  Time: 8:25 PM
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
    <head><title>Add a note</title></head>
    <body>
        <g:form>
            <div>Add a note:</div>
            <div id="addNoteWrapper">
                <div class="row">
                    <span class="row-label">Title</span>
                    <span class="row-field">
                        <g:textField name="note-title" id="note-title"/>
                    </span>
                </div>
                <div class="row">
                    <span class="row-label">Title</span>
                    <span class="row-field">
                        <g:textArea name="note-content" rows="8" cols="10"></g:textArea>
                    </span>
                </div>
                <div class="row">
                    <g:actionSubmit value="Add"/>
                </div>
            </div>
        </g:form>
    </body>
</html>