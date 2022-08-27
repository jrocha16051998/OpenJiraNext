import { FC, ReactElement, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { EntriesContext, entriesReducer } from './'
import { Entry } from '../../interfaces'



export interface EntriesState{
    entries: Entry[]
}

const Entries_INITIAL_STATE : EntriesState={
    entries: [
        {
            _id: uuidv4(),
            description:'Pendiente - El pavo y la pava se van a casar, todos le deseamos mucha felicidad',
            status:'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description:'Progreso - Manuelita vivia en peguajo pero un dia a no se donde ella se marcho',
            status:'in-progress',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description:'Completada - Si tu supieras que me pasa cada vex que te veo ',
            status:'finished',
            createdAt: Date.now()
        },
    ]
}
interface Props{
    children : ReactElement
}
export const EntriesProvider : FC<Props> = ({ children }) =>{

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

    const addNewEntry = ( description : string) =>{
        const newEntry : Entry ={
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }
        dispatch({ type: 'Entry Add-Entry', payload: newEntry})
    }
    const updateEntryStatus = ( entry : Entry) =>{
        dispatch({ type:'Entry Entry-Update', payload: entry})
    }
    return(
        <EntriesContext.Provider 
            value ={{ 
                ...state,
                addNewEntry,
                updateEntryStatus
            }}>
            { children }
        </EntriesContext.Provider>
    )
}