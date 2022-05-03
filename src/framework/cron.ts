/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import { CronJob } from 'cron';
import got, { ExtendOptions } from 'got';
import fs from 'fs';
import cmdline from 'node-cmdline-parser';
import * as crons from '../cronjobs';

const singleton = {};

interface ICron {
  name: string;
  tz: string;
  cron: string;
  main: Function;
  instances?: any;
}

export default function () {
  if (cmdline.keyexists('runcronjob')) {
    const cron2run = String(cmdline.get('runcronjob')).toLowerCase();
    if (Object.prototype.hasOwnProperty.call(crons, cron2run)) {
      console.log(`Executing cronjob: ${cron2run}`);
      crons[cron2run].main(() => true, () => true);
    } else {
      console.log(`Cronjob does not exist: ${cron2run}`);
    }
  }

  const enableCronList = String(cmdline.get('cron')).split(',');

  Object.values(crons).forEach((cron: ICron) => {
    const start = (maxSimultaneous = 1) => {
      const gotRequest = got.extend({
        options: got.mergeOptions(got.defaults.options, {
          headers: {
            'user-agent': `${cron.name}`,
          },
        }),
      } as ExtendOptions);

      // create a singleton object
      if (!Array.isArray(singleton[cron.name])) {
        console.log(`Creating ${maxSimultaneous} slots`);
        singleton[cron.name] = Array.from(new Array(maxSimultaneous));
      }

      // check for lock file
      if (fs.existsSync('./cron.lock')) {
        console.log(`Cron task wont run because cron.lock was found: ${cron.name}`);
      } else {
        // find an empty slot on singleton
        const emptyIndex = singleton[cron.name].findIndex((i: any) => typeof i === 'undefined') + 1;

        // no empty slot?
        if (emptyIndex === 0) {
          // console.log("No empty slot")
          return false;
        }
        // mark slot as running
        console.log(`Slot ${emptyIndex} is empty`);
        singleton[cron.name][emptyIndex - 1] = true;

        try {
          process.env[`HEALTHCHECKS_KEY_${cron.name.toUpperCase()}`] && gotRequest(`${process.env[`HEALTHCHECKS_KEY_${cron.name.toUpperCase()}`]}/start`).then(() => {}).catch(() => {});
        } catch (e) {}

        try {
          process.env[`HEALTHCHECKS_KEY_${cron.name.toUpperCase()}_${emptyIndex}`] && gotRequest(`${process.env[`HEALTHCHECKS_KEY_${cron.name.toUpperCase()}_${emptyIndex}`]}/start`).then(() => {}).catch(() => {});
        } catch (e) {}
        console.log(`${cron.name} [${emptyIndex}]`);

        return emptyIndex;
      }
    };

    const finish = (instanceId = 1) => {
      const gotRequest = got.extend({
        options: got.mergeOptions(got.defaults.options, {
          headers: {
            'user-agent': `${cron.name}/${instanceId}`,
          },
        }),
      } as ExtendOptions);

      try {
        process.env[`HEALTHCHECKS_KEY_${cron.name.toUpperCase()}`] && gotRequest(process.env[`HEALTHCHECKS_KEY_${cron.name.toUpperCase()}`] as string).then(() => {}).catch(() => {});
      } catch (e) {}
      try {
        process.env[`HEALTHCHECKS_KEY_${cron.name.toUpperCase()}_${instanceId}`] && gotRequest(process.env[`HEALTHCHECKS_KEY_${cron.name.toUpperCase()}_${instanceId}`] as string).then(() => {}).catch(() => {});
      } catch (e) {}

      console.log(`${cron.name} closed instance ${instanceId}`);

      singleton[cron.name][instanceId - 1] = undefined;
    };

    if (enableCronList[0] === 'null' || enableCronList[0] === 'undefined' || enableCronList.includes(cron.name.toUpperCase())) {
      if (cron.instances) {
        for (let i = 1; i <= cron.instances; i++) {
          setTimeout(() => console.log(`Initiating ${cron.name} [${i}]`), 10 * i);
          setTimeout(() => new CronJob(cron.cron, () => cron.main(start, finish), null, undefined, cron.tz || undefined).start(), 10 * i);
        }
      } else {
        console.log(`Initiating ${cron.name}`);
        new CronJob(cron.cron, () => cron.main(start, finish), null, undefined, cron.tz || undefined).start();
      }
    }
  });
}
