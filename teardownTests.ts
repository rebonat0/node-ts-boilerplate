import prisma from './src/services/prisma';
import redisClient from './src/helpers/redis';

const tearDown = async () => {
  try {
    await prisma.$disconnect();

    await redisClient.quit();

    await new Promise<void>((resolve) => {
      redisClient.quit(() => {
          resolve();
      });
    });
    // redis.quit() creates a thread to close the connection.
    // We wait until all threads have been run once to ensure the connection closes.
    await new Promise(resolve => setImmediate(resolve));
  } catch (e) { }
};

module.exports = tearDown
