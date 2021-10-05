#!/bin/sh

submission_file=${1:-submission.txt}

cat "$submission_file" > contracts/submission.sol
truffle test test/submission.js
