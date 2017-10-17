import {modifyJSON} from '../src/parse_operation'



describe('modify JSON', function(){
    it('should modify JSON operation object', function(){
        let inObject = [
            {
                "date": "2017-07-31",
                "amount": "5422",
                "links": [
                  {
                    "name": "link1",
                    "href": "http://google.com",
                    "method": "GET"
                  }
                ]
            },
        
            {
                "date": "2017-07-31",
                "amount": "34343",
                "links": [
                  {
                    "name": "link2",
                    "href": "https://amazon.com",
                    "method": "GET"
                  }
                ]
            },
        
            {
                "date": "2017-08-31",
                "amount": "5422",
                "links": [
                  {
                    "name": "link1",
                    "href": "https://testsense.alfabank.ru/marathon/ui/#/apps/%2Fplatform%2Fui%2Ftemplates",
                    "method": "GET"
                  }
                ]
            }
        ]
        
        let outObject = {
            "2017-08-31": {
                "operations": [
                    {
                        "date": "2017-08-31",
                        "amount": "5422",
                        "links": [
                          {
                            "name": "link1",
                            "href": "https://testsense.alfabank.ru/marathon/ui/#/apps/%2Fplatform%2Fui%2Ftemplates",
                            "method": "GET"
                          }
                        ]
                    }
                ],
                "links": [
                    {
                      "name": "link1",
                      "href": "https://testsense.alfabank.ru/marathon/ui/#/apps/%2Fplatform%2Fui%2Ftemplates",
                      "method": "GET"
                    }
                ]
            },
            "2017-07-31": {
                "operations": [
                    {
                        "date": "2017-07-31",
                        "amount": "5422",
                        "links": [
                          {
                            "name": "link1",
                            "href": "http://google.com",
                            "method": "GET"
                          }
                        ]
                    },
                    {
                        "date": "2017-07-31",
                        "amount": "34343",
                        "links": [
                          {
                            "name": "link2",
                            "href": "https://amazon.com",
                            "method": "GET"
                          }
                        ]
                    }
                ],
                "links": [
                    {
                      "name": "link1",
                      "href": "http://google.com",
                      "method": "GET"
                    },
                    {
                      "name": "link2",
                      "href": "https://amazon.com",
                      "method": "GET"
                    }
                ]
            }
        }

        expect(modifyJSON(inObject)).toEqual(outObject);
    });
});