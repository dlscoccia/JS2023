import { Satellite } from '@mui/icons-material'
import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
  },
  reducers: {
    creatingNewNote: (state) => {
      state.isSaving = true
    },

    addNewNote: (state, action) => {
      state.notes.push(action.payload)
      state.isSaving = false
    },
    setActiveNote: (state, action) => {
      state.active = action.payload
      state.messageSaved = ''
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state) => {
      state.isSaving = true
      state.messageSaved = ''
    },
    updatedNote: (state, action) => {
      state.isSaving = false
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? { ...action.payload } : note
      )
      state.messageSaved = `${action.payload.title}, se ha actualizado`
    },
    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
      state.isSaving = false
    },
    deleteNoteById: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload)
      state.active = null
    },
    clearNotesLogout: (state) => {
      state.isSaving = false
      state.messageSaved = ''
      state.notes = []
      state.active = null
    },
  },
})

export const {
  addNewNote,
  clearNotesLogout,
  creatingNewNote,
  deleteNoteById,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updatedNote,
} = journalSlice.actions
