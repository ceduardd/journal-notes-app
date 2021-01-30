import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNote, startDeleting } from '../actions/notesActions';
import NotesAppBar from '../components/NotesAppBar';
import useForm from '../hooks/useForm';

const NotesScreen = () => {
  const dispatch = useDispatch();
  const { active: activeNote } = useSelector(state => state.notes);

  const [values, changeHandler, resetValues] = useForm(activeNote);

  const { title, body, date, id } = values;

  const activeId = useRef(activeNote.id);

  const deleteHandler = () => {
    dispatch(startDeleting(id));
  };

  useEffect(() => {
    if (activeNote.id !== activeId.current) {
      resetValues(activeNote);
      activeId.current = activeNote.id;
    }
  }, [activeNote, resetValues]);

  useEffect(() => {
    dispatch(setActiveNote(values.id, { ...values }));
  }, [dispatch, values]);

  return (
    <div className="notes__main-content">
      <NotesAppBar date={date} />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          name="title"
          value={title}
          onChange={changeHandler}
          autoComplete="off"
        />
        <textarea
          placeholder="What happened today!"
          className="notes__textarea"
          name="body"
          value={body}
          onChange={changeHandler}
          autoComplete="off"
        ></textarea>

        {activeNote.url && (
          <div className="notes__image">
            <img src={activeNote.url} alt={activeNote.title} />
          </div>
        )}
      </div>

      <button
        type="button"
        className="btn notes__delete-btn"
        onClick={deleteHandler}
      >
        Delete
      </button>
    </div>
  );
};

export default NotesScreen;
