import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Signup from '../components/signUp'
import Index from '../components/index'
import Admin from '../components/admin'

export default props =>
    <React.Fragment>
        <Switch>
            <Route exact path="/"
                render={(props) => <Index {...props} isAuthed={true} />} />
            <Route exact path="/cadastro"
                render={(props) => <Signup {...props} isAuthed={true} />} />
            <Route exact path="/admin"
                render={(props) => <Admin {...props} isAuthed={true} />} />
            <Redirect from="*" to="/" />
        </Switch>
    </React.Fragment>