// constructor function to create the post object

let blogPost = new BlogPost('a', 'b', 'c')
console.log(blogPost)

function BlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0; //default value when initialise 
    this.comments = []; //default value when initialise 
    this.isLive = false; //default value when initialise 
}