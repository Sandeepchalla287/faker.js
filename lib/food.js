/**
 *
 * @namespace faker.food
 */
var food = function (faker) {
    var self = this;
  /**
     * indian
     *
     * @method faker.food.indian
     */
    self.indian = function() {
        return faker.random.arrayElement(faker.definitions.food.indian);
    };
  
    /**
     * chinese
     *
     * @method faker.food.chinese
     */
    self.chinese = function() {
        return faker.random.arrayElement(faker.definitions.food.chinese);
    };
  
   /**
     * italian
     *
     * @method faker.food.italian
     */
    self.italian = function() {
        return faker.random.arrayElement(faker.definitions.food.italian);
    };
    
  /**
     * continental
     *
     * @method faker.food.continental
     */
    self.continental = function() {
        return faker.random.arrayElement(faker.definitions.food.continental);
    };
  /**
     * drinks
     *
     * @method faker.food.drinks
     */
    self.drinks = function() {
        return faker.random.arrayElement(faker.definitions.food.drinks);
     };
   
  };
  
  module['exports'] = food;