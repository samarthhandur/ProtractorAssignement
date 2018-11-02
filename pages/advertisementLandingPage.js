require('./basePage');

var AdvertisementLandingPage =function(){
   
        this.addNewAdvertisementButton = element(by.css('a>md-icon'));
        this.firstAdRow = element(by.css('tbody>tr:nth-of-type(1)>td:nth-of-type(1)'));
    

    /**
     * click on the first ad for editing
     */
    this.editAdvertisement = function(){
        return this.firstAdRow.click();
        
        };

         /**
     * click on the first ad for editing
     */
    this.newAdvertisement = function(){
        return this.addNewAdvertisementButton.click();
        };
    
}
module.exports = new AdvertisementLandingPage();
