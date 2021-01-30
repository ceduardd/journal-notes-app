import Swal from 'sweetalert2';
import { db } from '../firebase/config';
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from '../helpers/loadNotes';
import notesTypes from '../types/notesTypes';

export const startLoadNotes = uid => {
  return async dispatch => {
    const notes = await loadNotes(uid);

    dispatch(setNotes(notes));
  };
};

export const setNotes = notes => ({
  type: notesTypes.loadNotes,
  payload: notes,
});

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);

    dispatch(setActiveNote(docRef.id, newNote));
    dispatch(addNewNote(docRef.id, newNote));
  };
};

export const addNewNote = (id, note) => ({
  type: notesTypes.newNote,
  payload: {
    id,
    ...note,
  },
});

export const setActiveNote = (id, note) => ({
  type: notesTypes.setActiveNote,
  payload: {
    id,
    ...note,
  },
});

export const startSaveNote = note => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!note.url) {
      delete note.url;
    }

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

    dispatch(refreshNote(note.id, note));

    Swal.fire({ title: 'Saved', icon: 'success' });
  };
};

export const refreshNote = (id, note) => ({
  type: notesTypes.updateNote,
  payload: {
    id,
    note: {
      id,
      ...note,
    },
  },
});

export const startPictureUpload = file => async (dispatch, getState) => {
  const activeNote = getState().notes.active;

  Swal.fire({
    title: 'Uploading...',
    showConfirmButton: false,
    willOpen: () => {
      Swal.showLoading();
    },
  });

  const fileUrl = await fileUpload(file);

  activeNote.url = fileUrl;

  dispatch(startSaveNote(activeNote));

  Swal.close();
};

export const startDeleting = id => async (dispatch, getState) => {
  const uid = getState().auth.uid;

  await db.doc(`${uid}/journal/notes/${id}`).delete();

  dispatch(deleteNote(id));
};

export const deleteNote = id => ({
  type: notesTypes.deleteNote,
  payload: id,
});

export const noteLogout = () => ({
  type: notesTypes.logoutCleaningNotes,
});
