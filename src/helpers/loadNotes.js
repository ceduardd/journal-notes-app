import { db } from '../firebase/config';

export const loadNotes = async uid => {
  const notesSnaphot = await db.collection(`${uid}/journal/notes`).get();

  let notes = [];

  notesSnaphot.forEach(noteSnaphot => {
    notes.push({
      id: noteSnaphot.id,
      ...noteSnaphot.data(),
    });
  });

  return notes;
};
