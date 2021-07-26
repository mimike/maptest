
import React, {useState} from 'react';
import SearchBar from 'material-ui-search-bar'
import {useTheme} from '@material-ui/core'

import {Typography, Container, Toolbar, AppBar, Card, CardActions, CardContent, CssBaseline, Grid} from "@material-ui/core"
import {PhotoCamera} from "@material-ui/icons"

function Search(){
    // const theme = useTheme({
    //     primary: {
    //         main: '#FFFFFF'
    //     }
    // });
    const [value, setValue] = useState("")

    

    return (
        <>
            <CssBaseline/>
            <AppBar position="relative">

                <Toolbar>
                    <SearchBar
                        value={value}
                        onChange={(e) =>setValue(e.target.value)}
                    />
                    <Typography  variant="h6">Ikigai</Typography>
                    <PhotoCamera/>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                    </Container>
                </div>
            </main>
        </>
    )
}
export default Search;
