print("Started Adding development User.");

db = db.getSiblingDB('sample-db');
db.createUser({
  user: "user",
  pwd: "1234",
  roles: [{ role: "readWrite", db: "sample-db" }],
});
db.createCollection('sample_collection');

print("End Adding the User Roles.");