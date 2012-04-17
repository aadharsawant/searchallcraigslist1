



craigsListPanel = function() {
	
	
	
	var search = new Ext.form.TextField({
	    fieldLabel: 'Search Text',
	    hiddenName: 'search',
	    labelStyle: 'font-weight:bold;',
	    id:'searchCombo',
	   // store: Grid2Store,
	  //  displayField: 'location',
	  //  valueField:'code',
	    typeAhead: false,
	    mode: 'remote',
	   // triggerAction: 'all',
	    hideTrigger:true,
	    emptyText:'Search All California CraigsList',
	    selectOnFocus:true,
	    forceSelection:true,

	   minChars:3,
	        loadingText: 'Searching...',
	  
	        itemSelector: 'div.search-item',
	     ///  tpl:resultTpl,
	    pageSize: 10
	});
	
	
	var searchIn = new Ext.form.TextField({
	    fieldLabel: 'In',
	    hiddenName: 'in',
	    labelStyle: 'font-weight:bold;',
	    id:'inCombo',
	   // store: Grid2Store,
	  //  displayField: 'location',
	  //  valueField:'code',
	    typeAhead: false,
	    mode: 'remote',
	   // triggerAction: 'all',
	    hideTrigger:true,
	    emptyText:'Search This section',
	    selectOnFocus:true,
	    forceSelection:true,

	   minChars:3,
	        loadingText: 'Searching...',
	  
	        itemSelector: 'div.search-item',
	     ///  tpl:resultTpl,
	    pageSize: 10
	});
	
	var button2 = new Ext.Button(
                {
				//textAlign:'center',
				ui: 'blue-round',
                text:'Submit',
                 
                 handler:function(){
                	  text = Ext.getCmp('searchCombo').getValue();
                	  typeIn = Ext.getCmp('inCombo').getValue();
                	  if(Ext.getCmp('telecommute').getValue())
                		 
                		  addOne = 'telecommuting';
                		 
                	  else 
                		  addOne = '';
                	 
                		  if(Ext.getCmp('contract').getValue())
                		  {
                		  addTwo = 'contract';
                		  }
                		  else {
                			  addTwo = '';
                    	  }
                		  if(Ext.getCmp('internship').getValue())
                		  {
                		  addThree = 'internship';
                		  }
                		  else {
                			  addThree = '';
                    	  }
                		  if(Ext.getCmp('part-time').getValue())
                		  {
                		  addFour = 'part-time';
                		  }
                		  else {
                			  addFour = '';
                    	  }
                		  if(Ext.getCmp('non-profit').getValue())
                		  {
                		  addFive = 'non-profit';
                		  }
                		  else {
                			  addFive = '';
                    	  }
                		  if(Ext.getCmp('has-image').getValue())
                		  {
                		  hasPic = '1';
                		  }
                		  else {
                			  hasPic = '';
                    	  }
                	// alert(Ext.getCmp('searchCombo').getValue());
                	 store.load({params:{start:0, limit:100 }});
                 },
                 descriptionText:'Submit CraigsLsit Search Details'
                 });
	
	
	var craigsFieldSet = new Ext.form.FieldSet({ 
		id:'craigsFieldSet',
		title:'Enter  Details',
		collapsible:'false',
		//frame:true,
	    buttonAlign: 'center',
	  
		align:'center',
		items:[search,searchIn
		       ,
		       {
            xtype: 'checkboxgroup',
          // fieldLabel: 'Multi-Column (vertical)',
           // Distribute controls across 3 even columns, filling each column
           // from top to bottom before starting the next column
           columns: 2,
           vertical: true,
			labelAlign:'left',
           items: [
               {boxLabel: 'telecommute',id:'telecommute', name: 'cb-vert-1', checked: false},
               {boxLabel: 'contract',id:'contract', name: 'contract', checked: false},
               {boxLabel: 'internship',id:'internship', name: 'internship',checked: false},
               {boxLabel: 'part-time',id:'part-time', name: 'part-time',checked: false},
               {boxLabel: 'non-profit',id:'non-profit', name: 'non-profit', checked: false},
               {boxLabel: 'has image',id:'has-image', name: 'has-image', checked: false}
           ]

       },button2
		]
		
		
		});
	
	craigsListPanel.superclass.constructor.call(this, {
        id:'craigsListPanel',
     // layout:'form',
	title:'CraigsList Search',
	labelAlign: 'top',
	buttonAlign: 'center',
	align:'center',
	autoScroll:true,
	 bodyStyle: 'background-image: url("/web/image/flights.png");'
		 ,
	items:[craigsFieldSet]
        
    });
	
    
  
};




Ext.extend(craigsListPanel, Ext.FormPanel, {

   
    }

   
);

Ext.reg('craigsListPanel', craigsListPanel); 