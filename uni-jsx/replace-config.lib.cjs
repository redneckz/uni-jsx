module.exports = {
  files: ['lib/**/*.js'],
  from: /((import|export)\s+[^'";]*\s+from\s+['"](\.\/|(\.\.\/)+)[^'";]*)['"];/g,
  to: "$1.js';",
  encoding: 'utf8'
};
