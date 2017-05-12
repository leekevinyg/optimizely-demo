import Alt from '../lib/Alt';
import ExperimentActions from '../actions/ExperimentActions';

class ExperimentStore {
    constructor() {
        this.experiments = new Set();

        this.bindListeners({
            handleAddExperiment: ExperimentActions.ADD_EXPERIMENT,
            handleRemoveExperiment: ExperimentActions.REMOVE_EXPERIMENT
        });
    }

    handleAddExperiment(experiment) {
        console.log('handling add experiment action in the experiment store');
        this.experiments.add(experiment);
    }

    handleRemoveExperiment(experiment) {
        console.log('handling remove experiment action in the experiment store');
        this.experiments.delete(experiment);
    }
}

export default Alt.createStore(ExperimentStore, 'ExperimentStore');