import {IBug} from "../Abstractions/Abstractions";

class BugApiFetcher {

    // Still under development
     public getBugs(): Promise<IBug[]> {

        var bugs: Promise<IBug[]> = fetch("http://localhost:5001/api/bugs").then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
            .then(data => {
                return data.data
            });

        return bugs;
    }
}
export default BugApiFetcher;