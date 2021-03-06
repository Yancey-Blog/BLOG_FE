import { ArticleStoreType } from './article';

export interface ILiveTours {
  poster: string;
  title: string;
  upload_date: string;
  __v: number;
  _id: string;
}

export interface IFeaturedRecords {
  album_name: string;
  artist: string;
  buy_url: string;
  cover: string;
  release_date: string;
  __v: number;
  _id: string;
}

export interface IYanceyMusic {
  title: string;
  soundCloud_url: string;
  cover: string;
  release_date: string;
  __v: number;
  _id: string;
}

export interface ICardProps {
  type: string;
  url: string;
  title: string;
  date: string;
  cover: string;
}

interface MusicStoreType {
  liveTours: ILiveTours[];
  featuredRecords: IFeaturedRecords[];
  yanceyMusic: IYanceyMusic[];
  isLiveToursLoading: boolean;
  isYanceyMusicLoading: boolean;
  isFeaturedRecordLoading: boolean;
  getLiveTours: () => void;
  getFeaturedRecords: () => void;
  getYanceyMusic: () => void;
}

export interface IMusicProps {
  musicStore?: MusicStoreType;
  articleStore?: ArticleStoreType;
}
