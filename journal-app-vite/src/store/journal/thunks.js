import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'
import { firebaseDB } from '../../firebase/config'
import { fileUpload } from '../../helpers/fileUpload'
import { loadNotes } from '../../helpers/loadNotes'
import {
  addNewNote,
  creatingNewNote,
  deleteNoteById,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updatedNote,
} from './journalSlice'

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(creatingNewNote())

    const { uid } = getState().auth

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`))
    await setDoc(newDoc, newNote)

    newNote.id = newDoc.id

    dispatch(addNewNote(newNote))
    dispatch(setActiveNote(newNote))
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    if (!uid) throw new Error('El UID del usuario no existe')

    const notes = await loadNotes(uid)

    dispatch(setNotes(notes))
  }
}

export const startSavingNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving())

    const { uid } = getState().auth
    const { active: note } = getState().journal

    const { id, ...newNote } = note

    const docRef = doc(firebaseDB, `${uid}/journal/notes/${note.id}`)
    await setDoc(docRef, newNote, { merge: true })

    dispatch(updatedNote(note))
  }
}

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving())

    const fileUploadPromises = []

    for (const file of files) {
      fileUploadPromises.push(fileUpload(file))
    }

    const photosUrls = await Promise.all(fileUploadPromises)

    dispatch(setPhotosToActiveNote(photosUrls))
  }
}

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    const { active: note } = getState().journal

    const docRef = doc(firebaseDB, `${uid}/journal/notes/${note.id}`)
    await deleteDoc(docRef)

    dispatch(deleteNoteById(note.id))
  }
}
