Ext.define('Goalposts.view.goal.GoalViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.goalviewcontroller',

	onItemSelected: function (sender, record) {
		Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
	},

	onConfirm: function (choice) {
		if (choice === 'yes') {
			//
		}
	}
});
