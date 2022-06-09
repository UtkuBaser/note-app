export interface Note {
  id: number;
  title: string;
  body: string;
  createdDate: Date;
}

export interface Creation {
  isNew: boolean;
}
