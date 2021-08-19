export interface Skin {
  _id: string;
  skinDate: string;
  skinBathDuration: number;
  skinColor: string;
  comment: string;
  userId: {
    skins: string[],
    _id: string;
    email: string;
    username: string;
    password: string;
  },
}
