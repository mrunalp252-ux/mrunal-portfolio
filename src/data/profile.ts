export interface ProfileData {
  name: string;
  monogram: string;
  academicStatus: string;
  degree: string;
  branch: string;
  institute: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  headline: string;
  intro: string;
  aboutBio: string[];
}

export const PROFILE: ProfileData = {
  name: 'Mrunal Patil',
  monogram: 'MP',
  academicStatus: 'Second-year student',
  degree: 'B.Tech',
  branch: 'Computer Science and Engineering (CSE)',
  institute: 'R. C. Patel Institute of Technology, Shirpur',
  location: 'Shirpur, Maharashtra, India',
  email: 'mrunalp8766@gmail.com',
  githubUrl: 'https://github.com/mrunalp252-ux',
  linkedinUrl: 'https://www.linkedin.com/in/mrunal-mahendra-patil',
  headline: 'Ideas into working software.',
  intro:
    'I’m Mrunal Patil, a second-year Computer Science and Engineering student interested in building useful digital experiences.',
  aboutBio: [
    'I am a second-year B.Tech Computer Science and Engineering student at R. C. Patel Institute of Technology, Shirpur. My focus is on writing structured, accessible frontend applications and dependable backend services.',
    'Through my projects, I have engineered agronomic advisory platforms with regional crop data, static exam analytics tools, and full-stack productivity applications. I enjoy transforming real-world problem statements into clean, maintainable software.',
    'I prioritize strong architectural foundations, semantic HTML, modern TypeScript, responsive layouts, and reliable automated tests.',
  ],
};
