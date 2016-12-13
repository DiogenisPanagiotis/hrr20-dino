import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import * as Colors from 'material-ui/styles/colors';

export default class PreAuthNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const titleStyle = {
      fontWeight: 'bold',
      fontSize: 24,
      color: Colors.white
    };
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <ToolbarTitle
              style={titleStyle}
              text="Team Dino"
            />
          </ToolbarGroup>
          <ToolbarGroup lastChild={true}>
            <RaisedButton
              label="Login / Signup"
              labelPosition="before"
              primary={true}
              />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}
