/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AdsPixelStatsResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelStatsResult extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      aggregation: 'aggregation',
      data: 'data',
      start_time: 'start_time'
    });
  }

  static get Aggregation (): Object {
    return Object.freeze({
      browser_type: 'browser_type',
      custom_data_field: 'custom_data_field',
      device_os: 'device_os',
      device_type: 'device_type',
      event: 'event',
      host: 'host',
      pixel_fire: 'pixel_fire',
      url: 'url',
      event_total_counts: 'event_total_counts'
    });
  }
}
