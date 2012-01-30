package rake

class Note {
    int id
    String title
    String content
    Date dateCreated
    Date lastUpdated

    static constraints = {
        title maxSize: 512
    }

    static mapping = {
        table 'notes'
        version false
        title sqlType: 'varchar(512)'
        content sqlType: 'text'
        dateCreated column: 'created_date'
        lastUpdated column: 'modified_date'
    }

    def beforeInsert() {
        dateCreated = new Date()
    }
    def beforeUpdate() {
        lastUpdated = new Date()
    }

}
