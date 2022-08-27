import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { DragEvent, useContext } from 'react'
import { Entry } from '../../interfaces'
import { FC } from 'react'
import  { UIContext } from '../../context/ui'
interface Props{
    entry: Entry
}

export const EntryCard : FC<Props>= ({ entry }) => {
    const { startDragging, endDragging} = useContext( UIContext )

    const onDragStart = ( event : DragEvent<HTMLDivElement>) =>{
        
        startDragging()
        event.dataTransfer.setData('text', entry._id )
    }

    const onDragEnd = () =>{

        endDragging()
        
    }
    
    return (
        <Card
            sx={{ marginBottom :1, position:'relative', zIndex: 999}}
            draggable
            onDragStart={ onDragStart }
            onDragEnd={ onDragEnd }
            
        >
            <CardActionArea>
                <CardContent>
                    <Typography
                        sx={{ whiteSpace: 'pre-line'}}
                    >
                        { entry.description  } 
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent:'flex-end', paddingRight: 2}}>
                    <Typography variant='body2'> 
                        Hace 30minustos
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
