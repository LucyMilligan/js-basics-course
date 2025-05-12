// create blog post object (with object literal syntax) with
    // title
    // body
    // author
    // views
    // comments
        // (author, body)
    // isLive


const blogPost = {
    title: 'oil paint',
    body: 'oil paint is great',
    author: 'LM',
    views: 10,
    comments: [
        { author: 'CM', body: `that's a short post`},
        { author: 'HJ', body: `cool!`}
    ],
    isLive: true
};

console.log(blogPost)


