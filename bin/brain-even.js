#!/usr/bin/env node

import './brain-games.js';
import { introText, checkFunction, temp } from '../src/index.js';

console.log(introText);
console.log(checkFunction(temp));
