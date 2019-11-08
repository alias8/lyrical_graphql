import mongoose, { Document, Model, Schema } from "mongoose";
import { profanityFilter } from "./song";

interface ICommentDocument extends Document {
  content: mongoose.Schema.Types.String;
}

export interface ICommentModel extends Model<ICommentDocument> {}

const CommentSchema = new Schema<ICommentDocument>({
  content: {
    type: mongoose.Schema.Types.String,
    validate: {
      // tslint:disable-next-line:only-arrow-functions
      validator(v) {
        return !profanityFilter.isProfane(v);
      },
      // @ts-ignore
      message: props => `No profanity allowed!`
    }
  }
});

export const CommentModel: ICommentModel = mongoose.model<
  ICommentDocument,
  ICommentModel
>("comment", CommentSchema);
