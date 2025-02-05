import mongoose, { model, models, Schema } from "mongoose";

const VIDEO_DIMENSIONS = {
  height: 1080,
  width: 1920,
} as const; // as const makes the object read-only

interface IVideo {
  _id: mongoose.Types.ObjectId;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  controls: boolean;
  transformation?: {
    height: number;
    width: number;
    quality: number;
  };
  createdAt?: Date;
  uodatedAt?: Date;
}

const videoSchema = new Schema<IVideo>(
  {
    title: { required: true, type: String },
    description: { required: true, type: String },
    videoUrl: { required: true, type: String },
    thumbnailUrl: { required: true, type: String },
    controls: { type: Boolean, default: true },
    transformation: {
      height: { type: Boolean, default: VIDEO_DIMENSIONS.height },
      width: { type: Boolean, default: VIDEO_DIMENSIONS.width },
      quality: { type: Boolean, min: 1, max: 100 },
    },
  },
  { timestamps: true }
);

const Video = models?.Video || model<IVideo>("Video", videoSchema);

export default Video;
