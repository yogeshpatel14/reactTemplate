import React, { Component } from 'react';
import {
    withRouter
} from 'react-router-dom';

import { route_login } from '../../router/routePath';

class Home extends Component {

    btnLoginClicked() {
        this.props.history.push(route_login)
    }

    render() {
        return (
            <div>
                <h1>
                    Home Page
                </h1>
                <br />
                <button
                    onClick={() => this.btnLoginClicked()}
                >
                    Login
                </button>
            </div>
        )
    }
}

export default withRouter(Home);