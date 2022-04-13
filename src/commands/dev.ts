import { defineSubCommand } from '@cliz/cli';

export default defineSubCommand((createCommand) => {
  return createCommand('开发').action(async ({ logger }) => {
    logger.info('@TODO');
  });
});
