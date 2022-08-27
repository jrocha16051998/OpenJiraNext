import { ChangeEvent, useContext, useState } from 'react'
import { Button, Box, TextField } from '@mui/material'
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined'
import AddIcon from '@mui/icons-material/Add'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'

import 'animate.css'
import { EntriesContext } from '../../context/entries'
import { UIContext } from '../../context/ui/UIContext'

export const NewEntry = () => {
    const {  addNewEntry } = useContext( EntriesContext )
    const { isAddingEntry, setIsAddingEntry } = useContext( UIContext )
    const [inputValue, setInputValue] = useState('')
    const [touched, setTouched] = useState(false)

    const onTextChanged = (e : ChangeEvent<HTMLInputElement>) =>{
        setInputValue( e.target.value)
    }

    const onSave =() =>{
        if (inputValue.length === 0) return
        addNewEntry(inputValue)
        setIsAddingEntry( false )
        setInputValue('')
        setTouched( false )
        
        
    }
    return (
        <Box sx={{ paddingX: 2}}>

            {
                isAddingEntry ? (
                    <>
                        <TextField
                            fullWidth
                            sx={{paddingY: 2, marginTop:1  }}
                            placeholder='Nueva entrada'
                            autoFocus
                            multiline
                            label='Nueva entrada'
                            className='animate__animated animate__pulse'
                            helperText={ inputValue.length < 1 && touched && 'Debe completar el campo' }
                            error={ inputValue.length < 1 && touched }
                            value={ inputValue }
                            onChange={ onTextChanged }
                            onBlur={() => setTouched( true )}
                        />
                        <Box display='flex' justifyContent='space-between' className=' animate__animated animate__pulse'>
                            <Button
                                variant='outlined'    
                                color='success'
                                endIcon={ <SaveAsOutlinedIcon />}
                                onClick={ onSave }
                                
                            >
                                Guardar
                            </Button>
                            <Button
                                variant='outlined'    
                                color='error'
                                endIcon={ <CancelOutlinedIcon/>}
                                sx={{ padding: 1, marginLeft: 2}}
                                onClick={() => setIsAddingEntry(false)}
                                
                            >
                                Cancelar
                            </Button>
                        </Box>
                    
                    </>
                    
                ) 
                    :
                    <Button
                        startIcon={ <AddIcon/> }
                        fullWidth
                        variant='outlined'
                        onClick={() => setIsAddingEntry(true)}
                        className=' animate__animated animate__pulse '
                    >
                        Agregar tarea
                    </Button>

            }

            

            


            
        </Box>

    )
}
