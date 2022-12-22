export default class PostContent {
    postId: string;
    content: string;
    imgUrl: string;
    likes: [];
    posted: string;
    replies: [];
    displayName: string;

    constructor(postId: string, content: string, imgUrl: string, likes: [], posted: string, replies: [], displayName: string) {
        this.postId = postId;
        this.content = content;
        this.imgUrl = imgUrl;
        this.likes = likes;
        this.posted = posted;
        this.replies = replies;
        this.displayName = displayName;
    }
}