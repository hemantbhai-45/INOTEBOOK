import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from "../context/notes/noteContext";
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
  const context = useContext(noteContext);
  const navigate = useNavigate();
  const { notes, getNotes, editNote } = context;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag
    });
  };

  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Updated successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote showAlert={props.showAlert} />

      {/* Hidden button to open modal */}
      <button
        ref={ref}
        type="button"
        className="hidden"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-lg shadow-lg">
            <div className="modal-header bg-blue-100">
              <h5 className="modal-title font-semibold text-blue-700">Edit Note</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-4">
              <form>
                <div className="mb-4">
                  <label htmlFor="etitle" className="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    id="etitle"
                    name="etitle"
                    className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    value={note.etitle}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="edescription" className="block text-sm font-medium text-gray-700">Description</label>
                  <input
                    type="text"
                    id="edescription"
                    name="edescription"
                    className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    value={note.edescription}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="etag" className="block text-sm font-medium text-gray-700">Tag</label>
                  <input
                    type="text"
                    id="etag"
                    name="etag"
                    className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer flex justify-end p-4 gap-2">
              <button
                ref={refClose}
                type="button"
                className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={note.etitle.length < 5 || note.edescription.length < 5}
                onClick={handleClick}
                type="button"
                className="px-4 py-2 bg-blue-800 text-black ed-md hover:bg-blue-700"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notes list */}
      <div className="mt-8 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-700">Your Notes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.length === 0 && (
            <div className="text-center text-gray-500 col-span-full">No notes to display</div>
          )}
          {notes.map((note) => (
            <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Notes;
