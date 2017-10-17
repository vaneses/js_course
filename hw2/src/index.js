import main from './parse_operation';

// [ { "date": "2017-07-31", "amount": "5422", "links": [ { "name": "link1", "href": "http://google.com", "method": "GET" } ] }, { "date": "2017-07-31", "amount": "34343", "links": [ { "name": "link2", "href": "https://amazon.com", "method": "GET" } ] }, { "date": "2017-08-31", "amount": "5422", "links": [ { "name": "link1", "href": "https://testsense.alfabank.ru/marathon/ui/#/apps/%2Fplatform%2Fui%2Ftemplates", "method": "GET" } ] }]

alert(JSON.stringify(main(), null, 4));

//alert(getString());