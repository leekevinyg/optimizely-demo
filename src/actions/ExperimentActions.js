import Alt from '../lib/Alt';

class ExperimentActions {
    addExperiment(experiment) {
        return experiment;
    }
    removeExperiment(experiment) {
        return experiment;
    }
}

export default Alt.createActions(ExperimentActions);
