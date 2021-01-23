import * as React from "react";
import { Post } from "../graphql";

const PostCard: React.FC<Post> = (post) => {
    return <>{post.id}</>;
};

export default PostCard;
