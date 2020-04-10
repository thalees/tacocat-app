interface Status {
  verified: boolean;
  sentCount: number;
}

export interface CatResponse {
  used: boolean;
  source: string;
  type: string;
  deleted: boolean;
  _id: string;
  __v: number;
  text: string;
  updatedAt: Date;
  createdAt: Date;
  status: Status;
  user: string;
}
