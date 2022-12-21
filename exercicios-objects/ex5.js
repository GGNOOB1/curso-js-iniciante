function Post(title, post, author) {
    this.title = title;
    this.post = post;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

const post1 = new Post('a', 'b', 'c');

console.log(post1);