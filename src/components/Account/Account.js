//REACT
import React, { useContext } from 'react';

//MUI
import { Card, CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//COMPONENTS
import Copyright from '../General/Copyright';
import { LogOutButton } from "./LogOut/LogOutButton";
import PrivateNavigation from "../Private/PrivateNavigation";

//AUTH
import { AuthContext } from "../../authentication/Auth";

const noUser = require('../../img/Utils/noUser.webp')

function ProfileImage() {
    const { userPic } = useContext(AuthContext);
    return (
        <Box
            component="img"
            sx={{
                maxHeight: 200,
                maxWidth: 200,
                border: 2,
                borderColor: 'primary.main', 
                borderRadius: '50%',
            }}
            alt="user avatar"
            src={userPic ? userPic : noUser}
            onError={({ currentTarget }) => {
                currentTarget.onerror = null; 
                currentTarget.src = noUser;
            }}
        />
    )
}

function AccountCard() {
    const { userName, userEmail, userTitle, userProjects } = useContext(AuthContext);

    return (
        <React.Fragment>
            <header className="App-header">
                <PrivateNavigation />
            </header>

            <CardContent>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <div>
                        <br />
                        <h2>Welcome back, {userName}!</h2>
                        <br />
                        
                        <Box textAlign="center">
                            <ProfileImage />
                            <br />
                            <br />
                            <h3>{userTitle}</h3>
                            <h3>{userProjects}</h3>
                            <h4>{userEmail}</h4>
                            <br />
                            <LogOutButton />
                        </Box>
                    </div>
                </Grid>
            </CardContent>
        </React.Fragment>
    )
}

function Account() {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh', }}
        >
            <Box sx={{ minWidth: 275, margin: "30px" }}>
                <Card className="m-5 p-5" variant="outlined">
                    <AccountCard />
                </Card>
            </Box>
            <Copyright sx={{ mt: 2 }} />
        </Grid>
    );
}

export default Account;
