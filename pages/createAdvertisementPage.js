var utils = require('./utilityFunctions');
var baseTest = require('../pages/basePage');

var CreateAdvertisementFormPage = function(){
        this.advertisementName = element(by.css('input[ng-model="$ctrl.advertisement.name"]'));
        this.advertisementStreet = element(by.css('input[ng-model="$ctrl.advertisement.street"]'));
        this.advertisementRoom = element(by.css('input[ng-model="$ctrl.advertisement.rooms"]'));
        this.advertisementPrice = element(by.css('input[ng-model="$ctrl.advertisement.price"]'));
        this.advertisementStatus=element(by.css('md-checkbox[ng-model="$ctrl.advertisement.status"]>div:nth-of-type(1)'));
        this.saveBtn = element(by.xpath('(.//*[normalize-space(text()) and normalize-space(.)=\'cancel\'])[1]/following::button[1]'));
        this.cancelBttn = element(by.css('button:nth-of-type(1)>span'));


    /**
     * click on the New add button
     * create valid advertisement with random name
     */
    this.createNewAdvertisement=function(name, street, room,price) {
         this.advertisementName.sendKeys(name);
         this.advertisementStreet.sendKeys(street);
         this.advertisementRoom.sendKeys(room);
         this.advertisementPrice.sendKeys(price);
         this.advertisementStatus.click();
         this.saveBtn.click();
        };
 
            /**
     * click on the New add button
     * create valid advertisement with random name
     */
    this.createNewAdvertisementByEnterButton=function(name, street, room,price) {
        this.advertisementName.sendKeys(name);
        this.advertisementStreet.sendKeys(street);
        this.advertisementRoom.sendKeys(room);
        this.advertisementPrice.sendKeys(price);
        this.advertisementStatus.click();
        baseTest.hitEnter();
       };

               /**
     * click on the CLOSE add button
     * 
     */
    this.closeButton = function(){
        return this.cancelBttn.click()
    }
}

module.exports = new CreateAdvertisementFormPage();
