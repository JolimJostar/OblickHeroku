'use strict';

/**
 * chain-size service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chain-size.chain-size');
