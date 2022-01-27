'use strict';

/**
 * ring service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ring.ring');
