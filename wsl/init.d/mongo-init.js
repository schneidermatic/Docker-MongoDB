db.createUser(
    {
        user: "admin",
        pwd: "changeme",
        roles: [
            {
                role: "readWrite",
                db: "myapp"
            }
        ]
    }
);

var db = connect('127.0.0.1:27017/myapp');
db.myapp.insert({'name' : 'Max Payne'});