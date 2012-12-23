Ext.define("App.view.Main", {
    extend: 'Ext.tab.Panel',
    id: 'mainview',
    
    config: {
        tabBarPosition: 'bottom',
        
        defaults: {
            layout: 'fit'
        },
        
        items: [
            {
                id: 'home',
                title: 'Welcome',
                iconCls: 'home',
                
                items: [
                    {
                        xtype: 'homepage'
                    }
                ]
            },
            
            {
                id: 'sections',
                title: 'Handbook',
                iconCls: 'bookmarks',
                
                items: [
                    {
                        xtype: 'sectionslist'
                    }
                ]
            },

            {
                title: 'Tweet-a-Medic',
                iconCls: 'team',
                
                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Street Med Wiki'

                },
                
                html: [

                    "Development and maintainace of the <i><b>Street Med Wiki</i></b> in ongoing.",
                    ' The wiki hosts a detailed <a target="_blank" href=\"http://www.streetmed.org/wiki/show/Student+handbook/">Student Handbook</a>',
					' searched and printed.<br><br>', 
					
					' IMPORTANT: Our resources highlight the diversity of approaches to street medicine, recommends training, and suggests running with',
					' a buddy and an affinity group to any demonstration.',   
                ].join("")
            },
           {
                title: 'More Info',
                iconCls: 'info',
                
                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Street Med Wiki'

                },
                
                html: [

                    "Development and maintainace of the <i><b>Street Med Wiki</i></b> in ongoing.",
                    ' The wiki hosts a detailed <a target="_blank" href=\"http://www.streetmed.org/wiki/show/Student+handbook/">Student Handbook</a>',
                    ' searched and printed.<br><br>', 
                    
                    ' IMPORTANT: Our resources highlight the diversity of approaches to street medicine, recommends training, and suggests running with',
                    ' a buddy and an affinity group to any demonstration.',   
                ].join("")
            },

        ]
    }
});

/**
 * Fix for Bug TOUCH-2665 (Sencha Touch 2.0.1 RC)
 * must be removed in next release
 */
Ext.define('App.Tabfix', {
    override: 'Ext.tab.Panel',
    doTabChange: function(tabBar, newTab) {
        this.setActiveItem(tabBar.indexOf(newTab));
    }
});