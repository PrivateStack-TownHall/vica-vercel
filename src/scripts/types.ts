export interface Program {
   id: string;
   slug: string;
   title: string;
   githubPath: string;
}

export interface Module {
   id: string;
   slug: string;
   title: string;
   programSlug: string;
   githubPath: string;
}

export interface Lesson {
   id: string;
   slug: string;
   title: string;
   githubPath: string;
}

export interface Assignment {
   id: string;
   slug: string;
   title: string;
   githubPath: string;
}

export interface Resource {
   id: string;
   slug: string;
   title: string;
   githubPath: string;
}