import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import validate from 'validate.js';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Container';

class Puzzle extends Component {
    render () {
        return (
            <div>
                <Box my={5}>
                    <h1>Greetings</h1>
                    <Button className="welcome">
                        Register
                    </Button>
                </Box>
            </div>
        )
    }
}

export default Puzzle;
