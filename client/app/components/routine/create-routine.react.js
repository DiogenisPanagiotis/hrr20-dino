import React from 'react';
import CreateRoutineNav from './create-routine-nav.react.js';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import RoutineActions from '../../flux/actions/routine-actions';
import { Link } from 'react-router';


export default class CreateRoutine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      description: null,
      days: {
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false
      }
    };
  }

  handleChange(fieldName, event) {
    this.setState({
      [fieldName]: event.target.value
    });
  }

  handleToggle(day) {
    this.setState({
      days: Object.assign({},
                            this.state.days,
                            { [day] : !this.state.days[day] })
    });
  }

  handleSubmit() {
    RoutineActions.add({
      name: this.state.name || '',
      description: this.state.description || '',
      repeat: this.state.days
    });
  }

  render() {
    const paperStyle = {
      height: 600,
      width: 600,
      margin: 20,
    };
    const centerPaper = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };

    return (
      <div>
        {/*<CreateRoutineNav />*/}
        <div style={centerPaper}>
          <div>
            <Paper style={paperStyle} zDepth={4}>
              <div style={{margin: 20}}>
                <TextField
                  type="text"
                  hintText="ex. Morning Workout"
                  floatingLabelText="Please input the name of your Routine"
                  fullWidth={true}
                  onChange={this.handleChange.bind(this, 'name')}
                /><br />
                <div style={{fontSize: 18 + 'px'}}>Repeat</div>

                { Object.keys(this.state.days).map((day) => {
                  return (
                    <Toggle
                      label={[day]}
                      onToggle={this.handleToggle.bind(this, day)}
                      toggled={this.state.days[day]}
                    />
                  );
                })}

                <Divider />

                <TextField
                  hintText="ex. My morning workout consisting of stretching, cardio, weightlifting, and some jammin' tunes!" floatingLabelText="Please input the description of your Routine"
                  fullWidth={true}
                  multiLine={true}
                  rows={4}
                  onChange={this.handleChange.bind(this, 'description')}
                />
                <RaisedButton
                  label="Add Routine"
                  labelPosition="before"
                  primary={true}
                  icon={<AddCircleOutline />}
                  onClick={this.handleSubmit.bind(this)}
                  Link to='/'
                />
              </div>
            </ Paper>
          </div>
        </div>
      </div>
    );
  }
}
