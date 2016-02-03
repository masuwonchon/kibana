import _ from 'lodash';
import angular from 'angular';
define(function (require) {

  /**
   * Take text from the model and present it to the user as a string
   * @param {text} model value
   * @returns {string}
   */
  return function toUser(text) {
    if (text == null) return '';
    if (_.isObject(text)) {
      if (text.query_string) return toUser(text.query_string.query);
      return angular.toJson(text);
    }
    return '' + text;
  };
});
