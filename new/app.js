/**
 * Created by lakshmi on 1/26/16.
 */

angular.module('myApp',[])
    .controller("myCtrl", function($scope) {

        $scope.services = [{name: 'Finance', path: 'images/1-finance.png', item: 1}, {
            name: 'Supply Chain',
            path: 'images/2-supply-chain-and-logistics.png',
            item: 2
        },
            {name: 'Sales', path: 'images/3-sales.png', item: 3}, {
                name: 'Marketting',
                path: 'images/4-marketting.png',
                item: 4
            },
            {name: 'Services', path: 'images/5-services.png', item: 5}, {
                name: 'Chanel Management',
                path: 'images/6-chanel-management.png',
                item: 6
            },
            {name: 'Customer Services', path: 'images/7-customer-services.png', item: 7}, {
                name: 'Procurement',
                path: 'images/8-procurement.png',
                item: 8
            }];

        $scope.jsonData = [{
            "_id": "569961cc6223326017000008",
            "created_at": "2016-01-15T21:17:00.298Z",
            "updated_at": "2016-01-15T21:17:00.297Z",
            "no_of_services": 1,
            "name": "Sales",
            "type": "Core Value",
            "description": "test description",
            "__v": 0,
            "services": [{
                "no_of_capabilities": 1,
                "created_at": "2016-01-15T21:17:00.289Z",
                "updated_at": "2016-01-15T21:17:00.289Z",
                "name": "Configure Offerings",
                "type": "Strategic",
                "category": "FP&A",
                "_id": "569961cb6223326017000004",
                "capabilities": [   {
                    "created_at": "2016-01-15T21:17:00.289Z",
                    "updated_at": "2016-01-15T21:17:00.288Z",
                    "name": "Simplified SW Offers",
                    "type": "Operational",
                    "description": "test",
                    "_id": "569961cb6223326017000005",
                    "default_features": [{
                        "name": "Program Eligibility",
                        "description": "test",
                        "type": "Operational",
                        "region_name": "All",
                        "region_scope": "Global",
                        "_id": "569961cb6223326017000007",
                        "status": "Active"
                    }, {
                        "name": "Offer Eligibility",
                        "description": "test",
                        "type": "Operational",
                        "region_name": "All",
                        "region_scope": "Global",
                        "_id": "569961cb6223326017000006",
                        "status": "Active"
                    }],
                    "status": "Active"
                }],
                "status": "Active"
            }],
            "status": "Active"
        }, {
            "_id": "569feeadc6951fc02677f3b8",
            "created_at": "2016-01-20T20:31:43.433Z",
            "updated_at": "2016-01-20T20:31:43.433Z",
            "no_of_services": 2,
            "name": "Finance",
            "type": "Support",
            "industry": "High-Tech",
            "description": "",
            "__v": 0,
            "services": [{
                "no_of_capabilities": 4,
                "created_at": "2016-01-20T20:31:43.427Z",
                "updated_at": "2016-01-20T20:31:43.427Z",
                "name": "Physical Asset Recovery & Disposal",
                "type": "Operational",
                "category": "Acquire_To_Retire",
                "shared_service": false,
                "_id": "569feeadc6951fc02677f3b9",
                "capabilities": [{
                    "created_at": "2016-01-20T20:31:43.428Z",
                    "updated_at": "2016-01-20T20:31:43.428Z",
                    "name": "Recover Physical Assets",
                    "type": "Operational",
                    "description": "Involves taking steps to handle the lost, stolen, or damaged goods and establishes programs for reducing and controlling such losses. ",
                    "_id": "569feeadc6951fc02677f3bd",
                    "default_features": [],
                    "status": "Active"
                }, {
                    "created_at": "2016-01-20T20:31:43.429Z",
                    "updated_at": "2016-01-20T20:31:43.429Z",
                    "name": "Dispose Assets",
                    "type": "Operational",
                    "description": "Approvals required for the disposal of a physical asset, and to coordinate other required capabilities, including update of the physical asset register and fixed asset accounting register.",
                    "_id": "569feeadc6951fc02677f3bc",
                    "default_features": [],
                    "status": "Active"
                }, {
                    "created_at": "2016-01-20T20:31:43.430Z",
                    "updated_at": "2016-01-20T20:31:43.430Z",
                    "name": "Reconcile Bank Accounts",
                    "type": "Operational",
                    "description": "Perform period end reconciliation between bank account activities and recorded journal entries.",
                    "_id": "569feeadc6951fc02677f3bb",
                    "default_features": [],
                    "status": "Active"
                }, {
                    "created_at": "2016-01-20T20:31:43.431Z",
                    "updated_at": "2016-01-20T20:31:43.431Z",
                    "name": "Manage Bank Accounts",
                    "type": "Operational",
                    "description": "Define and manage bank accounts (e.g. change signatory, account types, electronic vs. paper statements etc.) according to business needs.",
                    "_id": "569feeadc6951fc02677f3ba",
                    "default_features": [],
                    "status": "Active"
                }],
                "status": "Active"
            }, {
                "no_of_capabilities": 0,
                "created_at": "2016-01-20T20:31:43.432Z",
                "updated_at": "2016-01-20T20:31:43.432Z",
                "name": "Internal Banks & Reconciliation",
                "type": "Operational",
                "category": "Treasury",
                "description": "Manages in-house bank accounts and support the reconciliation between bank account activities and recorded journal entries.",
                "shared_service": false,
                "_id": "569feeadc6951fc02677f3be",
                "capabilities": [],
                "status": "Active"
            }],
            "status": "Active"
        }, {
            "_id": "56a00c2dc6951fc02677f3bf",
            "created_at": "2016-01-20T22:37:33.962Z",
            "updated_at": "2016-01-20T22:37:33.962Z",
            "no_of_services": 1,
            "name": "Supply Chain & Logistics",
            "type": "Support",
            "industry": "High-Tech",
            "description": "",
            "__v": 0,
            "services": [{
                "name": "Sales",
                "type": "Core Value 115",
                "description": "test description",
                "_id": "56a0179d85b34cc411eb3fdd",
                "capabilities": [{
                    "name": "Simplified SW Offers 987987",
                    "type": "Operational",
                    "description": "test",
                    "_id": "56a0179d85b34cc411eb3fde",
                    "default_features": [],
                    "status": "Active"
                }],
                "status": "Active"
            }, {
                "name": "Software Fulfillment",
                "type": "Operational",
                "category": "Supply Chain & Logistics",
                "_id": "56a00c2dc6951fc02677f3c0",
                "capabilities": [{
                    "name": "Disti RTM for SW",
                    "type": "Operational",
                    "description": "To Enable Disti Fulfiullment of SW Sales 111111",
                    "_id": "56a00c2dc6951fc02677f3c2",
                    "default_features": [],
                    "status": "Active"
                }, {
                    "name": "Simplified Provisioing & APIs 123",
                    "type": "Operational",
                    "description": "Deliver B2B APIs that support a simplified subscription provisioning capability for each Subscription SW Offer type, that support every offer within each Subscription offer type.",
                    "_id": "56a00c2dc6951fc02677f3c1",
                    "default_features": [],
                    "status": "Active"
                }],
                "status": "Active"
            }],
            "status": "Active"
        }];


        $scope.myArr = [];

        $scope.eventName= 'Finance';

        $scope.jsonData.forEach(function(functionObj){
            var obj = {};
            obj["name"] = functionObj.name;
           // console.log('********  '+ functionObj.name);
            functionObj.services.forEach(function(service){

                if(!service.category){
                    return;
                }

               /*
                    if(!obj[service.category])
                    obj[service.category] = [];
                    obj[service.category].push(service);
               */

                if(!obj["category"])
                    obj["category"] = [];
                obj["category"].push(service);



            });
                       $scope.myArr.push(obj);
        });

     //   console.log("My Array", JSON.stringify($scope.myArr));


    })


    .directive("tableHead", function(){
        return {
            restrict: "A",
            templateUrl: "tableHeadDirective.html",
            scope: {

               // myArr2:"=",
                events: "=",
               events2: "="

            },
            link: function(scope,elem, attr){
                scope.showFlag = 0;
                scope.eventName="Finance";
                scope.clicked = function(eventName) {
                   // console.log(angular.element(elem.this(1).children()).addClass("enlarge"));
                  //  console.log(angular.element(elem.children(1).children()).addClass("enlarge"));
                   // $(".functionList").addClass(".enlarge");
                    scope.eventName = eventName;
                   // console.log(scope.eventName)
                };
            }
        }
    });
