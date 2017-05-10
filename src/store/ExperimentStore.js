var Immutable = require('immutable'),
    createStore = require('dispatchr/addons/createStore');

var ExperimentStore = createStore({
    storeName: 'ExperimentStore',

    initialize: function() {
        this._experiments = Immutable.Map();
    },

    getExperiments: function() {
        return this._experiments;
    },

    isActive: function(experiment) {
        return !!this._experiments.get(experiment);
    },

    handlers: {
        experimentActivate: function(payload) {
            console.log('in store about to emit change for payload' + payload);
            this._experiments = this._experiments.set(
                payload.experiment.id,
                true
            );
            this.emitChange();
        },
        experimentDeactivate: function(payload) {
            this._experiments = this._experiments.delete(
                payload.experiment.id
            );
            this.emitChange();
        }
    }
});

export default ExperimentStore;