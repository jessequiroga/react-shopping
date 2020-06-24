import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import {
    Container,
    makeStyles,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { LoginPage, ProductPage } from 'pages';

const useStyles = makeStyles((theme) => ({
    drawerPaper: { width: 'inherit' },
    link: { textDecoration: 'none', color: theme.palette.text.primary },
    drawerStyle: { width: '220px', anchor: 'left' },
}));

export function App() {
    const classes = useStyles();

    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <Drawer
                    variant="persistent"
                    open={true}
                    className={classes.drawerStyle}
                    classes={{ paper: classes.drawerPaper }}
                >
                    <List>
                        <Link to="/" className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Home'} />
                            </ListItem>
                        </Link>

                        <Link to="/about" className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary={'About'} />
                            </ListItem>
                        </Link>
                        <Link to="/login" className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <ExitToAppIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Login'} />
                            </ListItem>
                        </Link>
                    </List>
                </Drawer>

                <Switch>
                    <Route expect path="/about">
                        <Container>
                            <Typography variant="h3" gutterBottom>
                                About
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Lorem ipsum
                            </Typography>
                        </Container>
                    </Route>
                    <Route path="/login" component={LoginPage} />
                    <Route expect path="/" component={ProductPage} />
                </Switch>
            </div>
        </Router>
    );
}
