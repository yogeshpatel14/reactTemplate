class StateLoader {

    loadState() {
        try {
            let serializedState = localStorage.getItem("YOUR_STATE_LOADER_KEY");

            if (serializedState === null) {
                return this.initializeState();
            }

            return JSON.parse(serializedState);
        }
        catch (err) {
            return this.initializeState();
        }
    }

    saveState(state) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem("YOUR_STATE_LOADER_KEY", serializedState);

        }
        catch (err) {
        }
    }

    initializeState() {
        return {
              //state object
            }
        };
    }


    export default StateLoader