#!/bin/sh

npm ci

npx playwright test --shard=1/3
npx playwright test --shard=2/3
npx playwright test --shard=3/3
