/*global Ext : false*/
function createForm() {
	var form = Ext.create('Ext.form.Panel', {
		layout			:	'anchor',
		frame			:	true,
		defaultType		:	'textfield',
		bodyStyle		:	'padding: 16px',
		labelWidth		:	126,
		url				:	'demo',
		defaults		:	{
			msgTarget	:	'side'
		},
		items			:	[
		    {
				fieldLabel	:	'Name',
				name		:	'name',
				allowBlank	:	false,
				emptyText	:	'',
				anchor		:	'100%'
		    },
		    {
				fieldLabel	:	'How cool is it',
                id          :   'coolrating',
				name		:	'coolrating',
				xtype		:	'ratingField',
				numberOfStars:	7,
				anchor		:	'100%',
				minLength	:	3,
				allowBlank	:	false
		    },
		    {
				fieldLabel	:	'Option',
				name		:	'option',
				allowBlank	:	false,
				emptyText	:	'',
				anchor		:	'100%'
		    }
		],
	    buttons: [{
	        text: 'Save changes',
	        handler: function() {
	            var form = this.up('form').getForm();
	            if (form.isValid()) {
					Ext.getCmp("coolrating").reset();
	            }
	        }
	    }]
	});
	return form;
}

function createWindow() {
	if(!Ext.getCmp("newWindow")) {
		var newForm  = createForm();
		var newWindow = Ext.create('Ext.window.Window', {
			id		:	'newWindow',
			title	:	'Test Rating Field',
			layout	:	'fit',
			items	:	[ newForm ]
		});
		newWindow.show();
	}
}

Ext.onReady(function() {
	createWindow();
});