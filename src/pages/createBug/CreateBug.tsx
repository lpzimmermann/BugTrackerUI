import * as React from "react";
import {Panel} from "react-bootstrap";
import {ICreateBug} from "../../Abstractions/Abstractions";
import CreateBugForm from "../../components/CreateBugForm/CreateBugForm";

class CreateBug extends React.Component<() => {}, () => {}> {

    // Alert instead of BugApiFetcher-call
    submit(bug: ICreateBug) {
        alert('Submitting Bug: '+ bug.title);
    }

    render() {
        return(
            <Panel className={'PagePanel'}>

            <Panel.Body>
                <CreateBugForm submit={(bug: ICreateBug) => this.submit(bug)}/>
            </Panel.Body>

        </Panel>)
    }

}
export default CreateBug;