use('icc')


db.getCollection("users").deleteMany({
    "username":"Amit"
})