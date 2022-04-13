import { defineSubCommand } from '@cliz/cli';

export default defineSubCommand((createCommand) => {
  return createCommand('测试').action(async ({ logger }) => {
    logger.error('@TODO');
  });
});
