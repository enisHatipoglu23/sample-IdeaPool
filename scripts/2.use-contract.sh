#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 0: Check for environment variable with contract name"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$CONTRACT is set to [ $CONTRACT ]"

echo
echo
echo ---------------------------------------------------------
echo "Step 1: Call 'change' functions on the contract"
echo ---------------------------------------------------------
echo

near call $CONTRACT addIdea '{"head":"ideaPool", "intro":"loremipsum", "idea":"good"}' --accountId $CONTRACT

echo
echo "now run this script again to see changes made by this file"
exit 0
