'use strict';

/**
 * chain-size router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::chain-size.chain-size');
