var Immutable = require('immutable'),
    createStore = require('dispatchr/addons/createStore');


// fix up to match http://stackoverflow.com/questions/32377076/reactjs-getting-event-from-store-with-fluxible

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
                payload.id,
                true
            );
            this.emitChange();
        },
        experimentDeactivate: function(payload) {
            this._experiments = this._experiments.delete(
                payload.id
            );
            this.emitChange();
        }
    }
});

export default ExperimentStore;