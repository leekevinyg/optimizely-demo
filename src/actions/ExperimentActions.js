import Alt from '../lib/Alt';

class ExperimentActions {
	addExperiment(experiment) {
		return experiment;
	}
}

export default Alt.createActions(ExperimentActions);