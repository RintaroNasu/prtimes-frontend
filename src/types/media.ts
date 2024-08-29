export type MediaRequest = {
  title: string;
  content: string;
  purpose: string;
  category: string;
  releaseKind: string;
};

export type MediaResponse = {
  media_kind: string;
  media_name: string;
  media_overview: string;
  company: string;
  size_published: string;
};

export type MediaResponseArray = MediaResponse[];
