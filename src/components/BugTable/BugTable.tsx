import * as React from "react";
import {Table} from "react-bootstrap";
import {IBug} from "../../Abstractions/Abstractions";

interface BugTableProps {
    bugs: IBug[]
}

class BugTable extends React.Component<BugTableProps, () => {}> {

    getBugsToRender() {
        var bugs = [];

        for (let bug of this.props.bugs) {
            var bugElement = (
                <tr>
                    <td>{bug.id}</td>
                    <td>{bug.title}</td>
                    <td>{bug.state}</td>
                </tr>
            )
            bugs.push(bugElement);
        }

        return bugs;
    }

    render() {
        return (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>State</th>
                </tr>
                </thead>
                <tbody>
                {this.getBugsToRender()}
                </tbody>
            </Table>

        );
    }

}
export default BugTable;