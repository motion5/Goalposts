Ext.define('Goalposts.view.goal.GoalView',{
	extend: 'Ext.grid.Grid',
	xtype: 'goalview',
	cls: 'goalview',
	requires: [],
  controller: {type: 'goalviewcontroller'},
  bind: {
    store: '{goalstore}',
  },
	columns: [
		{ 
			text: 'Name',
			dataIndex: 'name',
			width: 150,
			cell: {userCls: 'bold'}
		},
		{ 
			text: 'type',
			dataIndex: 'type',
			width: 150,
			cell: {userCls: 'bold'}
    },
    { 
			text: 'Description',
			dataIndex: 'description',
			width: 300,
		},
		{
			text: 'Created At',
			dataIndex: 'created_datetime',
			width: 150 
    },
    { 
			text: 'Due date',
			dataIndex: 'due_datetime',
			width: 150,
		}
	],
	listeners: {
		select: 'onItemSelected'
	}
});
