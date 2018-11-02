var createNewPage = require('../pages/CreateAdvertisementPage');
var landingPage = require('../pages/AdvertisementLandingPage');
var baseTest = require('../pages/basePage');
var utils = require('../pages/utilityFunctions');

describe('Protractor Demo App', function() {
    beforeEach(() => {
        browser.get('https://admin-advertisement.herokuapp.com/');
    })
    it('as a user i want to add new advertisement by pressing save button', function() {
        landingPage.newAdvertisement();
        createNewPage.createNewAdvertisement(utils.randomString(), utils.randomInteger(),utils.randomInteger(),utils.randomInteger());
        expect(baseTest.isVisible(landingPage.firstAdRow), true);
    });


    it('as a user I should be able to edit advertisement', function(){
        landingPage.editAdvertisement();
        expect(baseTest.isVisible(createNewPage.cancelBttn),true);
    })

    it('as a user I should be able to provide proper price', function(){
        landingPage.newAdvertisement();
        createNewPage.createNewAdvertisement(utils.randomString(), utils.randomInteger(),utils.randomInteger(),"uy");
        expect(baseTest.isVisible(createNewPage.saveBtn),false);
    })


    it('as a user I should be able to provide proper Name', function(){
        landingPage.newAdvertisement();
        createNewPage.createNewAdvertisement("", utils.randomInteger(),utils.randomInteger(),utils.randomInteger());
        expect(baseTest.isVisible(createNewPage.saveBtn),false);
    })

    it('as a user I should be able see entry of ad in list', function(){
        var name = utils.randomString()
        landingPage.newAdvertisement();
        createNewPage.createNewAdvertisement(name, utils.randomInteger(),utils.randomInteger(),utils.randomInteger());
        expect(baseTest.getElementText(landingPage.firstAdRow),name);
    })

    it('as a user i want to add new advertisement by pressing ENTER button', function() {
        landingPage.newAdvertisement();
        createNewPage.createNewAdvertisementByEnterButton(utils.randomString(), utils.randomInteger(),utils.randomInteger(),utils.randomInteger());
        expect(baseTest.isVisible(landingPage.firstAdRow), true);
    });

    it('as a user I should be able to Close the editing advertisement', function(){
        landingPage.editAdvertisement();
        createNewPage.closeButton();
        expect(baseTest.isVisible(landingPage.firstAdRow),true);
    })
  });