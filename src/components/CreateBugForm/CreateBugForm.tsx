import * as React from "react";
import {Button, Col, ControlLabel, FormControl, FormGroup} from "react-bootstrap";
import {ICreateBug} from "../../Abstractions/Abstractions";

interface CreateBugProps {
    submit: (bug: ICreateBug) => void;
}

class CreateBugForm extends React.Component<CreateBugProps, ICreateBug> {

    constructor(props: any){
        super(props);
        this.state = {title: '', state: 'Created'}
    }

    handleChange(key: string, e: React.ChangeEvent<HTMLInputElement>) {
        let state = {} as any;
        state[key] = e.target.value;
        this.setState(state);
    }

    validateAndSubmit() {
        //Add Validation
        this.props.submit({title: this.state.title, state: this.state.state});
    }

    render() {
        return(
            <form>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Titel:
                    </Col>
                    <Col sm={10}>
                        <FormControl value={this.state.title} placeholder={'Titel des Bugs'} onChange={(event) => this.handleChange('title', event as any)}/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        State:
                    </Col>
                    <Col sm={10}>
                        <FormControl value={this.state.state} placeholder={'Status des Bugs'} onChange={(event) => this.handleChange('state', event as any)}/>
                    </Col>

                </FormGroup>
                <Button onClick={this.validateAndSubmit.bind(this)}>Abstimmung Erstellen</Button>
            </form>
        );
    }

}
export default CreateBugForm;