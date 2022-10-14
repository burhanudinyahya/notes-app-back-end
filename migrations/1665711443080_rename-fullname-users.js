/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.renameColumn('users', 'full_name', 'fullname');
};
