import * as React from "react";
import {Panel} from "react-bootstrap";
import {render} from "react-dom";
import {IBug} from "../../Abstractions/Abstractions";
import BugApiFetcher from "../../Api/BugApiFetcher";
import BugTable from "../../components/BugTable/BugTable";

class BugOverview extends React.Component<() => {}, () => {}> {


    // Method used for calling the BugApiFetcher
    getBugsFromApi(): IBug[] {
       var tempBugs :Promise<IBug[]> = new BugApiFetcher().getBugs();
       var bugs: IBug[] = [];
       tempBugs.then(b => bugs = b);
       return bugs;
    }

    render() {
        // Generating test-data
        var bugs: IBug[] = [];
        bugs.push({state: 'Created', title: 'Taskforce', id: '1234dd'});
        bugs.push({state: 'Created', title: 'Frame refactoring', id: '98732b'});
        bugs.push({state: 'Created', title: 'Taskforce', id: 'sadf'});
        bugs.push({state: 'Created', title: 'Taskforce', id: 'sadsf'});

        return(
            <Panel className={'PagePanel'}>
                <Panel.Body>
                    <BugTable bugs={bugs}/>
                </Panel.Body>
            </Panel>);
    }

}
export default BugOverview;