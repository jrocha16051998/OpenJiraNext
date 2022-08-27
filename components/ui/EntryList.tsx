import React, { DragEvent, FC, useContext, useMemo } from 'react'
import { List, Paper } from '@mui/material'

import { EntriesContext } from '../../context/entries'
import { UIContext } from '../../context/ui'

import { EntryStatus } from '../../interfaces'
import { EntryCard } from './'
import styles from './EntryList.module.css'

interface Props {
    status: EntryStatus
}

export const EntryList : FC<Props>= ({ status }) => {
    
    const { entries, updateEntryStatus } = useContext( EntriesContext )
    const { isDragging, endDragging} = useContext( UIContext )

    const entriesByStatus = useMemo(() => entries.filter( entry => entry.status === status) , [entries])
    
    const onDropEntry = (event : DragEvent<HTMLDivElement>) =>{
        const id = event.dataTransfer.getData('text')

        const entry = entries.find( entry => entry._id === id)!
        entry.status = status
        updateEntryStatus( entry )
        endDragging()
        
    }
    const allowDrop = ( event : DragEvent<HTMLDivElement> ) =>{
        event.preventDefault()
    }

    return (
        <div 
            onDrop={ onDropEntry }
            onDragOver={ allowDrop }    
            className={ isDragging ? styles.dragging : ''}
           
        >
            <Paper 

                elevation={ 4 }
                sx={{ 
                    height:' calc(100vh - 200px)', 
                    overflowY: 'auto', 
                    padding:'1px 8px',
                    backgroundColor: 'transparent'
                }}
                
            >
                <List sx={{opacity: 1, transition: 'all 0.3s'}}>
                    {
                        entriesByStatus.map( entry =>(
                            <EntryCard key={ entry._id } entry={ entry } />
                        ))
                    }
                    
                </List>
            </Paper>
        </div>
    )
}
