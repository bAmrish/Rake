dataSource {
    pooled = true
    driverClassName = "org.h2.Driver"
    username = "sa"
    password = ""
}
hibernate {
    cache.use_second_level_cache = true
    cache.use_query_cache = true
    cache.region.factory_class = 'net.sf.ehcache.hibernate.EhCacheRegionFactory'
}
// environment specific settings
environments {
    development {
        dataSource {
            pooled = false
                dbCreate = "update" // one of 'create', 'create-drop','update'
                url = "jdbc:postgresql://localhost:5432/rake"
                driverClassName = "org.postgresql.Driver"
                username = "rake_user"
                password = "postgres"

                // NOTE: both of these dialects have worked for me. But some people
                // recommend using the net.sf version and not the org.hibernate version.
                // dialect = org.hibernate.dialect.PostgreSQLDialect // honestly, not sure what
                dialect = net.sf.hibernate.dialect.PostgreSQLDialect // the difference is.
        }
    }
    test {
        dataSource {
            dbCreate = "update"
            url = "jdbc:h2:mem:testDb;MVCC=TRUE"
        }
    }
    production {
        dataSource {
            dbCreate = "update"
            url = "jdbc:h2:prodDb;MVCC=TRUE"
            pooled = true
            properties {
               maxActive = -1
               minEvictableIdleTimeMillis=1800000
               timeBetweenEvictionRunsMillis=1800000
               numTestsPerEvictionRun=3
               testOnBorrow=true
               testWhileIdle=true
               testOnReturn=true
               validationQuery="SELECT 1"
            }
        }
    }
}
