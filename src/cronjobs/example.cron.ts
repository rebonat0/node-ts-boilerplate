/* eslint no-labels: ["error", { "allowLoop": true }] */
import fs from 'fs';

export const name = 'cronjob_name';
export const tz = 'America/Sao_Paulo';
export const cron = '*/5 * * * * *';

function checkHalt() {
  if (fs.existsSync('./example.cron.lock')) {
    console.log(`[!] ${name} will now halt!`);
    return true;
  }
  return false;
}

export async function main(start, finish) {
  if (checkHalt()) return;

  const instanceId = start(1);
  if (instanceId !== false) {
    // do something
    console.log('test');
    finish();
  }
}
