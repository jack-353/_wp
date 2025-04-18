import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Open a database
const db = new DB("blog.db");
db.query(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    time DATETIME DEFAULT CURRENT_TIMESTAMP,
    title TEXT,
    body TEXT ,
    user TEXT
    )
`);

const posts = [
    {title:'Post1',time:'2022-01-01', body:'Pass the test' , user: 'Richa'},
    {title:'Post2',time:'2022-04-02', body:'Meet a perfect lady' , user: 'John'},
    {title:'Post3',time:'2022-05-10', body:'BAD DAY' , user: 'Cindy'}
];

// Run a simple query
for (const post of posts)
  db.query("INSERT INTO posts (title,time, body, user) VALUES (?,?,?,?)", [post.title,post.time, post.body, post.user]);

// Print out data in table
for (const [id, time, title, body, user] of db.query("SELECT id, time, title, body ,user FROM posts"))
  console.log(id, time, title, body, user);

// Close connection
db.close();
