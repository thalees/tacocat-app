interface Mixin {
  recipe: string;
  name: string;
  url: string;
  slug: string;
}

interface BaseLayer {
  recipe: string;
  name: string;
  url: string;
  slug: string;
}

interface Condiment {
  recipe: string;
  name: string;
  url: string;
  slug: string;
}

interface Shell {
  recipe: string;
  name: string;
  url: string;
  slug: string;
}

interface Seasoning {
  recipe: string;
  name: string;
  url: string;
  slug: string;
}

export interface TacoResponse {
  mixin: Mixin;
  base_layer: BaseLayer;
  condiment: Condiment;
  shell: Shell;
  seasoning: Seasoning;
}

declare module namespace {
  export interface Status {
    verified: boolean;
    sentCount: number;
  }

  export interface RootObject {
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
}
