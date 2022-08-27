import { Box } from '@mui/material'
import Head from 'next/head'
import { FC, ReactElement } from 'react'
import { NavBar, Sidebar } from '../ui'

interface Props{
    title: string
    children: ReactElement
}

export const Layout: FC<Props> = ({ title = 'OJiwork', children }) => {
    return (
        <>
            <Box sx={{ flexFlow: 1}}>
                <Head>
                    <title>{title}</title>
                </Head>
                <NavBar/>
                <Sidebar/>
                <Box sx={{ padding: '10px 20px'}} overflow='auto'>
                    {children}
                </Box>
                
                
            </Box>
            
        
        </>
    )
}
