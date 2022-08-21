import { Box } from '@mui/material'
import Head from 'next/head'
import { FC, ReactElement } from 'react'
import { NavBar } from '../ui'

interface Props{
    title: string
    children: ReactElement
}

export const Layout: FC<Props> = ({ title = 'OpenJira-app', children }) => {
    return (
        <>
            <Box sx={{ flexFlow: 1}}>
                <Head>
                    <title>{title}</title>
                </Head>

                <Box>
                    <NavBar/>
                    
                </Box>
                {children}
            </Box>
            
        
        </>
    )
}
