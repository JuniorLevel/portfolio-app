interface IStack {
  id: number;
  data: string;
}

interface IProject {
  id: number;
  name: string;
  description: string;
  stack: string;
  picture: string;
  url: string;
}

interface IAbout {
  text1: string;
  text2: string;
  text3: string;
}
