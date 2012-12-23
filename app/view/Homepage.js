Ext.define('App.view.Homepage', {
    extend: 'Ext.Panel',
    xtype: 'homepage',
    
    requires: [
        'Ext.TitleBar'
    ],
    
    config: {
        scrollable: true,
        
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Street Med Lite'
            },

            {
                styleHtmlContent: true,
                maxWidth: 750,
                html: '<div style="padding: 10px; -webkit-border-radius: 7px; background-color: rgba(255,255,255,0.5);"><p>This app provides basic information for activists on being prepared, ' +
                      'staying safe, and supporting others at protests and demonstrations.</p> '+
					  '<p><b>IMPORTANT!</b> Our resources highlight the diversity of approaches to street medicine, recommends training, and suggests running with a buddy and an affinity group to any protest.</p>'+
                      '<p>Send your feedback or contact us by sending an email to <a target="_blank" href=\"<a href="mailto:admin@streetmed.org">admin@streetmed.org</a></p></div>'
            }
        ]
    }
});