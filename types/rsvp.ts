export type RSVP = {
  id: string;
  firstName: string;
  lastName: string;
  email?: string | null;
  attendance: boolean;
  message?: string | null;
  dietary?: string | null;
  guests: number;
  createdAt: Date;
};