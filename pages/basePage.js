
var basePage = function(){

        this.timeout = {
            'xs': 420,
            's' : 1000,
            'm' : 2000,
            'l' : 5000,
            'xl': 9000,
            'xxl': 15000
        };

        /**
         * get an element's width
         * extends protractor's ElementFinder
         * @return {int} - the width of the element
         */
        protractor.ElementFinder.prototype.getWidth = function() {
            return this.getSize().then(size => {
                return size.width;
            });
        };
    

    /**
     * wait and verify that a page is loaded
     * @returns {promise}
     * @requires a page to include `pageLoaded` method
     */
    this.loaded = function() {
        return browser.wait(() => {
            return this.pageLoaded();
        }, this.timeout.xl, 'timeout: waiting for page to load. The url is: ' + this.url);
    }

    /**
     * navigate to a page via it's `url` var
     * and verify/wait via loaded()
     * @requires page have both `url` and `pageLoaded` properties
     */
    this.goto= function() {
        browser.get(this.url, this.timeout.xl);
        return this.loaded();
    }

    /**
     * Wrappers for expected conditions
     * I find ECs to be poorly named, so we wrap them in methods
     * that are 9% more sexy, and allow us to add logging, etc...
     * @returns {ExpectedCondition}
     */
    this.isVisible= function(locator) {
        return protractor.ExpectedConditions.visibilityOf(locator);
    }

    this.isNotVisible= function(locator) {
        return protractor.ExpectedConditions.invisibilityOf(locator);
    }

    this.titleIs= function(title) {
        return protractor.ExpectedConditions.titleIs(title);
    }

    this.getElementText= function(element) {
        return element.getText();
    }

    /**
     * Webdriver equivalent to hitting Enter/Return key.
     */
    this.hitEnter= function() {
        return browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

}

module.exports  = new basePage();