/*
 * This is a basic func test for a Common application.
 */
YUI.add('acmojitdone1client-tests', function (Y) {

    var suite = new Y.Test.Suite("Common: acmojitdone1client");

    suite.add(new Y.Test.Case({

        "test acmojitdone1client": function() {
            var that = this,
                url = 'http://screwdriver2.cocktails.corp.gq1.yahoo.com:10099';
                params = {},
                config = {};

            /*
            Y.mojito.lib.REST.GET(url, params, config, function(err, response) {
                that.wait(function () {
                    Y.Assert.areEqual('Hello World', response);
                });
            });
            */
            console.log('Y: ' + Y);
            Y.log('Y: ' + Y);
            // Y.error('Y: ' + Y);
            Object.keys(Y).forEach(function (key) {
                console.log('Y.' + key);
                Y.log('Y.' + key);
                // Y.error('Y.' + key);
            });
            Y.one('#testcase > option[value="done1"]').set('selected','selected'); 
            Y.one('#acMojitButton').simulate('click');
            that.wait(function(){
                Y.Assert.areEqual('Hello Action Context Testing', Y.one('#ACMojitTest').get('innerHTML').match(/Hello Action Context Testing/gi));
            }, 4000);
        }

    }));

    Y.Test.Runner.add(suite);

}, '0.0.1', { requires: ['test', 'node', 'node-event-simulate', 'console']});
