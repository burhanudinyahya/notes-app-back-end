/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.renameColumn('users', 'full_name', 'fullname');
};

exports.down = (pgm) => {
  pgm.renameColumn('users', 'fullname', 'full_bane');
};
