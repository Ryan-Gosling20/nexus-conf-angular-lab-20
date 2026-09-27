export interface Speaker {
  id: number;
  name: string;
  topic: string;
  photoUrl: string;
  role: string;
  company: string;
  time: string;
  room: string;
  accent: 'coral' | 'blue' | 'violet' | 'cyan';
}
