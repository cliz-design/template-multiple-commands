import { defineSubCommand } from '@cliz/cli';

export default defineSubCommand((createCommand) => {
  return createCommand('构建').action(async ({ logger }) => {
    logger.info('@TODO');
  });
});
