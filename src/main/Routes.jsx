import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Signup from '../components/signUp'

export default props =>
    <React.Fragment>
        <Switch>
            <Route exact path="/"
                render={(props) => <Signup {...props} isAuthed={true} />} />
            <Redirect from="*" to="/" />
        </Switch>
    </React.Fragment>