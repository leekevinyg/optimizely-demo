import Alt from '../lib/Alt';
import ExperimentActions from '../actions/ExperimentActions';

class ExperimentStore {
    constructor() {
        this.experiments = [];

        this.bindListeners({
            handleAddExperiment: ExperimentActions.ADD_EXPERIMENT,
        });
    }

    handleAddExperiment(experiment) {
        console.log('handling addition of the following experiment ' + experiment);
        this.experiments.push(experiment);
    }
}

export default Alt.createStore(ExperimentStore, 'ExperimentStore');