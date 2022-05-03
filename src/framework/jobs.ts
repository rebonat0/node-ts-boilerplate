import * as jobs from '../jobs';

export default function runJobs() {
  Object.values(jobs).forEach((item: any) => item.process());
}
