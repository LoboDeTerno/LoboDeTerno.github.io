export interface Post {
    id: string;
    slug: string;
    frontmatter: FrontMatterPost;
}
export interface FrontMatterPost {
    title: string;
    description?: string;
    date: string;
    categories?: Array<string>;
    tags?: Array<string>;
    keywords?: Array<string>;
    autoThumbnailImage?: boolean;
    thumbnailImagePosition?: boolean;
    thumbnailImage?: string;
    coverImage?: string;
}
export interface SQHome {
    allMdx: {
        edges: Array<{ node: Post }>;
    };
}
