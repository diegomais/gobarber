import Bee from 'bee-queue';

import redisConfig from '../config/redis';

import CancellationMail from '../app/jobs/CancellationMail';

const jobs = [CancellationMail];

class Queue {
  constructor() {
    this.queues = {};

    this.init();
  }

  // Create queue
  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = { bee: new Bee(key, { redis: redisConfig }), handle };
    });
  }

  // Create job
  add(queue, job) {
    return this.queues[queue].bee.createJob(job).save();
  }

  // Process job
  processQueue() {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key];

      bee.on('failed', this.handleFailure).process(handle);
    });
  }

  // Report a failure
  handleFailure(job, err) {
    console.log(`Job ${job.id} failed with error ${err.message}`);
  }
}

export default new Queue();
