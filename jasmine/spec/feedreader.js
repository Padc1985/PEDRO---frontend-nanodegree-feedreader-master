/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        // testa se todos os feeds tem uma URL;
        
        it('tem alguma URL', function() {
        allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined;
                expect(feed.url.length).toBeGreaterThan(0);
            });
        });
        
        

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        
        // testa se todos os feeds tem um Nome; 
        it('tem nome', function() {
        allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
        
        
        
        
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('O menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        
        // testa se a classe .menu-hidden já está em funcionamento
        it('o menu esta escondido', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        
         // testa se ao clicar no botão do menu ele aparece e desaparece 
        it('alterar quando for clicado', function() { 
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
});
    /* TODO: Write a new test suite named "Initial Entries" */
        describe('Entradas iniciais', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
            
            
            // testa se terá pelo menos um elemento .entry no .feed quando terminar o loadFeed
            
            beforeEach(function(done) {
                loadFeed(0, done);
        }); 
         it('exista pelo menos um elemento .entry no contêiner .feed.', function(){
             expect($('.feed').find('.entry').length).not.toBe(0);
             
              });

    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    
    // testa se o conteúdo muda quando terminar o loadFeed
        describe('Nova seleção de feed', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var initial, after;
        beforeEach(function(done) {
           $('.feed').empty();
            loadFeed(0, function() { 
                initial = $('.feed').find('.entry:first').text();
                loadFeed(1, function() {
                    after = $('.feed').find('.entry:first').text();
                    done();
                });
            });


        });
        it('carrega um novo conteudo quando um novo feed for carregado, o conteudo deve mudar.', function() {
            expect(after).not.toEqual(initial);
        });
    });    
}());
