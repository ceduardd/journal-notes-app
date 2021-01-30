import notesTypes from '../types/notesTypes';

const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case notesTypes.setActiveNote:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };

    case notesTypes.newNote:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    case notesTypes.loadNotes:
      return {
        ...state,
        notes: [...action.payload],
      };

    case notesTypes.updateNote:
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };

    case notesTypes.deleteNote:
      return {
        ...state,
        active: null,
        notes: state.notes.filter(note => note.id !== action.payload),
      };

    case notesTypes.logoutCleaningNotes:
      return {
        ...state,
        active: null,
        notes: [],
      };

    default:
      return state;
  }
};
