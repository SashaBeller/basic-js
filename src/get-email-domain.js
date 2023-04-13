const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(mail) {
    let position;
    for (let i = 0; i < mail.length; i++) {
      if(mail.charAt(i) == '@') {
        position = i;
      } 
    } 
    return mail.slice(position + 1) 
}

module.exports = {
  getEmailDomain
};
