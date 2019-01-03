Ext.define('Goalposts.store.Goal', {
	extend: 'Ext.data.Store',
  alias: 'store.goals',
  storeId: 'goals',
  model: 'Goalposts.model.Goal',
  autoLoad: true,
	proxy: {
    type: 'ajax',
    url: 'resources/shared/data/goals.json',
		reader: {
			type: 'json'
		}
	}
});
