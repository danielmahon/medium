import Model from "../Model/model";
import User from "../User/model";
import { PostType } from "./constants";

export default class Post extends Model {
  /**
   * The Firestore Collection name
   */
  protected static collectionName = "posts";

  author: User["id"];
  title: string;
  body: string;
  type: PostType;
  publishedAt?: number | null;

  constructor(data: Post) {
    super(data);

    this.author = data.author;
    this.title = data.title;
    this.body = data.body;
    this.type = data.type || PostType.ARTICLE;
    this.publishedAt = data.publishedAt;
  }

  protected static transformFromFirestore(data: FirebaseFirestore.DocumentData): Post {
    return {
      author: String(data.author),
      title: String(data.title),
      body: String(data.body),
      type: String(data.type) as PostType,
      publishedAt: Number(data.publishedAt) || null,
    };
  }
}
