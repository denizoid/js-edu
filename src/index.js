/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = 'family', 
  knowsProgramming = true,
  config = {family: 4}
  ) {
    let result = 0;
    let master_speed = 0.375;
    let basic_speed = 1;
    if (knowsProgramming) {
      if (300/(master_speed*config[focus]) % 1 > 0) return Math.floor(300/(master_speed*config[focus]))+1;
      else return Math.floor(300/(master_speed*config[focus]));
    }
    else {
      if (300/(master_speed*config[focus]) % 1 > 0) result += Math.floor(300/(master_speed*config[focus]))+1;
      else result += Math.floor(300/(master_speed*config[focus]));
    }
    if (500/(basic_speed*config[focus]) % 1 >= 0.5) result += Math.floor(500/(basic_speed*config[focus]))+1;
    else result += Math.floor(500/(basic_speed*config[focus]));
    return result;
};
  